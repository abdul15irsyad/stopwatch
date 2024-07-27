'use client';

import { Button, Grid, Text } from '@mantine/core';
import styles from './stopwatch.module.css';
import { useCallback, useEffect, useRef } from 'react';
import { mergeTime, renderTime } from '@/util/time.util';
import LocalFont from 'next/font/local';
import {
  IconFlagFilled,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerStopFilled
} from '@tabler/icons-react';
import { useStopwatchStore } from '@/zustand/use-stopwatch.store';
import { motion, AnimatePresence } from 'framer-motion';

export const chivoMono = LocalFont({
  src: '../../../public/fonts/Chivo_Mono/ChivoMono-VariableFont_wght.ttf',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const StopwatchSection = () => {
  const {
    time,
    isActive,
    laps,
    globalInterval,
    startStop,
    reset,
    setTime,
    setGlobalInterval,
    addLap
  } = useStopwatchStore();

  const lapsRef = useRef<HTMLDivElement>(null);

  const scrollLapsToTop = useCallback(() => {
    if (lapsRef.current) {
      lapsRef.current.scrollTop = 0;
    }
  }, [lapsRef]);

  useEffect(() => {
    if (isActive) {
      if (!globalInterval)
        setGlobalInterval(
          setInterval(() => {
            setTime((prev: number) => prev + 10);
          }, 10)
        );
    } else {
      if (globalInterval) {
        clearInterval(globalInterval);
        setGlobalInterval(null);
      }
    }
  }, [isActive, setTime]);

  return (
    <div className={styles['stopwatch-section']}>
      <Text fz="h1" fw="bold">
        Stopwatch
      </Text>
      <Grid>
        <Grid.Col span={12}>
          <div
            className={`${styles.stopwatch} ${chivoMono.className} ${laps?.length > 0 ? `${styles['laps-exists']}` : ''}`}
          >
            {renderTime(time)?.hours !== '00' && (
              <>
                <span className={styles.hours}>{renderTime(time)?.hours}</span>
                <span className={styles.separate}>:</span>
              </>
            )}
            <span className={styles.minutes}>{renderTime(time)?.minutes}</span>
            <span className={styles.separate}>:</span>
            <span className={styles.seconds}>{renderTime(time)?.seconds}</span>
            <span className={styles.separate}>.</span>
            <span className={styles['milli-seconds']}>
              {renderTime(time)?.milliseconds}
            </span>
          </div>
          {laps?.length > 0 && (
            <AnimatePresence>
              <div
                className={`${styles.laps} ${chivoMono.className}`}
                ref={lapsRef}
              >
                {laps
                  .map((lap, index) => {
                    const margin = lap.time - (laps[index - 1]?.time ?? 0);
                    return (
                      <motion.div
                        key={index}
                        className={styles.lap}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <div className={styles.index}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className={styles.margin}>
                          +{mergeTime(renderTime(margin))}
                        </div>
                        <div className={styles.time}>
                          {mergeTime(renderTime(lap.time))}
                        </div>
                      </motion.div>
                    );
                  })
                  .reverse()}
              </div>
            </AnimatePresence>
          )}
          <div className={styles.action}>
            <Button
              size="lg"
              rightSection={
                !isActive ? (
                  <IconPlayerPlayFilled stroke={2} size={16} />
                ) : (
                  <IconPlayerPauseFilled stroke={2} size={16} />
                )
              }
              style={{ borderRadius: '1rem' }}
              onClick={() => startStop()}
            >
              {!isActive ? 'Start' : 'Stop'}
            </Button>
            {!isActive && time !== 0 && (
              <Button
                size="lg"
                rightSection={<IconPlayerStopFilled stroke={2} size={16} />}
                style={{ borderRadius: '1rem' }}
                onClick={() => reset()}
              >
                Reset
              </Button>
            )}
            {isActive && time !== 0 && (
              <Button
                size="lg"
                rightSection={<IconFlagFilled stroke={2} size={16} />}
                style={{ borderRadius: '1rem' }}
                onClick={() => {
                  scrollLapsToTop();
                  addLap(time);
                }}
              >
                Lap
              </Button>
            )}
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

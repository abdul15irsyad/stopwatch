'use client';

import { Button, Grid, Text } from '@mantine/core';
import styles from './stopwatch.module.css';
import { useEffect, useRef } from 'react';
import { renderTime } from '@/util/time.util';
import LocalFont from 'next/font/local';
import {
  IconFlagFilled,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerStopFilled
} from '@tabler/icons-react';
import { useStopwatchStore } from '@/zustand/store/use-stopwatch-store';

export const chivoMono = LocalFont({
  src: '../../../public/fonts/Chivo_Mono/ChivoMono-VariableFont_wght.ttf',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const StopwatchSection = () => {
  const title = 'Stopwatch';
  const { time, isActive, startStop, reset, setTime } = useStopwatchStore();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((prev: number) => prev + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  return (
    <div className={styles['stopwatch-section']}>
      <Text fz={'h1'} fw="bold">
        {title}
      </Text>
      <Grid>
        <Grid.Col span={12}>
          <div className={`${styles.stopwatch} ${chivoMono.className}`}>
            {renderTime(time)?.hours !== '00' && (
              <>
                <div className={styles.hours}>
                  <span>{renderTime(time)?.hours}</span>
                </div>
                <div className={styles.separate}>:</div>
              </>
            )}
            <div className={styles.minutes}>
              <span>{renderTime(time)?.minutes}</span>
            </div>
            <div className={styles.separate}>:</div>
            <div className={styles.seconds}>
              <span>{renderTime(time)?.seconds}</span>
            </div>
            <div className={styles.separate}>:</div>
            <div className={styles['milli-seconds']}>
              <span>{renderTime(time)?.milliseconds}</span>
            </div>
          </div>
          <div className={styles.action}>
            <Button
              rightSection={
                !isActive ? (
                  <IconPlayerPlayFilled stroke={2} size={14} />
                ) : (
                  <IconPlayerPauseFilled stroke={2} size={14} />
                )
              }
              onClick={() => startStop()}
            >
              {!isActive ? 'Start' : 'Stop'}
            </Button>
            {!isActive && time !== 0 && (
              <Button
                rightSection={<IconPlayerStopFilled stroke={2} size={14} />}
                onClick={() => reset()}
              >
                Reset
              </Button>
            )}
            {isActive && time !== 0 && (
              <Button rightSection={<IconFlagFilled stroke={2} size={14} />}>
                Lap
              </Button>
            )}
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

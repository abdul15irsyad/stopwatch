'use client';

import { Button, Grid, Modal, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  IconChevronDown,
  IconChevronUp,
  IconDeviceFloppy,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
  IconPlus,
  IconSettings
} from '@tabler/icons-react';
import React, { useCallback, useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { chivoMono } from '@/components/fonts/chivmono';
import { useTimerStore } from '@/hooks/zustand/use-timer.store';
import { countTime, parseTime, renderTime } from '@/util/time.util';

import styles from './timer.module.css';

export const TimerSection = () => {
  const theme = useMantineTheme();

  const {
    timer,
    time,
    isActive,
    timerInterval,
    setTimer,
    setTime,
    setTimerInterval,
    startStop,
    reset
  } = useTimerStore();
  const percentage = Math.floor((time * 100) / timer);
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [settingTimer, setSettingTimer] = useState({
    hour: parseTime(timer)?.hours ?? 0,
    minutes: parseTime(timer)?.minutes ?? 0,
    seconds: parseTime(timer)?.seconds ?? 0
  });

  useEffect(() => {
    if (time <= 0 && isActive && timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      startStop();
      ringing();
    }
  }, [time, startStop, setTimerInterval]);

  useEffect(() => {
    if (isActive) {
      if (!timerInterval)
        setTimerInterval(
          setInterval(() => {
            setTime((prev: number) => (prev > 0 ? prev - 10 : 0));
          }, 10)
        );
    } else {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    }
  }, [isActive, setTime, setTimerInterval]);

  const ringing = useCallback(() => {
    console.log('ringing');
  }, []);

  return (
    <div className={styles['timer-section']}>
      <Text fz="h1" fw="bold">
        Timer
      </Text>
      <Grid>
        <Grid.Col span={12}>
          <div className={styles.progress}>
            <CircularProgressbarWithChildren
              strokeWidth={4}
              value={percentage}
              styles={{
                path: {
                  transition: '.5s',
                  stroke:
                    percentage < 15 ? theme.colors.red[5] : theme.colors.blue[7]
                },
                trail: { stroke: theme.colors.gray[8], opacity: 0.75 }
              }}
            >
              <div className={`${styles.time} ${chivoMono.className}`}>
                {renderTime(time, true)?.hours}:
                {renderTime(time, true)?.minutes}:
                {renderTime(time, true)?.seconds}
              </div>
              <div className={`${styles.timer} ${chivoMono.className}`}>
                {!isActive && (
                  <Button
                    className={styles.setting}
                    variant="transparent"
                    onClick={() => open()}
                  >
                    <IconSettings />
                  </Button>
                )}
                <span>
                  {renderTime(timer, true)?.hours}:
                  {renderTime(timer, true)?.minutes}:
                  {renderTime(timer, true)?.seconds}
                </span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className={styles.action}>
            {time > 0 && (
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
                {!isActive ? (time < timer ? 'Resume' : 'Start') : 'Pause'}
              </Button>
            )}
            {!isActive && time !== timer && (
              <Button
                size="lg"
                rightSection={<IconPlayerStopFilled stroke={2} size={16} />}
                style={{ borderRadius: '1rem' }}
                onClick={() => reset()}
              >
                Reset
              </Button>
            )}
          </div>
        </Grid.Col>
      </Grid>
      <Modal
        className={styles['modal-set-time']}
        opened={opened}
        onClose={() => close()}
        title="Set Timer"
        fullScreen={isMobile}
        transitionProps={{
          transition: 'fade',
          duration: 300
        }}
      >
        <div className={`${styles.times} ${chivoMono.className}`}>
          {[
            {
              item: String(settingTimer.hour).padStart(2, '0'),
              label: 'hour',
              max: 23
            },
            {
              item: String(settingTimer.minutes).padStart(2, '0'),
              label: 'minutes',
              max: 59
            },
            {
              item: String(settingTimer.seconds).padStart(2, '0'),
              label: 'seconds',
              max: 59
            }
          ]
            .map(({ item, label, max }, index) => (
              <div key={index} className={styles.time}>
                <Button
                  color={theme.colors.gray[4]}
                  variant="transparent"
                  onClick={() =>
                    setSettingTimer({
                      ...settingTimer,
                      [label]:
                        settingTimer[label] === max
                          ? 0
                          : settingTimer[label] + 1
                    })
                  }
                >
                  <IconChevronUp />
                </Button>
                {item}
                <Button
                  color={theme.colors.gray[4]}
                  variant="transparent"
                  onClick={() =>
                    setSettingTimer({
                      ...settingTimer,
                      [label]:
                        settingTimer[label] === 0
                          ? max
                          : settingTimer[label] - 1
                    })
                  }
                >
                  <IconChevronDown />
                </Button>
              </div>
            ))
            .reduce<React.JSX.Element[]>((prev, curr, index) => {
              if (index > 0) {
                prev.push(<span key={`separator-${index}`}>:</span>);
              }
              prev.push(<div key={index}>{curr}</div>);
              return prev;
            }, [])}
        </div>
        <div className={styles.template}>
          <Button
            bg={theme.colors.gray[8]}
            leftSection={<IconPlus size={16} />}
            disabled={
              countTime(settingTimer) >=
              countTime({ hour: 23, minutes: 59, seconds: 30 })
            }
            onClick={() =>
              setSettingTimer((state) => {
                const result = state.seconds + 30;
                return {
                  ...settingTimer,
                  minutes: result >= 60 ? state.minutes + 1 : state.minutes,
                  seconds: result >= 60 ? result % 60 : result
                };
              })
            }
          >
            Add 30s
          </Button>
          <Button
            bg={theme.colors.gray[8]}
            leftSection={<IconPlus size={16} />}
            disabled={
              countTime(settingTimer) >=
              countTime({ hour: 23, minutes: 30, seconds: 0 })
            }
            onClick={() =>
              setSettingTimer((state) => {
                const result = state.minutes + 30;
                return {
                  ...settingTimer,
                  hour: result >= 60 ? state.hour + 1 : state.hour,
                  minutes: result >= 60 ? result % 60 : result
                };
              })
            }
          >
            Add 30m
          </Button>
        </div>
        <div className={styles.action}>
          <Button
            variant="transparent"
            style={{ color: 'white' }}
            onClick={() => close()}
          >
            Cancel
          </Button>
          <Button
            rightSection={<IconDeviceFloppy />}
            disabled={countTime(settingTimer) <= 0}
            onClick={() => {
              reset();
              setTime(() => countTime(settingTimer));
              setTimer(countTime(settingTimer));
              close();
            }}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

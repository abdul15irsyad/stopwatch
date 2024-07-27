'use client';

import { Text } from '@mantine/core';
import styles from './timer.module.css';

export const TimerSection = () => {
  const title = 'Timer';
  return (
    <div className={styles['timer-section']}>
      <Text fz={'h1'} fw="bold">
        {title}
      </Text>
    </div>
  );
};

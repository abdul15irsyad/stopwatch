'use client';

import { Text } from '@mantine/core';
import styles from './alarm.module.css';

export const AlarmSection = () => {
  const title = 'Alarm';
  return (
    <div className={styles['alarm-section']}>
      <Text fz={'h1'} fw="bold">
        {title}
      </Text>
    </div>
  );
};

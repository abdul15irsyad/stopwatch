import { Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import styles from './empty-data.module.css';

export const EmptyData = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles['empty-data']}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.illustration}>
          <Image
            className={styles.image}
            src="/images/empty-data.svg"
            alt="empty data"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.text}>
          <Text fz="h2" fw="bold">
            Empty Data
          </Text>
          <Text fz="p" c="gray.3">
            Sorry, data not found
          </Text>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

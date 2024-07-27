import Image from 'next/image';
import React from 'react';
import styles from './coming-soon.module.css';
import { Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';

export const ComingSoon = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles['coming-soon']}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.illustration}>
          <Image
            className={styles.image}
            src="/images/coming-soon.svg"
            alt="coming soon"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.text}>
          <Text fz="h2" fw="bold">
            Coming Soon
          </Text>
          <Text fz="p" c="gray.3">
            This page is under construction
          </Text>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

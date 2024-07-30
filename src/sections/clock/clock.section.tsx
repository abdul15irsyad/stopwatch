'use client';

import {
  Button,
  Grid,
  Input,
  Modal,
  Text,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { EmptyData } from '@/components/empty-data/empty-data';
import { chivoMono } from '@/components/fonts/chivmono';
import { timezones } from '@/data/timezone.data';
import { useClockStore } from '@/hooks/zustand/use-clock.store';

import styles from './clock.module.css';
dayjs.extend(utc);
dayjs.extend(timezone);

export const ClockSection = () => {
  const theme = useMantineTheme();
  const { clockInterval, time, list, setClockInterval, setTime, setList } =
    useClockStore();

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [search, setSearch] = useState<string>('');
  const filteredTimezone = timezones?.filter(
    ({ id, name, offset }) =>
      (name?.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        offset?.toLowerCase().indexOf(search.toLowerCase()) !== -1) &&
      !list.find((item) => item.id === id)
  );

  useEffect(() => {
    if (!clockInterval)
      setClockInterval(
        setInterval(() => {
          setTime(dayjs().toDate());
        }, 100)
      );

    return () => {
      if (clockInterval) {
        clearInterval(clockInterval);
        setClockInterval(null);
      }
    };
  }, []);

  const listRef = useRef<HTMLDivElement>(null);

  const scrollListToBottom = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [listRef]);

  return (
    <div className={styles['clock-section']}>
      <Text fz="h1" fw="bold">
        Clock
      </Text>
      <Grid>
        <Grid.Col span={12}>
          <div className={`${styles.clock} ${chivoMono.className}`}>
            <div className={styles.time}>{dayjs().format('HH:mm:ss')}</div>
            <div className={styles.date}>{dayjs().format('MMMM D, YYYY')}</div>
          </div>
          <div className={`${styles.list} custom-scroll`} ref={listRef}>
            <AnimatePresence>
              {list
                ?.map((item) => (
                  <motion.div
                    key={item.id}
                    className={styles.item}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <div className={styles.detail}>
                      <h4>
                        <span
                          className={`${styles['timezone-clock']} ${chivoMono.className}`}
                        >
                          {dayjs(time).tz(item.timezone).format('HH:mm')}
                        </span>{' '}
                        <span className={styles['timezone-label']}>
                          {item.name}
                        </span>
                      </h4>
                      <p>
                        {dayjs(time).tz(item.timezone).format('MMM D')} | GMT{' '}
                        {item.offset}
                      </p>
                    </div>
                    <Button
                      className={styles['btn-delete']}
                      variant="transparent"
                      onClick={() =>
                        setList(list.filter(({ id }) => id !== item.id))
                      }
                    >
                      <IconTrash color={theme.colors.red[3]} size={24} />
                    </Button>
                  </motion.div>
                ))
                .reverse()}
            </AnimatePresence>
          </div>
          <div className={styles.action}>
            <Button
              size="lg"
              rightSection={<IconPlus stroke={2} size={16} />}
              style={{ borderRadius: '1rem' }}
              onClick={open}
            >
              Add
            </Button>
          </div>
        </Grid.Col>
      </Grid>
      <Modal
        className={styles['modal-add-list']}
        opened={opened}
        onClose={() => {
          close();
          setSearch('');
        }}
        title="Add Timezone"
        fullScreen={isMobile}
        transitionProps={{
          transition: 'fade',
          duration: 300
        }}
      >
        <Input
          placeholder="search timezone"
          leftSection={<IconSearch size={16} />}
          mb="1rem"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={`${styles.timezones} custom-scroll`}>
          {filteredTimezone?.length > 0 ? (
            filteredTimezone?.map(({ id, timezone, offset, name }, index) => {
              return (
                <button
                  key={id}
                  className={styles.timezone}
                  onClick={() => {
                    if (!list.find((item) => item.id === id)) {
                      setList([...list, { id, name, timezone, offset }]);
                      close();
                      setSearch('');
                      scrollListToBottom();
                    }
                  }}
                >
                  <h4>{name}</h4>
                  <p
                    className={chivoMono.className}
                    style={{ minWidth: '72px' }}
                  >
                    GMT {offset}
                  </p>
                </button>
              );
            })
          ) : (
            <EmptyData />
          )}
        </div>
      </Modal>
    </div>
  );
};

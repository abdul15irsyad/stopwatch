'use client';

import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

import { AnalyticsProvider } from './analytics.provider';
import { ReactQueryProvider } from './react-query.provider';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AnalyticsProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AnalyticsProvider>
    </MantineProvider>
  );
};

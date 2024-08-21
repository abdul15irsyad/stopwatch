'use client';

import { createTheme, MantineProvider } from '@mantine/core';
import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

import { AnalyticsProvider } from './analytics.provider';
import { ReactQueryProvider } from './react-query.provider';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <SnackbarProvider>
        <AnalyticsProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </AnalyticsProvider>
      </SnackbarProvider>
    </MantineProvider>
  );
};

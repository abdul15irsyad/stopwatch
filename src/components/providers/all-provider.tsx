import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({});

  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    </>
  );
};

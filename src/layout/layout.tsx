import { Container } from '@mantine/core';
import { ReactNode } from 'react';

import { Navbar } from './navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <Navbar />
    </>
  );
};

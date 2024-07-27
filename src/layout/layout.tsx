import { Container } from '@mantine/core';
import { Navbar } from './navbar';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container>{children}</Container>
      <Navbar />
    </>
  );
};

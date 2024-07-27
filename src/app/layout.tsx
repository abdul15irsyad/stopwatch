import { Metadata } from 'next';
import LocalFont from 'next/font/local';
import '@mantine/core/styles.css';
import './globals.css';
import { AllProvider } from '@/components/providers/all-provider';
import { ColorSchemeScript } from '@mantine/core';
import { ReactNode } from 'react';

export const figtree = LocalFont({
  src: '../../public/fonts/Figtree/Figtree-VariableFont_wght.ttf',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: 'Stopwatch, World Clock, Timer And Alarm',
  description: 'use timer tools like stopwatch, world clock, timer and alarm'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={figtree.className}>
        <AllProvider>{children}</AllProvider>
      </body>
    </html>
  );
}

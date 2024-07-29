import '@mantine/core/styles.css';
import './globals.css';

import { ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import LocalFont from 'next/font/local';
import { ReactNode } from 'react';

import { AllProvider } from '@/components/providers/all-provider';

export const figtree = LocalFont({
  src: '../../public/fonts/Figtree/Figtree-VariableFont_wght.ttf',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://abdul-stopwatch.vercel.app';

export const commonMetaData = {
  images: `${BASE_URL}/meta-image.jpg`,
  title: 'Stopwatch, Clock And Timer',
  description: 'Timer tools like stopwatch, clock and timer'
};

export const metadata: Metadata = {
  ...commonMetaData,
  openGraph: {
    ...commonMetaData
  }
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

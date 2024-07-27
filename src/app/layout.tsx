import { Metadata } from 'next';
import LocalFont from 'next/font/local';
import '@mantine/core/styles.css';
import './globals.css';
import { AllProvider } from '@/components/providers/all-provider';
import { ColorSchemeScript } from '@mantine/core';

export const figtree = LocalFont({
  src: '../../public/fonts/Figtree/Figtree-VariableFont_wght.ttf',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: 'Clock | Irsyad Abdul',
  description: 'use timer tools like timer, stopwatch, world clock and alarm'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
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

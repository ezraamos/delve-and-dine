import type { Metadata } from 'next';
import './globals.css';
import { Lobster, Quicksand } from 'next/font/google';
import Provider from '@/components/provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lobster.className} ${quicksand.className}`}>
        <main className='text-center pt-12 flex flex-col items-center px-5 sm:px-0'>
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}

import { CustomLayout } from '@/components/layout';
import '../styles/_globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import CustomProvider from '@/redux/provider';
import { Setup } from '@/services';

config.autoAddCss = false;
const inter = Inter({ subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'] });
const appTitle = `SimpleTodo`;
const appDescription = 'Simple tasks management application';
const author = 'Magametov Abdulla';
const appUrl = `${process.env.PROJECT_URL}`;
const logoUrl = '/assets/logo';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1f618d',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${appTitle}`,
    default: appTitle,
  },
  description: appDescription,
  manifest: '/manifest.json',
  generator: 'MAU Systems',
  applicationName: appTitle,
  referrer: 'origin-when-cross-origin',
  keywords: ['todo', 'task', 'simple todo'],
  authors: [{ name: 'Abdulla' }],
  creator: author,
  publisher: author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
  },
  category: 'technology',
  other: {
    'view-transition': 'same-origin',
  },
  icons: {
    icon: `${logoUrl}/favicon.ico`,
    shortcut: `${logoUrl}/favicon.ico`,
  },
  assets: [`${appUrl}/assets`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-RU">
      <body className={inter.className}>
        <CustomProvider>
          <Setup />
          <CustomLayout>{children}</CustomLayout>
        </CustomProvider>
      </body>
    </html>
  );
}

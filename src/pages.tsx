import React from 'react';

import homeBgImage from '@assets/images/alex-and-philip-yoko-katate-osae-dori.jpeg';
import Contact from '@components/Pages/Contact/Contact';
import Dojo from '@components/Pages/Dojo';
import Home from '@components/Pages/Home';
import Senshinkan from '@components/Pages/Senshinkan';
import HakkoRyu from './components/Pages/HakkoRyu';

export type PagePath = 'home' | 'hakko-ryu' | 'senshinkan' | 'dojo' | 'contact';

export interface Page {
  path: PagePath;
  title: string;
  bgImage?: string;
  loader?: () => Promise<unknown>;
  component: React.FC<{ data: any }>;
}

export const pages: Page[] = [
  {
    bgImage: homeBgImage,
    component: Home,
    path: 'home',
    title: 'Home Page',
  },
  {
    component: HakkoRyu,
    path: 'hakko-ryu',
    title: 'Hakko Ryu Page',
  },
  {
    component: Senshinkan,
    path: 'senshinkan',
    title: 'Senshinkan Page',
  },
  {
    component: Dojo,
    path: 'dojo',
    title: 'Dojo Page',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Page',
  },
] as const;

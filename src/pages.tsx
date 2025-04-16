import React from 'react';

import Contact from '@components/Pages/Contact/Contact';
import Dojo from '@components/Pages/Dojo';
import Senshinkan from '@components/Pages/Senshinkan';
import HakkoRyu from './components/Pages/HakkoRyu';

import homeBgImage from '@assets/images/--107.jpg';
import HomeRGB from '@components/Pages/HomeRGB';
import HakkoRyuRGB from '@components/Pages/HakkoRyuRGB';

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
    // bgImage: homeBgImage,
    component: HomeRGB,
    path: 'home',
    title: 'Home Page',
  },
  {
    component: HakkoRyuRGB,
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

import React from 'react';

import Contact from '@components/Pages/Contact/Contact';
import Dojo from '@components/Pages/Dojo';
import Senshinkan from '@components/Pages/Senshinkan';

import HakkoRyuRGB from '@components/Pages/HakkoRyu';
import Home from '@components/Pages/Home';

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
    component: Home,
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

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
    title: 'Home - Hakko Denshin Ryu Jujutsu',
  },
  {
    component: HakkoRyuRGB,
    path: 'hakko-ryu',
    title: 'Hakko Ryu - Hakko Denshin Ryu Jujutsu',
  },
  {
    component: Senshinkan,
    path: 'senshinkan',
    title: 'Senshinkan Romania - Hakko Denshin Ryu Jujutsu',
  },
  {
    component: Dojo,
    path: 'dojo',
    title: 'Senshinkan Dojo - Hakko Denshin Ryu Jujutsu',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Senshinkan Romania - Hakko Denshin Ryu Jujutsu',
  },
] as const;

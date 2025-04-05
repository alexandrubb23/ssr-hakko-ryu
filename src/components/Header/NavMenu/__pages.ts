import React from 'react';

import homeBgImage from '@assets/images/bg_home.jpg';
import Contact from '@components/Pages/Contact/Contact';
import Dojo from '@components/Pages/Dojo';
import Home, { fetchPosts } from '@components/Pages/Home';
import Senshinkan from '@components/Pages/Senshinkan';
import HakkoRyu from './components/Pages/HakkoRyu';

export interface Page {
  path: string;
  label: string;
  title: string;
  bgImage?: string;
  loader?: () => Promise<unknown>;
  component: React.FC<{ data: any }>;
}

export const pages: Page[] = [
  {
    bgImage: homeBgImage,
    component: Home,
    label: 'Home',
    loader: fetchPosts,
    path: '/',
    title: 'Home Page',
  },
  {
    component: HakkoRyu,
    label: 'Hakko Ryu',
    path: '/hakko-ryu',
    title: 'Hakko Ryu Page',
  },
  {
    component: Senshinkan,
    label: 'Senshinkan',
    path: '/senshinkan',
    title: 'Senshinkan Page',
  },
  {
    component: Dojo,
    label: 'Dojo',
    path: '/dojo',
    title: 'Dojo Page',
  },
  {
    label: 'Contact',
    path: '/contact',
    component: Contact,
    title: 'Contact Page',
  },
] as const;

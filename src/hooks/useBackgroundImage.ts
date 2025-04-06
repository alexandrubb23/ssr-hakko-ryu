import { useMemo } from 'react';
import { useLocation } from 'react-router';

import { pages } from '../pages';
const useBackgroundImage = () => {
  const { pathname } = useLocation();

  return useMemo(() => {
    const path = pathname === '/' ? 'home' : pathname;
    return pages.find(page => page.path === path)?.bgImage;
  }, [pathname]);
};

export default useBackgroundImage;

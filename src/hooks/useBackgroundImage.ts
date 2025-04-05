import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { pages } from '../pages';
const useBackgroundImage = () => {
  const { pathname } = useLocation();

  return useMemo(
    () => pages.find(page => page.path === pathname)?.bgImage,
    [pathname]
  );
};

export default useBackgroundImage;

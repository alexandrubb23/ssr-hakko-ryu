import { matchRoutes } from 'react-router-dom';

import { pages } from '../pages';

export const prefetch = async (url: string) => {
  const matches = matchRoutes(pages, url);
  if (!matches) return null;

  let loaderData = null;
  await Promise.all(
    matches.map(async ({ route }) => {
      if (route.loader) {
        loaderData = await route.loader();
      }
    })
  );

  return loaderData;
};

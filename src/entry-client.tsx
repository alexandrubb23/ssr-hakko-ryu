import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { AppRoutes } from './AppRoutes';
import createEmotionCache from './createEmotionCache';
import Providers from '@providers/Providers';

const cache = createEmotionCache();

const lang = window.__INITIAL_LANG__ || 'ro';
const initialLoaderData = window.__INITIAL_DATA__ || [];

const Main = () => (
  <StrictMode>
    <Providers cache={cache} lang={lang}>
      <BrowserRouter>
        <AppRoutes initialLoaderData={initialLoaderData} />
      </BrowserRouter>
    </Providers>
  </StrictMode>
);

hydrateRoot(document.getElementById('root') as HTMLElement, <Main />);

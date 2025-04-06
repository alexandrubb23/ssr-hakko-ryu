import createEmotionServer from '@emotion/server/create-instance';
import cookie from 'cookie';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Providers from '@providers/Providers';
import { Lang } from '@store/useLangStore';
import { prefetch } from '@utils/api-requests';
import { AppRoutes } from './AppRoutes';
import createEmotionCache from './createEmotionCache';
import { pages } from './pages';

export async function render(url: string, rawCookies: string) {
  const cookies = cookie.parse(rawCookies || '');
  const lang = cookies['lang'] as Lang;

  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const normalizedUrl = `/${url}`.replace(/\/+/g, '/');

  const title =
    pages.find(route => route.path === normalizedUrl)?.title || 'Default Title';

  const loaderData = await prefetch(normalizedUrl);

  const html = renderToString(
    <Providers cache={cache}>
      <StaticRouter
        location={{
          pathname: `/${url}`,
        }}
      >
        <AppRoutes initialLoaderData={loaderData} />
      </StaticRouter>
    </Providers>
  );

  console.log('====================================');
  console.log({ html });
  console.log('====================================');

  const emotionChunks = extractCriticalToChunks(html);
  const styles = constructStyleTagsFromChunks(emotionChunks);
  const head = `
    <title>${title}</title>
    <script>
     window.__INITIAL_DATA__ = ${JSON.stringify(loaderData)}
     window.__INITIAL_LANG__ = "${lang}"
    </script>
    ${styles}
  `;

  return { html, head, title };
}

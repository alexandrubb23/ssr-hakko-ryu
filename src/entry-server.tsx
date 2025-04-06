import createEmotionServer from '@emotion/server/create-instance';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import cookie from 'cookie';

import { AppRoutes } from './AppRoutes';
import createEmotionCache from './createEmotionCache';
import { pages } from './pages';
import Providers from '@providers/Providers';
import { prefetch } from '@utils/api-requests';
import { Lang } from '@store/useLang';

export async function render(url: string, rawCookies: string) {
  const cookies = cookie.parse(rawCookies || '');
  const lang = cookies['lang'] || 'ro';

  console.log('====================================');
  console.log(cookies['lang']);
  console.log('====================================');

  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const normalizedUrl = `/${url}`.replace(/\/+/g, '/');

  const title =
    pages.find(route => route.path === normalizedUrl)?.title || 'Default Title';

  const loaderData = await prefetch(normalizedUrl);

  const html = renderToString(
    <Providers cache={cache} lang={lang as Lang}>
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

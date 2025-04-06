import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';

import { Lang } from '@store/useLang';
import { messages } from '../i18n/messages';
import theme from '../style/theme';

interface Props {
  cache: EmotionCache;
  lang: Lang;
}

const queryClient = new QueryClient();

const Providers = ({ children, cache, lang }: PropsWithChildren<Props>) => {
  return (
    <CacheProvider value={cache}>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </MuiThemeProvider>
        </QueryClientProvider>
      </IntlProvider>
    </CacheProvider>
  );
};

export default Providers;

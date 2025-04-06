import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PropsWithChildren, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IntlProvider } from 'react-intl';

import theme from '../style/theme';
import useLang from '@store/useLang';
import { messages } from '../i18n/messages';

interface Props {
  cache: EmotionCache;
}

const queryClient = new QueryClient();

const Providers = ({ children, cache }: PropsWithChildren<Props>) => {
  const { lang, hydrated, setHydrated } = useLang();

  useEffect(() => {
    setHydrated();
  }, [setHydrated]);

  if (!hydrated) return null;

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

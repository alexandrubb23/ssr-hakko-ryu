import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '../style/theme';

interface Props {
  cache: EmotionCache;
}

const queryClient = new QueryClient();

const Providers = ({ children, cache }: PropsWithChildren<Props>) => (
  <CacheProvider value={cache}>
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </QueryClientProvider>
  </CacheProvider>
);

export default Providers;

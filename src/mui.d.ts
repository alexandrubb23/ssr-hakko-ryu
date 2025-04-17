// mui.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    hakkoSubtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    hakkoSubtitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hakkoSubtitle: true;
  }
}

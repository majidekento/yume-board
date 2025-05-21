'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

// テーマの設定をカスタマイズできます
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.green[500],
    },
    error: {
      main: colors.red[500],
    },
    background: {
      default: '#000',
    },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CSSベースラインはブラウザのデフォルトスタイルをリセットします */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { getTheme } from '@shared/ui/theme';
import { ReactNode } from 'react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const theme = getTheme("light");

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Categories } from './components/pages/Categories/Categories';

export const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Categories />
  </ThemeProvider>
);

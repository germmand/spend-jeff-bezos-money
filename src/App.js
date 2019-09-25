import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import Theme from './Theme';

import Pages from './Pages';

const { MainPage } = Pages;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;

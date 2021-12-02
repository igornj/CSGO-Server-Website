/* eslint-disable func-names */
import React from 'react';
import Router from './Routes/index';

import GlobalStyle from './Styles/GlobalStyles';

const App = function () {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;

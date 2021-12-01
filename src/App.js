/* eslint-disable func-names */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './Styles/GlobalStyles';

// Pages
import Homepage from './Pages/Homepage';

const App = function () {
  return (
    <Router>
      <GlobalStyle />
      <Homepage />
    </Router>
  );
};

export default App;

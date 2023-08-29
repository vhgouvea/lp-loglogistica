import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
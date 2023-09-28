import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import GlobalStyle from './styles/global';
import { Team } from './components/LearnMore/Index';
import { Biological } from './components/LearnMoreBiological/Index';
import { Car } from './components/LearnMoreCar/Index';
import { Motoboy } from './components/LearnMoreMotocycle/Index';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Index';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/EquipesAdministrativas' component={Team} />
          <Route path='/MaterialBiologico' component={Biological} />
          <Route path='/LocacaoVeiculos' component={Car} />
          <Route path='/Motoboys' component={Motoboy} />
        </Switch>
        <Footer />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import './styles/font.css';

function App(props) {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;

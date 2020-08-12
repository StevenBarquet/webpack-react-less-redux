// ---Dependencys
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import ImageExPage from 'Pages/ImageExPage';

function AppContainer() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/img" component={ImageExPage} />
    </BrowserRouter>
  );
}

export default AppContainer;

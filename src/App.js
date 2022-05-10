import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import Home from './components/Home'
import Number from './components/Number'

function App() {

  return (
    <div className="App container">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/:id'>
            <Number></Number>
          </Route>
          <Route exact path='/:id/:color1/:color2'>
            <Number></Number>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

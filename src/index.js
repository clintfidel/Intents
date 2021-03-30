import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intents from './components/functional/Intents';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Intents} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

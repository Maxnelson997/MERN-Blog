import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

import Thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import IG from './components/IG';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <IG />
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import reducer from './reducers';

require('file-loader?name=index.html!./index.html');
require('./css/main.scss');

document.oncontextmenu = function () {
  return false;
};

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

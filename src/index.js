import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


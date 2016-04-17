import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HelloWorld from './hello-world';

function reducer(state = 0, action) {
  return state;
}

let store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('root')
);

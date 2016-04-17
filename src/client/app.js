import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import HelloWorld from './hello-world';

function reducer(state = 0, action) {
  return state;
}

let store = createStore(reducer);

ReactDOM.render(
  <div>
    <HelloWorld />
  </div>,
  document.getElementById('root')
);

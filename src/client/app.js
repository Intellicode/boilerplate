import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import X from './x';

function reducer(state = 0, action) {
  return state;
}

let store = createStore(reducer);

ReactDOM.render(
  <div>
    <X />
  </div>,
  document.getElementById('root')
);

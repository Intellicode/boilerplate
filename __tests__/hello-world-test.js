jest.unmock('../src/client/hello-world');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/client/hello-world';

describe('Hello World test', () => {
  it('renders Hello world!', () => {
    const helloWorld = TestUtils.renderIntoDocument(
     <HelloWorld />
   );

   const helloWorldNode =  ReactDOM.findDOMNode(helloWorld);
    expect(helloWorldNode.textContent).toEqual('Hello world!');
  });
});

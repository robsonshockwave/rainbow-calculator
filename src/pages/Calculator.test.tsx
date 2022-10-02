import React from 'react';
import ReactDom from 'react-dom';
import Calculator from './Calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Calculator />, div);
  ReactDom.unmountComponentAtNode(div);
});

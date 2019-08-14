import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import props from './snacks.json';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App data={props}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

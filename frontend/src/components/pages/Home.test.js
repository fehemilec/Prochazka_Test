import Home from './Home';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders Home without crashing', () => {
  const div = document.createElement('div');
  render(<Router><Home></Home></Router>, div);
});


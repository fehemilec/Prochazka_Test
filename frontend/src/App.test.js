import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import React from 'react';

test('Renders App without crashing', () => {
  const div = document.createElement('div');
  render(<Provider store={store}><App></App></Provider>, div)
});


import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learnreact/i);
  expect(linkElement).toBeInTheDocument();
});
function expect(linkElement: any) {
  throw new Error('Function not implemented.');
}


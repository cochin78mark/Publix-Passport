import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Publix Passport title and baseline UI components', () => {
  render(<App />);
  const headerElement = screen.getByText(/Publix Passport/i);
  expect(headerElement).toBeInTheDocument();
  
  const formButton = screen.getByRole('button', { name: /Log Entry/i });
  expect(formButton).toBeInTheDocument();
});

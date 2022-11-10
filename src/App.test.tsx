import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link timeout raises', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn react7/i);
  expect(linkElement).toBeInTheDocument();
}, 1);


test('renders learn react link timeout not raises', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}, 1);
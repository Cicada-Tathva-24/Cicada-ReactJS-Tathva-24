import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the path if necessary

describe('App Component', () => {
  test('renders the start button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/start now/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the navbar', () => {
    render(<App />);
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const contactLink = screen.getByText(/contact us/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});

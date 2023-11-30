import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers
import Login from './login';

describe('Login component', () => {
  test('renders without errors', () => {
    render(<Login />);
    
    // Check if the component renders without errors
    expect(screen.getByText('FarmExpress...')).toBeInTheDocument();
    expect(screen.getByText('Purpose of this App will come here')).toBeInTheDocument();
    expect(screen.getByLabelText('Sample')).toBeInTheDocument(); // Assumes 'Sample' is part of your alt text
    expect(screen.getByTestId('white-box')).toBeInTheDocument(); // You should add a 'data-testid' attribute to your white-box element
  });

  // Add more test cases as needed
});

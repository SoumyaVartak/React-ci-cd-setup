import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a component', () => {
  render(<App />);

  // Assuming your App component displays "Get started"
  const linkElement = screen.getByText(/Get started/i);

  expect(linkElement).toBeInTheDocument();
});
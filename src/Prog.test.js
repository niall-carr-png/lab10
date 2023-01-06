import { render, screen } from '@testing-library/react';
import Prog from './Prog';

test('renders learn react link', () => {
  render(<Prog />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

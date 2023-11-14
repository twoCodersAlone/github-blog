import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
  describe('Navbar component', () => {
    it('should render', () => {
      render(<Navbar />);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
  });
});

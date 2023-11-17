import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
  describe('Navbar component', () => {
    it('should render', () => {
      render(<Navbar />);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('should hide or show navbar items when toggle menu button', async () => {
      const menuIconSelector = 'menu-icon';
      const closeIconSelector = 'close-icon';

      render(<Navbar />);

      expect(screen.getByTestId(menuIconSelector)).toBeInTheDocument();
      expect(screen.queryByTestId(closeIconSelector)).not.toBeInTheDocument();

      const button = screen.getByLabelText('Toggle navigation');
      fireEvent.click(button);

      expect(screen.queryByTestId(menuIconSelector)).not.toBeInTheDocument();
      expect(screen.getByTestId(closeIconSelector)).toBeInTheDocument();

      fireEvent.click(button);

      expect(screen.getByTestId(menuIconSelector)).toBeInTheDocument();
      expect(screen.queryByTestId(closeIconSelector)).not.toBeInTheDocument();
    });
  });
});

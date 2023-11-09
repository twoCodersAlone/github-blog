import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render logo', () => {
    expect(screen.getByTestId('footer-logo')).toBeInTheDocument();
  });

  it('should render copyright', () => {
    expect(screen.getByTestId('footer-copyright')).toBeInTheDocument();
  });

  it('should copyright has the current year', () => {
    const currentYear = new Date().getFullYear().toString();

    expect(screen.getByTestId('footer-copyright').textContent).toContain(
      currentYear
    );
  });
});

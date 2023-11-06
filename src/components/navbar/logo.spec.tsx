import { render, screen } from '@testing-library/react';
import { Logo } from './logo';

describe('Logo', () => {
  it('should show Github icon', () => {
    render(<Logo />);

    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  });

  it('should have Blog text content', () => {
    render(<Logo />);
    const blog = screen.getByTestId('blog-logo');

    expect(blog.textContent).toBe('Blog');
  });

  it('should have attribute href, navigating to homepage', () => {
    render(<Logo />);
    const link = screen.getByRole('link', { name: 'Blog' });

    expect(link).toHaveAttribute('href', '/');
  });
});

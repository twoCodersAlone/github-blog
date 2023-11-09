import { render, screen } from '@testing-library/react';
import { Logo } from './logo';

describe('Logo', () => {
  beforeEach(() => {
    render(<Logo testId="logo" />);
  });

  it('should show Github icon', () => {
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  });

  it('should have Blog text content', () => {
    const blog = screen.getByTestId('logo');

    expect(blog.textContent).toBe('Blog');
  });

  it('should have attribute href, navigating to homepage', () => {
    const link = screen.getByRole('link', { name: 'Blog' });

    expect(link).toHaveAttribute('href', '/');
  });
});

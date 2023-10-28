import { render, screen } from '@testing-library/react';
import Page from '@/src/app/page';

describe('Home Page', () => {
  it('should render page', () => {
    render(<Page />);
    const exampleElement = screen.getByTestId('example-container');
    const titleElement = screen.getByText('GITHUB BLOG');

    expect(exampleElement.textContent).toBe('example');
    expect(titleElement).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import Page from '@/src/app/page';

describe('Home Page', () => {
  it('should render page', () => {
    render(<Page />);
    const titleElement = screen.getByText('Home');

    expect(titleElement).toBeTruthy();
  });
});

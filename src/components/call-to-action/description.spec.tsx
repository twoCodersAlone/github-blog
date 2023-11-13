import { render, screen } from '@testing-library/react';
import { Description } from './description';

describe('Description', () => {
  it('should render', () => {
    render(<Description />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Unblock your next skill today'
    );

    expect(screen.getByRole('link')).toHaveTextContent('Choose one to me');
    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
  });
});

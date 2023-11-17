import { render, screen } from '@testing-library/react';
import { CallToAction } from './call-to-action';

describe('CallToAction', () => {
  it('should render', () => {
    render(<CallToAction />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Unblock your next skill today'
    );

    expect(screen.getByRole('button')).toHaveTextContent('Choose one to me');
  });
});

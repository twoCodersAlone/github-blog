import { render, screen } from '@testing-library/react';
import { Topics } from './topics';

describe('Topics', () => {
  it('should render', () => {
    render(<Topics />);

    expect(screen.getByTestId('topics-section')).toBeTruthy();
  });
});

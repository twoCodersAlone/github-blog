import { render, screen } from '@testing-library/react';
import { CallToAction } from './call-to-action';

describe('CallToAction', () => {
  it('should render', () => {
    render(<CallToAction />);

    expect(screen.getByTestId('topics-section')).toBeTruthy();
  });
});

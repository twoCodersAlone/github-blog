import { render, screen } from '@testing-library/react';
import { Example } from '.';

describe('example', () => {
  it('should render', () => {
    render(<Example />);
    const component = screen.getByTestId('example-container');

    expect(component.textContent).toBe('example');
  });
});

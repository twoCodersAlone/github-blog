import { fireEvent, render, screen } from '@testing-library/react';
import { MenuButton } from './menu-button';

describe('Menu Button', () => {
  it('should show open icon', () => {
    render(<MenuButton isOpen={true} toggleOpen={() => {}} />);

    expect(screen.getByTestId('menu-icon')).toBeTruthy();
  });

  it('should show close icon', () => {
    render(<MenuButton isOpen={false} toggleOpen={() => {}} />);

    expect(screen.getByTestId('close-icon')).toBeTruthy();
  });

  it('should call onToggle function when clicked', () => {
    const mockToggleOpen = jest.fn();
    render(<MenuButton isOpen={false} toggleOpen={mockToggleOpen} />);

    const button = screen.getByLabelText('Toggle navigation');
    fireEvent.click(button);

    expect(mockToggleOpen).toBeCalled();
  });
});

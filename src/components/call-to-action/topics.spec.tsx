import { render, screen } from '@testing-library/react';
import { Topics } from './topics';

const testData = [
  {
    title: 'dummy1',
    description: 'dummy1 description',
    href: '/dummy1',
    icon: <span data-testId="dummy1-icon" />,
  },
  {
    title: 'dummy2',
    description: 'dummy2 description',
    href: '/dummy2',
    icon: <span data-testId="dummy2-icon" />,
  },
];

describe('Topics', () => {
  it('should render topics in list', () => {
    render(<Topics topics={testData} />);

    // title
    expect(screen.getByText('dummy1')).toBeTruthy();
    expect(screen.getByText('dummy2')).toBeTruthy();

    // description
    expect(screen.getByText('dummy1 description')).toBeTruthy();
    expect(screen.getByText('dummy2 description')).toBeTruthy();

    // icon
    expect(screen.getByTestId('dummy1-icon')).toBeTruthy();
    expect(screen.getByTestId('dummy2-icon')).toBeTruthy();

    // link
    expect(screen.getByLabelText('Go to dummy1 topic')).toHaveAttribute(
      'href',
      '/dummy1'
    );
    expect(screen.getByLabelText('Go to dummy2 topic')).toHaveAttribute(
      'href',
      '/dummy2'
    );
  });
});

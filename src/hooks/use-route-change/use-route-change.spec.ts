import { renderHook } from '@testing-library/react';
import { useRouteChange } from './use-route-change';
import * as NextNavigation from 'next/navigation';

describe('useRouteChange', () => {
  let mockHandler: jest.Mock;
  let rerender: () => void;

  beforeEach(() => {
    mockHandler = jest.fn();
    jest.spyOn(NextNavigation, 'usePathname').mockReturnValue('some-path');

    rerender = renderHook(() => useRouteChange(mockHandler)).rerender;
  });

  it('should not execute handler when route not change', () => {
    jest.spyOn(NextNavigation, 'usePathname').mockReturnValue('some-path');

    expect(mockHandler).toHaveBeenCalledTimes(1);

    rerender();

    expect(mockHandler).not.toHaveBeenCalledTimes(2);
  });

  it('should execute handler when route change', () => {
    jest
      .spyOn(NextNavigation, 'usePathname')
      .mockReturnValue('some-different-path');

    expect(mockHandler).toHaveBeenCalledTimes(1);

    rerender();

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});

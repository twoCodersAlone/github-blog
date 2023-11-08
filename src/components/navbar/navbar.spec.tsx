import { render, screen } from '@testing-library/react';
import { Navbar, generateVerifyCurrentPathname } from './navbar';

describe('Navbar', () => {
  describe('verifyCurrentPathname', () => {
    it('should return true when in homepage with corresponding pathname', () => {
      const mockCurrentPathname = '/';
      const mockPathname = '/';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeTruthy();
    });

    it('should return false when in homepage but pathname does not match', () => {
      const mockCurrentPathname = '/';
      const mockPathname = '/some-path';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeFalsy();
    });

    it('should return false when corresponding to homepage, but not in homepage', () => {
      const mockCurrentPathname = '/some-path';
      const mockPathname = '/';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeFalsy();
    });

    it('should return false when pathname different than current page, excluding homepage', () => {
      const mockCurrentPathname = '/some-path';
      const mockPathname = '/some-path2';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeFalsy();
    });

    it('should return true when pathname corresponds to current page, excluding homepage', () => {
      const mockCurrentPathname = '/some-path';
      const mockPathname = '/some-path';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeTruthy();
    });

    it('should return true when current page is nested path of pathname, excluding homepage', () => {
      const mockCurrentPathname = '/some-path/some-sub-path';
      const mockPathname = '/some-path';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeTruthy();
    });
  });

  describe('Navbar component', () => {
    it('should render', () => {
      render(<Navbar />);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
  });
});

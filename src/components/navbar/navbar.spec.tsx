// import { render, screen } from '@testing-library/react';
// import { Navbar } from '.';

import { generateVerifyCurrentPathname } from './navbar';

describe('Navbar', () => {
  describe('verifyCurrentPathname', () => {
    it('should return true when it is in homepage and the pathname refer to homepage', () => {
      const mockCurrentPathname = '/';
      const mockPathname = '/';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeTruthy();
    });

    it('should return false when it is in homepage and the pathname is not homepage', () => {
      const mockCurrentPathname = '/';
      const mockPathname = '/some-path';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeFalsy();
    });

    it('should return false when it is not in homepage and the pathname is homepage', () => {
      const mockCurrentPathname = '/some-path';
      const mockPathname = '/';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeFalsy();
    });

    it('should return false when it is not in homepage and the pathname is not homepage and current page', () => {
      const mockCurrentPathname = '/some-path';
      const mockPathname = '/some-path2';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeFalsy();
    });

    it('should return true when it is not in homepage and the pathname is the same of current page', () => {
      const mockCurrentPathname = '/some-path';
      const mockPathname = '/some-path';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeTruthy();
    });

    it('should return true when it is not in homepage and the current page is nested path of pathname', () => {
      const mockCurrentPathname = '/some-path/some-sub-path';
      const mockPathname = '/some-path';

      const verifyCurrentPathname =
        generateVerifyCurrentPathname(mockCurrentPathname);

      expect(verifyCurrentPathname(mockPathname)).toBeTruthy();
    });
  });
});

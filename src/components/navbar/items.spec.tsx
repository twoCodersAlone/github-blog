import { render, screen } from '@testing-library/react';
import { Items, getLinkProps } from './items';
import { generateVerifyCurrentPathname } from './navbar';

describe('Items', () => {
  describe('getLinkProps', () => {
    it('should have aria-current property with page value', () => {
      const mockIsCurrentPage = true;
      const linkProps = getLinkProps(mockIsCurrentPage);

      const existsAriaCurrent = !!linkProps['aria-current'];

      expect(existsAriaCurrent).toBeTruthy();
      expect(linkProps['aria-current']).toBe('page');
    });

    it('should have className current page style', () => {
      const mockIsCurrentPage = true;
      const linkProps = getLinkProps(mockIsCurrentPage);

      const existsClassName = !!linkProps.className;

      expect(existsClassName).toBeTruthy();
      expect(linkProps.className).toBe('font-medium text-blue-500');
    });

    it('should have className current page style', () => {
      const mockIsCurrentPage = true;
      const linkProps = getLinkProps(mockIsCurrentPage);

      const existsClassName = !!linkProps.className;

      expect(existsClassName).toBeTruthy();
      expect(linkProps.className).toBe('font-medium text-blue-500');
    });

    it('should not have aria-current property', () => {
      const mockIsCurrentPage = false;
      const linkProps = getLinkProps(mockIsCurrentPage);

      const existsAriaCurrent = !!linkProps['aria-current'];

      expect(existsAriaCurrent).toBeFalsy();
    });

    it('should have className not current page style', () => {
      const mockIsCurrentPage = false;
      const linkProps = getLinkProps(mockIsCurrentPage);

      const existsClassName = !!linkProps.className;

      expect(existsClassName).toBeTruthy();
      expect(linkProps.className).toBe(
        'font-medium text-gray-400 hover:text-gray-500'
      );
    });
  });
  describe('Items component', () => {
    it('should be visible', () => {
      const mockIsOpen = true;
      const mockVerifyCurrentPathname = generateVerifyCurrentPathname('teste');
      render(
        <Items
          isOpen={mockIsOpen}
          toggleOpen={() => {}}
          items={[]}
          verifyCurrentPathname={mockVerifyCurrentPathname}
        />
      );

      expect(screen.getByTestId('navbar-items')).toBeVisible();
    });
    it('should not be visible', () => {
      const mockIsOpen = false;
      const mockVerifyCurrentPathname = generateVerifyCurrentPathname('teste');
      render(
        <Items
          isOpen={mockIsOpen}
          toggleOpen={() => {}}
          items={[]}
          verifyCurrentPathname={mockVerifyCurrentPathname}
        />
      );

      expect(screen.getByTestId('navbar-items')).not.toBeVisible();
    });
  });
});

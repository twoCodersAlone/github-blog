import { render, screen } from '@testing-library/react';
import { Items, getLinkProps } from './items';
import { generateVerifyCurrentPathname } from './navbar';
import { AnchorHTMLAttributes } from 'react';

describe('Items', () => {
  describe('getLinkProps', () => {
    describe('is current page', () => {
      let linkProps: AnchorHTMLAttributes<HTMLAnchorElement>;

      beforeEach(() => {
        linkProps = getLinkProps(true);
      });

      it('should have aria-current property with page value', () => {
        expect(linkProps['aria-current']).toBe('page');
      });

      it('should have className current page style', () => {
        expect(linkProps.className).toBe('font-medium text-blue-500');
      });
    });

    describe('is not current page', () => {
      let linkProps: AnchorHTMLAttributes<HTMLAnchorElement>;

      beforeEach(() => {
        linkProps = getLinkProps(false);
      });

      it('should not have aria-current property', () => {
        expect(linkProps['aria-current']).toBeFalsy();
      });

      it('should have className not current page style', () => {
        expect(linkProps.className).toBe(
          'font-medium text-gray-400 hover:text-gray-500'
        );
      });
    });
  });
  describe('Items component', () => {
    it('should be visible', () => {
      const mockIsOpen = true;
      const mockVerifyCurrentPathname = generateVerifyCurrentPathname('test');
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
    it.skip('should not be visible', () => {
      const mockIsOpen = false;
      const mockVerifyCurrentPathname = generateVerifyCurrentPathname('test');
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

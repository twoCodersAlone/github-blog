import { render, screen } from '@testing-library/react';
import { Items, generateVerifyCurrentHref, getLinkProps } from './items';
import { AnchorHTMLAttributes } from 'react';
import { NavbarItem } from '@/src/data/navbar';

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
        expect(linkProps.className).toBe('font-medium max-w-fit text-blue-500');
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
          'font-medium max-w-fit text-gray-400 hover:text-gray-500'
        );
      });
    });
  });

  describe('verifyCurrentHref', () => {
    it('should not be valid when current page is not the same of page href', () => {
      const mockCurrentPageHref = '/some-path';
      const mockPageHref = '/some-path2';

      const verifyCurrentHref = generateVerifyCurrentHref(mockCurrentPageHref);

      expect(verifyCurrentHref(mockPageHref)).toBeFalsy();
    });

    it('should be valid when current page is the same of page href', () => {
      const mockCurrentPageHref = '/some-path';
      const mockPageHref = '/some-path';

      const verifyCurrentHref = generateVerifyCurrentHref(mockCurrentPageHref);

      expect(verifyCurrentHref(mockPageHref)).toBeTruthy();
    });

    it('should be valid when current page href is nested route of page href', () => {
      const mockCurrentPageHref = '/some-path/some-sub-path';
      const mockPageHref = '/some-path';

      const verifyCurrentHref = generateVerifyCurrentHref(mockCurrentPageHref);

      expect(verifyCurrentHref(mockPageHref)).toBeTruthy();
    });
  });

  describe('Items component', () => {
    it('should be visible', () => {
      const mockIsOpen = true;

      render(<Items isOpen={mockIsOpen} items={[]} />);

      expect(screen.getByTestId('navbar-items')).toBeVisible();
    });
    it.skip('should not be visible', () => {
      const mockIsOpen = false;

      render(<Items isOpen={mockIsOpen} items={[]} />);

      expect(screen.queryByTestId('navbar-items')).not.toBeInTheDocument();
    });

    it('should have list of items', () => {
      const mockIsOpen = true;
      const mockItems: NavbarItem[] = [
        { name: 'Page 1', href: '/page-1' },
        { name: 'Page 2', href: '/page-2' },
      ];

      render(<Items isOpen={mockIsOpen} items={mockItems} />);

      expect(screen.getByTestId('navbar-items')).toBeInTheDocument();
      expect(screen.getByTestId('menu-link-/page-1')).toHaveAttribute(
        'href',
        '/page-1'
      );
      expect(screen.getByTestId('menu-link-/page-2')).toHaveAttribute(
        'href',
        '/page-2'
      );
    });
  });
});

import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { NavbarItem } from '@/src/data/navbar';

interface NavbarItemsProps {
  items: NavbarItem[];
  isOpen: boolean;
  toggleOpen: () => void;
  verifyCurrentPathname: (pathname: string) => boolean;
}

export const getLinkProps = (
  isCurrentPage: boolean
): AnchorHTMLAttributes<HTMLAnchorElement> => {
  return {
    className: clsx(
      'font-medium',
      isCurrentPage ? 'text-blue-500' : 'text-gray-400 hover:text-gray-500'
    ),
    ...(isCurrentPage && { 'aria-current': 'page' }),
  };
};

export const Items = ({
  isOpen,
  toggleOpen,
  items,
  verifyCurrentPathname,
}: NavbarItemsProps) => {
  return (
    isOpen && (
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 basis-full grow',
          'sm:block'
        )}
        data-testid="navbar-items"
      >
        <div
          className={clsx(
            'flex flex-col gap-5 mt-5',
            'sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'
          )}
        >
          {items.map(({ name, href }) => {
            const isCurrentPathname = verifyCurrentPathname(href);
            return (
              <Link
                data-testid={`menu-link-${href}`}
                key={href}
                href={href}
                onClick={toggleOpen}
                {...getLinkProps(isCurrentPathname)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
};

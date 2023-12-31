import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { NavbarItem } from '@/src/data/navbar';
import { usePathname } from 'next/navigation';

interface NavbarItemsProps {
  items: NavbarItem[];
  isOpen: boolean;
}

export const getLinkProps = (
  isCurrentPage: boolean
): AnchorHTMLAttributes<HTMLAnchorElement> => {
  return {
    className: clsx(
      'font-medium max-w-fit',
      isCurrentPage ? 'text-blue-500' : 'text-gray-400 hover:text-gray-500'
    ),
    ...(isCurrentPage && { 'aria-current': 'page' }),
  };
};

export const generateVerifyCurrentHref =
  (currentPageHref: string) => (pageHref: string) =>
    currentPageHref.startsWith(pageHref);

export const Items = ({ isOpen, items }: NavbarItemsProps) => {
  const pathname = usePathname();
  const verifyCurrentHref = generateVerifyCurrentHref(pathname);

  return (
    <div
      className={clsx(
        isOpen ? 'block' : 'hidden',
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
          const isCurrentPathname = verifyCurrentHref(href);

          return (
            <Link
              data-testid={`menu-link-${href}`}
              key={href}
              href={href}
              {...getLinkProps(isCurrentPathname)}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { NavbarItem } from '@/src/data/navbar';

interface NavbarItemsProps {
  items: NavbarItem[];
  isOpen: boolean;
  verifyCurrentPathname: (pathname: string) => boolean;
}

const getLinkProps = (
  isCurrentPage: boolean
): AnchorHTMLAttributes<HTMLAnchorElement> => {
  return {
    className: clsx(
      'font-medium',
      isCurrentPage ? 'text-blue-500' : 'text-gray-600',
      !isCurrentPage && 'text-gray-400 hover:text-gray-500'
    ),
    ...(isCurrentPage && { 'aria-current': 'page' }),
  };
};

export const Items = ({
  isOpen,
  items,
  verifyCurrentPathname,
}: NavbarItemsProps) => {
  return (
    <div
      className={clsx(
        isOpen ? 'block' : 'hidden',
        'overflow-hidden transition-all duration-300 basis-full grow',
        'sm:block'
      )}
    >
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        {items.map(({ name, href }) => {
          const isCurrentPathname = verifyCurrentPathname(href);
          return (
            <Link key={href} href={href} {...getLinkProps(isCurrentPathname)}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

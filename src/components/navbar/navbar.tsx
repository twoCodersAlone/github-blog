'use client';
import { Logo } from '@/src/components/logo';
import { Items } from './items';
import { MenuButton } from './menu-button';
import { navbarItems } from '@/src/data/navbar';
import clsx from 'clsx';
import { useState } from 'react';
import { useRouteChange } from '@/src/hooks/use-route-change';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useRouteChange(() => setIsOpen(false));

  return (
    <header
      data-testid="navbar"
      className={clsx(
        'flex flex-wrap w-full bg-gray-800 text-sm py-4 z-50',
        'sm:justify-start sm:flex-nowrap'
      )}
    >
      <nav
        className={clsx(
          'max-w-[85rem] w-full mx-auto px-4',
          'sm:flex sm:items-center sm:justify-between'
        )}
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Logo testId="navbar-logo" />
          <MenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <Items items={navbarItems} isOpen={isOpen} />
      </nav>
    </header>
  );
};

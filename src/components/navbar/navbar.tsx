'use client';
import { useToggle } from '@mantine/hooks';
import { Logo } from '@/src/components/logo';
import { Items } from './items';
import { MenuButton } from './menu-button';
import { usePathname } from 'next/navigation';
import { navbarItems } from '@/src/data/navbar';
import clsx from 'clsx';

export const generateVerifyCurrentPathname =
  (currentPathname: string) => (pathname: string) => {
    const isHomepage = currentPathname === '/';
    const isHomepageLink = pathname === '/';

    if (isHomepageLink) return isHomepage;

    return currentPathname.startsWith(pathname);
  };

export const Navbar = () => {
  const [isOpen, toggleOpen] = useToggle();
  const currentPathname = usePathname();
  const verifyCurrentPathname = generateVerifyCurrentPathname(currentPathname);

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
        <Items
          items={navbarItems}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          verifyCurrentPathname={verifyCurrentPathname}
        />
      </nav>
    </header>
  );
};

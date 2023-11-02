'use client';
import { useToggle } from '@mantine/hooks';
import { Logo } from './logo';
import { Items } from './items';
import { MenuButton } from './menu-button';
import { usePathname } from 'next/navigation';
import { navbarItems } from '@/src/data/navbar';

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
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <MenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>
        <Items
          items={navbarItems}
          isOpen={isOpen}
          verifyCurrentPathname={verifyCurrentPathname}
        />
      </nav>
    </header>
  );
};

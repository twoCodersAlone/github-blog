import clsx from 'clsx';

interface NavbarItem {
  name: string;
  href: string;
}

const items: NavbarItem[] = [
  { name: 'Landing', href: '#' },
  { name: 'Account', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Blog', href: '#' },
];

interface NavbarItemsProps {
  isOpen: boolean;
}

export const NavbarItems = ({ isOpen }: NavbarItemsProps) => {
  return (
    <div
      className={clsx(
        'overflow-hidden transition-all duration-300 basis-full grow',
        isOpen ? 'block' : 'hidden',
        'sm:block'
      )}
    >
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        {items.map(({ name, href }, index) =>
          index === 0 ? (
            <a
              key={name}
              href={href}
              className="font-medium text-blue-500"
              aria-current="page"
            >
              {name}
            </a>
          ) : (
            <a
              key={name}
              href={href}
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              {name}
            </a>
          )
        )}
      </div>
    </div>
  );
};

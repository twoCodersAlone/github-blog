import clsx from 'clsx';
import { Icons } from '../icons';

interface MenuButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const MenuButton = ({ isOpen, toggleOpen }: MenuButtonProps) => (
  <button
    type="button"
    // TODO: refactor to improve the readability
    className={clsx(
      'p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium',
      'bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2',
      'focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800',
      'dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:hidden'
    )}
    aria-label="Toggle navigation"
    onClick={toggleOpen}
  >
    {isOpen ? <Icons.Menu /> : <Icons.Close />}
  </button>
);

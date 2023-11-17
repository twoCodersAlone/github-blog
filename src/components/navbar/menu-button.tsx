import clsx from 'clsx';
import { Icons } from '../icons';

interface MenuButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const MenuButton = ({ isOpen, toggleOpen }: MenuButtonProps) => (
  <button
    type="button"
    className={clsx(
      'p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-sm',
      'bg-slate-900 text-gray-400 shadow-sm align-middle border-gray-700 transition-all ',
      'hover:bg-slate-800 hover:text-white sm:hidden',
      isOpen &&
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600'
    )}
    aria-label="Toggle navigation"
    onClick={toggleOpen}
  >
    {isOpen ? <Icons.Close /> : <Icons.Menu />}
  </button>
);

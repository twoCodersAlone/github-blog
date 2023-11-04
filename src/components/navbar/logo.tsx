import Link from 'next/link';
import { Icons } from '../icons';

export const Logo = () => {
  return (
    <Link
      className="inline-flex items-center gap-x-2 text-xl font-semibold text-white"
      href="/"
    >
      <Icons.Github />
      Blog
    </Link>
  );
};
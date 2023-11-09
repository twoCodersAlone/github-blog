import Link from 'next/link';
import { Icons } from '../icons';

interface LogoProps {
  testId: string;
}

export const Logo = ({ testId }: LogoProps) => {
  return (
    <Link
      className="inline-flex items-center gap-x-2 text-xl font-semibold text-white"
      data-testid={testId}
      href="/"
    >
      <Icons.Github />
      Blog
    </Link>
  );
};

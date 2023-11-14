import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useRouteChange = (handler: () => void) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handler, [pathname, searchParams]);
};

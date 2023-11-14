import { TopicsItem } from '@/src/data/topics';
import Link from 'next/link';

interface ItemsParams {
  items: TopicsItem[];
}
export const Items = ({ items }: ItemsParams) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map(({ title, href, description, icon }) => (
        <Link
          aria-label={`Go to ${title} topic`}
          key={href}
          href={href}
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        >
          <span className="inline-block rounded-lg p-3">{icon}</span>
          <h2 className="mt-2 font-bold">{title}</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            {description}
          </p>
        </Link>
      ))}
    </div>
  );
};

import { topics } from '@/src/data/topics';
import { Description } from './description';
import { Topics } from './topics';

export const CallToAction = () => (
  <section className="w-full" data-testid="topics-section">
    <div className="max-w-[85rem] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <Description />
        <Topics topics={topics} />
      </div>
    </div>
  </section>
);

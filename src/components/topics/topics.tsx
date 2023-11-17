import { topics } from '@/src/data/topics';
import { CallToAction } from './call-to-action';
import { Items } from './items';

export const Topics = () => (
  <section className="w-full" data-testid="topics-section">
    <div className="max-w-[85rem] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <CallToAction />
        <Items items={topics} />
      </div>
    </div>
  </section>
);

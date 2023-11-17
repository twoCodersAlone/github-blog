'use client';
import { useRouter } from 'next/navigation';
import { topics } from '@/src/data/topics';
import { Icons } from '../icons';

export const randomTopicHandler = (push: (href: string) => void) => () => {
  const topicsHrefs = topics.map((topic) => topic.href);
  const position = Math.floor(Math.random() * topicsHrefs.length);
  const topicHref = topicsHrefs[position];

  push(topicHref);
};

export const RandomButton = () => {
  const { push } = useRouter();

  return (
    <button
      data-testid="random-topic-button"
      onClick={randomTopicHandler(push)}
      className="mt-8 inline-block gap-2 rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
    >
      <span className="flex items-center gap-2">
        Choose one to me <Icons.Random />
      </span>
    </button>
  );
};

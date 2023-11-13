import { topics } from '@/src/data/topics';
import { notFound } from 'next/navigation';

const topicsAvailable = topics.map(({ href }) => href.substring(1));

export default function Topic({ params }: { params: { topic: string } }) {
  const { topic } = params;

  if (!topicsAvailable.includes(topic)) notFound();

  return (
    <main>
      <h1>{topic}</h1>
    </main>
  );
}

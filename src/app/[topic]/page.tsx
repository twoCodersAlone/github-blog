import { topics } from '@/src/data/topics';
import { useGithubFetch } from '@/src/hooks/use-github-fetch/use-github-fetch';
import { notFound } from 'next/navigation';

const buildQuery = (topic: string) => ({
  query: `#graphql
      query Topic {
        topic(name: "${topic}") {
            repositories(
                first: 6
                orderBy: { direction: DESC, field: STARGAZERS }
                after: null
            ) {
                totalCount
                edges {
                    cursor
                    node {
                        name
                        stargazerCount
                    }
                }
            }
            stargazerCount
            name
        }
    }
  `,
});

const topicsAvailable = topics.map(({ href }) => href.substring(1));

export default async function Topic({ params }: { params: { topic: string } }) {
  const { topic } = params;
  const query = buildQuery(topic);
  const githubFetch = useGithubFetch();

  const response = await githubFetch(query);
  const data = await response.json();

  if (!topicsAvailable.includes(topic)) notFound();

  return (
    <main>
      <h1>{topic}</h1>
      <code>{JSON.stringify(data, null, 2)}</code>
    </main>
  );
}

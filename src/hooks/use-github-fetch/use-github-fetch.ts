export const useGithubFetch = () => {
  const BASE_HEADERS = { Authorization: `Bearer ${process.env.AUTH_TOKEN}` };

  return (gqlQuery: { query: string }, options?: RequestInit | undefined) => {
    const githubOptions = {
      ...options,
      method: 'POST',
      body: JSON.stringify(gqlQuery),
      headers: {
        ...options?.headers,
        ...BASE_HEADERS,
      },
    };

    return fetch(process.env.GITHUB_GRAPHQL_URL, githubOptions);
  };
};

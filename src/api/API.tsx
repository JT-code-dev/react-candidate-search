const searchGithub = async (): Promise<any[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    if (!import.meta.env.VITE_GITHUB_TOKEN) {
      throw new Error('GitHub token is missing in the environment variables');
    }

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<any> => {
  try {
    if (!import.meta.env.VITE_GITHUB_TOKEN) {
      throw new Error('GitHub token is missing in the environment variables');
    }

    const response = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { searchGithub, searchGithubUser };





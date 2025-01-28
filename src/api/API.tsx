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

export { searchGithub };




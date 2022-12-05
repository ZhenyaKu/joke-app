export const getRandomJoke = async () => {
  const response = await fetch(
    'https://sv443.net/jokeapi/v2/joke/Any?type=single',
  );

  return await response.json();
};

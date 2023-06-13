export const getAllPosts = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('/api/posts');

  if (!response.ok) throw new Error('Unable to fetch data');

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?q=${search}`,
  //   );

  const response = await fetch(`/api/posts?search=${search}`);

  if (!response.ok) throw new Error('Unable to fetch data');

  return response.json();
};

export const getPostById = async (id: string) => {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?q=${search}`,
  //   );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${id}`,
  );

  if (!response.ok) throw new Error('Unable to fetch data');

  return response.json();
};

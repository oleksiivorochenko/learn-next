type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>Post page {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

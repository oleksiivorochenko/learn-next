import { getPostById } from '@/services/getPosts';

type Props = {
  params: {
    id: string;
  };
};

export default async function Post({ params: { id } }: Props) {
  const post = await getPostById(id);
  return (
    <>
      <h1>Post page {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

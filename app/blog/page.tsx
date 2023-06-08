// 'use client';
import { PostSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';

export default function Blog() {
  // const { data: posts, isLoading } = useSWR('posts', getAllPosts);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}

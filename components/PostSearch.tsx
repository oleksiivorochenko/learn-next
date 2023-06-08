'use client';

import useSWR from 'swr';
import { getPostsBySearch } from '@/services/getPosts';
import { useState, FormEventHandler } from 'react';

const PostSearch = () => {
  const { mutate } = useSWR('posts');
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    mutate(await getPostsBySearch(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };

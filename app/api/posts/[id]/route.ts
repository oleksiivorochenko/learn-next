import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { posts } from '../posts';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);

  const postById = posts.find((post) => post.id === id);

  return NextResponse.json(postById);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get('Content-Type');

  const cookiesList = cookies();

  // logic
  // redirect('/blog')

  return NextResponse.json({ id, type, cookiesList });
}

import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth/next';

export default async function Profile() {
  const session = await getServerSession(authConfig);
  const user = session?.user;
  return (
    <div>
      <h1>Profile {user?.name}</h1>
      {user?.image && <img src={user?.image} alt="" />}
    </div>
  );
}

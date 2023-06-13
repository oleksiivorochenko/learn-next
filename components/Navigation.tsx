'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link
          href="#"
          onClick={() =>
            signOut({
              callbackUrl: '/',
            })
          }
        >
          Sign Out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </>
  );
};

export { Navigation };

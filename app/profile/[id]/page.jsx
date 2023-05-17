'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({ params }) => {
  const { data: session, status } = useSession();

  if (!session) {
    redirect('/');
  }

  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s profile page. Explore ${userName}'s prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;

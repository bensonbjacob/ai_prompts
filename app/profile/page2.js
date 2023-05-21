'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter, redirect } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  if (!session) {
    redirect('/');
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/users/${session?.user.id}/posts`
      );
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  // const handleDelete = async (post) => {
  //   const hasConfirmed = confirm(
  //     'Are you sure you wish to delete this prompt?'
  //   );

  //   if (hasConfirmed) {
  //     try {
  //       await fetch(`/api/prompt/${post._id.toString()}`, {
  //         method: 'DELETE',
  //       });

  //       const filteredPosts = myPosts.filter(
  //         (item) => item._id !== post._id
  //       );

  //       setMyPosts(filteredPosts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <Profile
      name='My'
      desc='Welcome to your profile page. Share prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;

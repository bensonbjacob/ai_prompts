'use client';

import { useState, useEffect } from 'react';
import { useRouter, redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Profile from '@components/Profile';

const MyProfile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const [postToDelete, setPostToDelete] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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

  const handleDelete = (post) => {
    setPostToDelete(post);
    setIsConfirmModalOpen(true);
  };

  const deletePost = async (post) => {
    try {
      await fetch(`/api/prompt/${post._id.toString()}`, {
        method: 'DELETE',
      });

      const filteredPosts = myPosts.filter(
        (item) => item._id !== post._id
      );
      setMyPosts(filteredPosts);
    } catch (error) {
      console.log(error);
    }

    setIsConfirmModalOpen(false);
  };

  return (
    <div>
      <Profile
        name='My'
        desc='Welcome to your profile page. Share prompts and inspire others with the power of your imagination'
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {isConfirmModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-4 rounded shadow-lg'>
            <h3 className='text-lg font-semibold mb-2'>
              Are you sure you wish to delete this prompt?
            </h3>
            <div className='flex justify-end'>
              <button
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2'
                onClick={() => deletePost(postToDelete)}
              >
                Delete
              </button>
              <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded'
                onClick={() => setIsConfirmModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

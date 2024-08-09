import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/fetchPosts';
import Posts from '../components/Posts/Posts';
import { fetchUsers } from '../features/users/fetchUsers';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
    dispatch(fetchUsers() as any);
    // dispatch(fetchLikes({ postId: 1, userId: 2 }) as any);
  }, []);

  return (
    <main className="w-full">
      <Posts />
    </main>
  );
}

export default Home;

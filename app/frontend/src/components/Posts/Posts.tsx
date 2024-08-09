import { useSelector } from 'react-redux';
import PostCard from './PostCard';
import { RootState } from '../../redux/store';

function Posts() {
  const { posts: { posts } } = useSelector((state: RootState) => state);

  return (
    <div>
      <h1 className="text-center p-2">Posts</h1>
      <div className="grid grid-cols-2 px-36 gap-4">
        {posts.length && (
          posts.map((post) => (
            <PostCard key={ post.id } post={ post } />))
        )}
      </div>
    </div>
  );
}

export default Posts;

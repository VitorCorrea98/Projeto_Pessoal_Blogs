import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CommentIcon from '../../assets/CommentIcon';
import NotLikedIcon from '../../assets/NotLikedIcon';
import LikedIcon from '../../assets/LikedIcon';
import { PostsTypes } from '../../types/posts.type';
import { fetchLikes } from '../../features/likes/fetchLikes';

type PostCardProps = {
  post: PostsTypes;
};

function PostCard({ post }: PostCardProps) {
  const { content, comments, likes } = post;
  const [liked, setLiked] = useState(true);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(fetchLikes({ postId: 1, userId: 2 }) as any);
  };

  return (
    <div className="flex flex-col p-4 border">
      <h1>Post Card</h1>
      <p>{content}</p>
      <div className="flex gap-5">
        <div
          className="flex gap-3 items-center"
        >
          <span>{likes.length}</span>
          <button
            onClick={ handleLike }
          >
            {liked ? <LikedIcon /> : <NotLikedIcon />}
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <span>{comments.length}</span>
          <CommentIcon />
        </div>
      </div>
    </div>
  );
}

export default PostCard;

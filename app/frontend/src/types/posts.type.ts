import { CommentsType } from './comments.type';
import { UsersType } from './users.type';

export type PostsTypes = {
  id?: number,
  author: UsersType,
  comments: CommentsType[],
  content: string,
  published: boolean,
  title: string,
  createdAt: string,
  updatedAt: string
};

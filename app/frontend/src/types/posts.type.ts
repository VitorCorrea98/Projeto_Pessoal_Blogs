import { CommentsType } from './comments.type';
import { LikesType } from './likes.type';
import { UsersType } from './users.type';

export type PostsTypes = {
  id?: number,
  author: UsersType,
  comments: CommentsType[],
  content: string,
  intro: string,
  likes: LikesType[]
  published: boolean,
  title: string,
  createdAt: string,
  updatedAt: string
};

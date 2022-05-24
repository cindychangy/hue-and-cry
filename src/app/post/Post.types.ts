import { Post } from 'api/types';

export type PostContainerProps = {
  post: Post;
  relatedPosts: Post[];
}

export type PostProps = {
  post: Post;
  relatedPosts: Post[];
}
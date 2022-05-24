import { Post, RelatedPost } from 'api/types';

export type PostContainerProps = {
  post: Post;
  relatedPosts: RelatedPost[];
}

export type PostProps = {
  post: Post;
  relatedPosts: RelatedPost[];
}
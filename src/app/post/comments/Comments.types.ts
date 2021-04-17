import { Rendered } from 'api/types';

export type CommentsProps = {
  postSlug: string;
  postId: number;
  postTitle: Rendered;
}
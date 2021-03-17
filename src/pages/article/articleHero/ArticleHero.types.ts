import { Rendered } from 'api/types';

export type ArticleHeroProps = {
  category: string;
  categoryLink: string;
  title: Rendered;
  bgImage: string;
  featureImage: string;
}
import { Rendered } from 'api/types';

export type PostHeroProps = {
  category: string;
  categoryLink: string;
  title: Rendered;
  bgImage: string;
  featureImage: string;
}
export type Rendered = {
  rendered: string;
}

export type Post = {
  id: number;
  title: Rendered;
  category: string;
  excerpt: Rendered;
  jetpack_featured_media_url: string;
  categoryLink: string,
  slug: string,
}

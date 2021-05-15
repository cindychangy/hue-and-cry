
export type Rendered = {
  rendered: string;
}

export type Podcast = {
  link: string;
  show_title: string;
  podcast_show: string;
}

export type Video = {
  video_title: string;
  video: string;
  link: string;
}

export type Acf = {
  location: string;
  year: string;
  how_to_help: string;
  dig_deeper: string;
  background_image: string;
  copyright_sources: string;
  podcasts: Podcast[];
  videos: Video[];
}

export type Post = {
  id: number;
  title: Rendered;
  excerpt: Rendered;
  jetpack_featured_media_url: string;
  categoryLink: string,
  categories_names: string[];
  date_gmt?: string;
  modified_gmt?: string;
  slug: string,
  tags: number[];
  content: Rendered;
  acf: Acf;
}
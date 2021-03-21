export type Rendered = {
  rendered: string;
}

export type Podcast = {
  link: string;
  title: string;
  podcast_show: string;
}

export type Video = {
  video_title: string;
  title: string;
  video: string;
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
  category: number[];
  excerpt: Rendered;
  jetpack_featured_media_url: string;
  categoryLink: string,
  slug: string,
  content: Rendered;
  acf: Acf;
}

// export type Categories = {
//   murdered = 'Murdered',
//   missing = 'Missing',
//   military = 'Military',
//   indigenous_women = 'Indigenous Women',
//   highway_of_tears = 'Highway of Tears',
// }

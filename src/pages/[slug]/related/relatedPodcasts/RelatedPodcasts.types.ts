export type Podcast = {
  show: string;
  link: string;
  title: string;
}

export type RelatedPodcastsProps = {
  podcasts: Podcast[];
}
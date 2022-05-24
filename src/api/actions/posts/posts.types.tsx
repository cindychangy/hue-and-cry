
export type Category = {
  nodes: [
    {
      name: string,
      slug: string,
    }
  ]
};

export type Post = {
  postId: number;
  title: string;
  excerpt: string;
  sourceUrl: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  };
  categories: Category;
  date_gmt?: string;
  modified_gmt?: string;
  slug: string,
  tags: {
    nodes: [
      {
        name: string,
      }
    ]
  };
  content: string;
  ctaHowToHelp: {
    howToHelp: string;
  };
  ctaDigDeeper: {
    digDeeper: string;
  };
  postAssets: {
    backgroundImage: {
      sourceUrl: string;
    },
    copyrightSources: string;
  };
  storyFacts: {
    location: string;
    year: string;
  };
  videos?: {
    videos: [
      {
        link: string;
        video: string;
        videoTitle: string;
      }
    ]
  };
  podcasts?: {
    podcasts: [
      {
        link: string;
        podcastShow: string;
        showTitle: string;
      }
    ]
  };
};

export type RelatedPost = {
  id: number;
  jetpack_featured_media_url: string;
  title: {
    rendered: string;
  };
  slug: string;
}
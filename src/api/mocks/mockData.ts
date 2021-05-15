export const postMock = {
  id: 3053,
  slug: 'alishia-germaine',
  status: 'publish',
  type: 'post',
  link: 'https://wordpress.thehueandcry.com/alishia-germaine/',
  title: {
      rendered: 'The Murder of Alishia Germaine'
  },
  content: {
    rendered: '\n<p style=\"font-size:15px; font-weight:300;\">**This story is part of our series examining the cases of missing and murdered women along <a rel=\"noreferrer noopener\" aria-label=\" (opens in a new tab)\" href=\"https://en.wikipedia.org/wiki/Highway_of_Tears\" target=\"_blank\">The&nbsp;Highway of Tears</a>.'
  },
  excerpt: {
    rendered: '<p>15-year-old Alishia Germaine was last seen leaving a Christmas party in Prince Rupert.</p>\n',
    protected: false
  },
  categories: [ 10, 9, 3 ],
  acf: {
    background_image: 'https://wordpress.thehueandcry.com/background-image.jpg',
    copyright_sources: 'Justice for Native Women',
    podcasts: [
        {
            link: 'https://www.podcast1.com',
            podcast_show: 'Podcast 1',
            show_title: 'Podcast 1 Title'
        },
        {
          link: 'https://www.podcast2.com',
          podcast_show: 'Podcast 2',
          show_title: 'Podcast 2 Title '  
      }
    ],
    dig_deeper: '<p><a href=\"https://www.booksource,com" target=\"_blank\" rel=\"noopener\">A book source</a>',
    how_to_help: '<p>If you have any information regarding this case please contact the <strong>police</strong>.</p>\n',
    location: 'Prince George, British Columbia',
    year: '1994',
    videos: [
      {
        video_title: 'Video Title 1',
        video: '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2kEp26hMHGk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>',
        link: 'https://video1.com'
      },
      {
        video_title: 'Video Title 2',
        video: '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2kEp26hMHGk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>',
        link: 'https://video2.com'
      },
    ]
  },
  tags: [ 12 ],
  jetpack_featured_media_url: "https://wordpress.thehueandcry.com/featured-image.jpg",
  categories_names: [
      "Highway of Tears",
      "Indigenous Women",
      "Murdered"
  ],
}

export const postsMock = [
  {
    id: 2595,
    slug: 'tamara-chipman',
    title: {
        rendered: 'The Disappearance of Tamara Chipman'
    },
    excerpt: {
      rendered: '<p>15-year-old Tamara Chipman was last seen leaving a Christmas party in Prince Rupert.</p>\n',
    },
    categories: [ 10, 3 ],
    categories_names: [
      'Indigenous Women',
      'Missing'
    ],
    tags: [ 12 ],
  },
  {
    id: 4862,
    slug: 'vanessa-guillen',
    title: {
        rendered: 'The Murder of Vanessa Guillen'
    },
    excerpt: {
      rendered: '<p>Vanessa Guillen was murdered in the Army</p>\n',
    },
    categories: [ 8 ],
    categories_names: [
      'Military',
      'Murdered'
    ],
    tags: [ 11 ],
  }
]
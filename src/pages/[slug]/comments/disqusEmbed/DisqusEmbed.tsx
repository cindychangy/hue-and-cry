import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { CommentsProps } from '../Comments.types';


export const DisqusEmbed = ({ postSlug, postTitle, postId }: CommentsProps) => {

  const disqusShortname = 'the-hue-and-cry';
  const disqusConfig = {
    url: `https://www.thehueandcry.com/${postSlug}`,
    identifier: postId.toString(),
    title: postTitle.rendered,
  }
  console.log(disqusConfig);
  return (
    <DiscussionEmbed
      shortname={disqusShortname}
      config={disqusConfig}
    />
  )
};

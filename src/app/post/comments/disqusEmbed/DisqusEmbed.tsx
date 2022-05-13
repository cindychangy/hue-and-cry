import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { CommentsProps } from '../Comments.types';

export const DisqusEmbed = ({ postSlug, postTitle, postId }: CommentsProps) => {

  const DISQUS_CONFIG = {
    url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${postSlug}`,
    identifier: postId.toString(),
    title: postTitle.rendered,
  }

  return (
    <DiscussionEmbed
      shortname={`${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`}
      config={DISQUS_CONFIG}
    />
  )
};
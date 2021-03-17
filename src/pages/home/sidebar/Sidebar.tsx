import React from 'react'

import { Box, Typography, Link, SubHeading } from 'components/atoms'
import { SectionHeading, } from 'components/molecules'

import { SidebarProps } from './Sidebar.types'
import { useStyles } from './Sidebar.styles';

export const Sidebar = ({ posts }: SidebarProps) => {
  const classes = useStyles();

  const sidebarPosts = posts.map(post => (
    <Box my={3} key={post.id}>
      {/* <SubHeading
        heading={post.category}
        link={post.slug}
      /> */}
      <Typography className={classes.articleTitle}>
        <Link href={post.slug} color="inherit">
          {post.title.rendered}
        </Link>
      </Typography>
    </Box>
  ));

  return (
    <>
      <SectionHeading heading="Featured Stories" />
      {sidebarPosts}

      <Box className={classes.aboutBox}>
        <Typography className={classes.aboutHeader}>
          What happened to her?
        </Typography>
        <Typography>
          Learn more about the mission of Hue and Cry
        </Typography>
      </Box>
    </>
  )
}

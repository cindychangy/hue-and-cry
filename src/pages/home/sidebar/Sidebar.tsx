import React from 'react'

import { Box, Typography, Link, SubHeading } from 'components/atoms'
import { SectionHeading, } from 'components/molecules'

import { SidebarProps } from './Sidebar.types'
import { useStyles } from './Sidebar.styles';

export const Sidebar = ({ articles }: SidebarProps) => {
  const classes = useStyles();

  const sidebarArticles = articles.map(article => (
    <Box my={3}>
      <SubHeading
        heading={article.category}
        link={article.articleLink}
      />
      <Typography>
        <Link href={article.articleLink} color="inherit">
          {article.title}
        </Link>
      </Typography>
    </Box>
  ));

  return (
    <>
      <SectionHeading heading="Featured Stories" />
      {sidebarArticles}

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

import React from 'react'

import { Box, Grid, Typography, Link, Icons } from 'components/atoms'
import { ResourceHeading } from 'components/molecules'

import { useStyles } from './RelatedPodcasts.styles';
import { RelatedPodcastsProps } from './RelatedPodcasts.types'

export const RelatedPodcasts = ({ podcasts }: RelatedPodcastsProps) => {

  const classes = useStyles();

  const podcastList = podcasts.map(podcast => (
    <Grid item xs={12} md={6} lg={3} key={podcast.show}>
        <Typography className={classes.showTitle}>
          {podcast.show}
        </Typography>
        <Link href={podcast.link} className={classes.link} color='inherit'>
          {podcast.title}
        </Link>
    </Grid>
  ))

  return (
    <Box my={8}>
    <ResourceHeading
      heading="Podcasts about this case"
      icon={<Icons.VolumeUp/>}
    />
    <Box mt={3}/>
    <Grid container spacing={3}>
      {podcastList}
    </Grid>
    </Box>
  )
}

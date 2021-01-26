import React from 'react'

import { Grid, Container,  Box, Typography, SubHeading, Icons } from 'components/atoms'
import { ResourceHeading, VideoBox } from 'components/molecules'
import { Header, Footer, ArticleHero, ArticleMeta, CalloutBox } from 'components/organisms'
import { Page } from 'components/templates'

import { useStyles } from './Article.styles';

const Article = () => {
  const classes = useStyles();

  return (
    <>
      <Header/>
        <ArticleHero
          category='Missing'
          title='The Murder of Ramona Wilson'
          bgImage='https://thehueandcry.com/wp-content/uploads/bg-rw.jpg'
          featureImage='https://thehueandcry.com/wp-content/uploads/ramona-wilson-photo-1.jpg'
        />
        <Box maxWidth={1000} m="auto">
          <Grid container>
            <Grid item xs={12} md={3}>
              <ArticleMeta
              category="Murder" 
              location="San Jose, California" 
              year="2006"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box className={classes.articleBody}>
                <h2>h2 Heading</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <h3>H3 Heading</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </Box>
            </Grid>
          </Grid>

          <CalloutBox
            helpInfo="dsdsadad" 
            sourcesInfo="dsadadsadsaaa"
          />

          <Box mt={6}>
            <ResourceHeading
              heading="Videos about this case"
              icon={<Icons.Videocam/>}
            />
            <VideoBox 
              link="#"
              title="I am a video title"
            />
          </Box>
        </Box>
      <Footer/>
    </>
  )
}

export default Article

import React from 'react'

import { Box, Typography, SubHeading, Icons } from 'components/atoms'
import { ShareIcons, SectionHeading } from 'components/molecules'
import { ArticleMeta, CalloutBox, ArticleHero } from 'components/organisms'

const Home = () => {
  return (
    <Box>
    <ArticleHero
      category="murder"
      title="The Murder of Ramona Wilson"
      bgImage="https://thehueandcry.com/wp-content/uploads/bg-rw.jpg"
      featureImage="https://thehueandcry.com/wp-content/uploads/ramona-wilson-photo-1.jpg"
    />
    <Box mb={4}/>
{/* 
    <Typography variant="h1">Hue and Cry</Typography>
    <Box mb={4}/>

    <SubHeading text="I am a subheading" />
    <Box mb={4}/>

    <ShareIcons/>
    <Box mb={4}/>

    <SectionHeading
      title="Podcasts about this case"
      icon={<Icons.VolumeUp/>}
    />
    <Box mb={4}/>

    <CalloutBox
      helpInfo="dsada"
      sourcesInfo="11111"
    />
    <Box mb={4}/>

    <ArticleMeta
      category="dsadas"
      location="dsadsa"
      year="dsada"
    /> */}

  </Box>
  )
}

export default Home

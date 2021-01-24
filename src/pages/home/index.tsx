import React from 'react'

import { Box, Typography, SubHeading, Icons } from 'components/atoms'
import { ShareIcons, ResourceHeading, SectionHeading } from 'components/molecules'
import { ArticleMeta, CalloutBox, ArticleHero, Footer, ArticlePreview } from 'components/organisms'

const Home = () => {
  return (
    <Box>
      <Box mb={100}>
      <ArticleHero
      category="Murder"
      title="The Murder of Ramona Wilson"
      bgImage="https://thehueandcry.com/wp-content/uploads/bg-rw.jpg"
      featureImage="https://thehueandcry.com/wp-content/uploads/ramona-wilson-photo-1.jpg"
    />
      </Box>
    <Box mb={4}/>

    <Typography variant="h1">Hue and Cry</Typography>
    <Box mb={4}/>

    <SubHeading heading="I am a subheading" />
    <Box mb={4}/>

    <ShareIcons/>
    <Box mb={4}/>

    <ResourceHeading
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
    />

    <SectionHeading
      heading="Murder"
    />
    <Box mb={4}/>

    <ArticlePreview
      image=""
      category="Murder" 
      title="The Murder of Gilory Lack"
      excerpt="On the morning of June 27, Molly had woken up to bad news as she found out a soccer..."
      href="http://www.google.com"
    />
    <Box mb={4}/>

    <Footer/>

  </Box>
  )
}

export default Home

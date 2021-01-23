import React from 'react'

import { Box, Typography, SubHeading, Icons } from 'components/atoms'
import { ShareIcons, SectionHeading } from 'components/molecules'
import { CalloutBox } from 'components/organisms'

const Home = () => {
  return (
    <Box>
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

  </Box>
  )
}

export default Home

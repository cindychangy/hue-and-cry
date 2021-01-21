import React from 'react'

import { Box, Typography, SubHeading } from 'components/atoms'
import { ShareIcons } from 'components/molecules'

const Home = () => {
  return (
    <Box>
    <Typography variant="h1">Hue and Cry</Typography>
    <SubHeading text="I am a subheading" />
    <ShareIcons/>
  </Box>
  )
}

export default Home

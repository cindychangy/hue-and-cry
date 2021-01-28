import React from 'react'

import { Box } from 'components/atoms'
import { Header, Footer } from 'components/organisms'

export const Page: React.FC = ({ children }) => {

  return (
    <>
      <Header/>
      <Box maxWidth={1240} m="auto" my={6} >
        {children}
      </Box>
      <Footer />
    </>
  );
};
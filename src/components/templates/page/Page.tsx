import React from 'react';

import { Box } from 'components/atoms';
import { Header, Footer } from 'components/organisms';

export const Page: React.FC = ({ children }) => {

  return (
    <>
      <Header/>
      <Box maxWidth={1280} m="auto" my={6} px={{ xs: 2, md: 4 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
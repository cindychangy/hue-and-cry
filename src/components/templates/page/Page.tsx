import React from 'react';

import { Box } from 'components/atoms';
import { Header, Footer } from 'components/organisms';

import { useStyles } from './Page.styles';

export const Page: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header/>
      <Box maxWidth={1280} m="auto" mb={6} mt={{ xs: 2, md: 6 }} px={{ xs: 2, md: 4 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
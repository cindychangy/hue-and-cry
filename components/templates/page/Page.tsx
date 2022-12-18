import React from 'react';

import Box from '@mui/material/Box';
import { Header } from 'components/organisms/header/Header';
import { Footer } from 'components/organisms/footer/Footer';

import * as S from './Page.styles';

export const Page: React.FC = ({ children }) => {

  return (
    <S.BoxStyled>
      <Header/>
      <Box maxWidth={1280} m="auto" px={{ xs: 2, md: 4 }}>
        {children}
      </Box>
      <Footer />
    </S.BoxStyled>
  );
};
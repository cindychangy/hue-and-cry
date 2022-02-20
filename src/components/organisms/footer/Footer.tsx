import React from 'react';

import Box from '@mui/material/Box';
import * as S from './Footer.styles';

export const Footer = () => {

  return (
    <Box>
      <S.Footer>
        &copy; 2022 &nbsp;<a href="mailto:hello@thehueandcry.com">Hue and Cry</a> &nbsp; | &nbsp; True Crime Blog 
      </S.Footer>
    </Box>
  )
}

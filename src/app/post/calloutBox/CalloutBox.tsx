import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CalloutBoxProps } from './CallboutBox.types';

import * as S from './CalloutBox.styles';

export const CalloutBox = ({ helpInfo, sourcesInfo }: CalloutBoxProps) => {

  return (
    <S.CtaBox container> 
      <Grid item xs={12} md={6}>
        <S.HelpInfo>
          <S.Headline variant="h4" gutterBottom>
            Help this Case
          </S.Headline>
          <Box dangerouslySetInnerHTML={{__html: helpInfo}} />
        </S.HelpInfo>
      </Grid>
      <Grid item xs={12} md={6}>
        <S.SourcesLinks>
          <S.Headline variant="h4" gutterBottom>
            Sources and Links
          </S.Headline>
          <Box dangerouslySetInnerHTML={{__html: sourcesInfo}} />
        </S.SourcesLinks>
      </Grid>
    </S.CtaBox>
  )
}

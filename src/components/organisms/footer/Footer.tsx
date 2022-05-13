import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'components/atoms/link/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NAV_ITEMS } from 'constants/navigation';
import { TWITTER_LINK, INSTAGRAM_LINK } from 'constants/social';
import * as S from './Footer.styles';

export const Footer = () => {

  return (
    <S.Footer>
      <Box maxWidth={1280} m="auto" px={{ xs: 2, md: 4 }}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <S.FooterLogo><Link href="/">Hue and Cry</Link></S.FooterLogo>
            <S.Copyright>
            © 2022 Hue and Cry. True Crime Blog. All Rights Reserved.
            </S.Copyright>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mt={1} display={{ xs: 'block', lg: 'flex'}} justifyContent="flex-end">
              {NAV_ITEMS.map(item => (
                <Link key={item.label} href={item.value}>{item.label}</Link>
              ))}
            </Box>
            <Box mt={1} display={{ xs: 'block', lg: 'flex'}} justifyContent="flex-end">
              <Link 
                href={TWITTER_LINK}
                rel={'noreferrer noopener'} 
                externalLink
              >
                <TwitterIcon/>
              </Link>
              <Link 
                href={INSTAGRAM_LINK}
                rel={'noreferrer noopener'} 
                externalLink
              >
                <InstagramIcon/>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </S.Footer>
  )
}

import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'components/atoms/link/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NAVITEMS, TWITTERLINK, INSTAGRAMLINK } from 'api/data';
import * as S from './Footer.styles';

export const Footer = () => {

  return (
    <S.Footer>
      <Box maxWidth={1280} m="auto" px={{ xs: 2, md: 4 }}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <S.FooterLogo><Link href="/">Hue and Cry</Link></S.FooterLogo>
            <S.Copyright>
            © 2022 Hue and Cry. All Rights Reserved. &nbsp;<a href="mailto:hello@thehueandcry.com" style={{ color: '#a5a5a5' }}>Contact Us.</a>
            </S.Copyright>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mt={1} display={{ xs: 'block', lg: 'flex'}} justifyContent="flex-end">
              {NAVITEMS.map(item => (
                <Link key={item.label} href={item.value}>{item.label}</Link>
              ))}
            </Box>
            <Box mt={1} display={{ xs: 'block', lg: 'flex'}} justifyContent="flex-end">
              <Link 
                href={TWITTERLINK}
                rel={'noreferrer noopener'} 
                externalLink
              >
                <TwitterIcon/>
              </Link>
              <Link 
                href={INSTAGRAMLINK}
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

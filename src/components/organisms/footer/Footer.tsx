import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'components/atoms/link/Link';
import { AppRoute } from 'app/App.types';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as S from './Footer.styles';

const navItems = [
  { label: 'Missing', value: AppRoute.MISSING },
  { label: 'Highway of Tears', value: AppRoute.HIGHWAY_OF_TEARS },
  { label: 'Murdered', value: AppRoute.MURDERED },
  { label: 'Indigenous Women', value: AppRoute.INDIGENOUS_WOMEN },
  { label: 'Military', value: AppRoute.MILITARY },
  { label: 'About', value: AppRoute.ABOUT },
];

const TWITTERLINK = 'https://twitter.com/thehueandcry';
const INSTAGRAMLINK = 'https://www.instagram.com/hueandcryblog/';

export const Footer = () => {

  return (
    <S.Footer>
      <Box maxWidth={1280} m="auto" px={{ xs: 2, md: 4 }}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <S.FooterLogo>Hue and Cry</S.FooterLogo>
            <S.Copyright>
            © 2022 Hue and Cry. All Rights Reserved. &nbsp;<a href="mailto:hello@thehueandcry.com" style={{ color: '#a5a5a5' }}>Contact Us.</a>
            </S.Copyright>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mt={1} display={{ xs: 'block', lg: 'flex'}} justifyContent="flex-end">
              {navItems.map(item => (
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

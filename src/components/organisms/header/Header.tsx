import React, { useState } from 'react';

import Hidden from '@mui/material/Hidden';
import { Link } from 'components/atoms/link/Link';
import { NavItem } from './navItem/NavItem';
import { AppRoute } from 'app/App.types';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './Header.styles';

const navItems = [
  { label: 'Missing', value: AppRoute.MISSING },
  { label: 'Highway of Tears', value: AppRoute.HIGHWAY_OF_TEARS },
  { label: 'Murdered', value: AppRoute.MURDERED },
  { label: 'Indigenous Women', value: AppRoute.INDIGENOUS_WOMEN },
  { label: 'Military', value: AppRoute.MILITARY },
  { label: 'About', value: AppRoute.ABOUT },
]

const TWITTERLINK = 'https://twitter.com/thehueandcry';
const INSTAGRAMLINK = 'https://www.instagram.com/hueandcryblog/';

export const Header = () => {

  const [hideMenu, setHideMenu] = useState(true);

  return (  
    <S.Header maxWidth={1280} px={{ xs: 2, md: 4 }}>
      <S.Logo>
        <Link href={AppRoute.HOME}>
          Hue and Cry
        </Link>
      </S.Logo>

      <Hidden smDown>
        <S.NavItemsContainer>
          <S.Nav>
            <NavItem navItems={navItems}/>
            <S.IconContainer>
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
            </S.IconContainer>
          </S.Nav>
        </S.NavItemsContainer>
      </Hidden>

    <Hidden lgUp>
      <S.MobileIcon onClick={()=> setHideMenu(!hideMenu)}>
        {hideMenu ? <MenuIcon/> : <CloseIcon/>}
      </S.MobileIcon>
      <S.NavMobile sx={{ display: hideMenu ? 'none' : 'block' }}>
        <NavItem navItems={navItems}/>
        <S.IconContainer>
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
        </S.IconContainer>
      </S.NavMobile>
    </Hidden>
    </S.Header> 
  )
}

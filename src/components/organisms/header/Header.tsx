import React, { useState } from 'react';

import Hidden from '@mui/material/Hidden';
import { Link } from 'components/atoms/link/Link';
import { NavItem } from './navItem/NavItem';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppRoute } from 'app/App.types';
import { NAV_ITEMS } from 'constants/navigation';
import { TWITTER_LINK, INSTAGRAM_LINK } from 'constants/social';

import * as S from './Header.styles';

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
            <NavItem navItems={NAV_ITEMS}/>
            <S.IconContainer>
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
            </S.IconContainer>
          </S.Nav>
        </S.NavItemsContainer>
      </Hidden>

    <Hidden lgUp>
      <S.MobileIcon onClick={()=> setHideMenu(!hideMenu)}>
        {hideMenu ? <MenuIcon/> : <CloseIcon/>}
      </S.MobileIcon>
      <S.NavMobile sx={{ display: hideMenu ? 'none' : 'block' }}>
        <NavItem navItems={NAV_ITEMS}/>
        <S.IconContainer>
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
        </S.IconContainer>
      </S.NavMobile>
    </Hidden>
    </S.Header> 
  )
}

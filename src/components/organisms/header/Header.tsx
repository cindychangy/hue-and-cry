import React, { useState } from 'react';

import { Box, Typography, IconButton, Icons, Link, Hidden } from 'components/atoms';
import { NavItem } from './navItem/NavItem';

import { useStyles } from './Header.styles';
import { AppRoute } from 'app/App.types';

const navItems = [
  { label: 'Military', value: AppRoute.MILITARY },
  { label: 'Indigenous Women', value: AppRoute.INDIGENOUS_WOMEN },
  { label: 'Missing', value: AppRoute.MISSING },
  { label: 'Murdered', value: AppRoute.MURDERED },
  { label: 'About', value: AppRoute.ABOUT },
]

export const Header = () => {
  const classes = useStyles();

  const [hideMenu, setHideMenu] = useState(true);

  return (  
    <Box  maxWidth={1280} px={{ xs: 2, md: 4 }} className={classes.header}>
      <Typography className={classes.logo}>
        <Link href={AppRoute.HOME}>
          Hue and Cry
        </Link>
      </Typography>

      <Hidden smDown>
        <Box className={classes.navIemsContainer}>
          <Box className={classes.nav}>
            <NavItem navItems={navItems}/>
            <Link 
              href="https://twitter.com/thehueandcry"
              rel={'noreferrer noopener'} 
              target="_blank"
            >
              <Icons.Twitter/>
            </Link>
          </Box>
        </Box>
      </Hidden>

    <Hidden mdUp>
      <IconButton className={classes.mobileIcon} onClick={()=> setHideMenu(!hideMenu)}>
        <Icons.Menu/>
      </IconButton>
      <Box className={hideMenu ? classes.hide: classes.navMobile}>
        <NavItem navItems={navItems}/>
        <Link 
          href="https://twitter.com/thehueandcry"
          rel={'noreferrer noopener'} 
          target="_blank"
        >
          <Icons.Twitter/>
        </Link>
      </Box>
    </Hidden>
    </Box> 
  )
}

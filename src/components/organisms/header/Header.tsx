import React, { useState } from 'react';

import { Box, Typography, IconButton, Icons, Link, Hidden } from 'components/atoms';
import { NavItem } from './navItem/NavItem';

import { useStyles } from './Header.styles';
import { PageRoute } from '../../../pages/Pages.types';

const navItems = [
  { label: 'Military', value: PageRoute.MILITARY },
  { label: 'Indigenous Women', value: PageRoute.INDIGENOUS_WOMEN },
  { label: 'Missing', value: PageRoute.MISSING },
  { label: 'Murdered', value: PageRoute.MURDERED },
  { label: 'About', value: PageRoute.ABOUT },
]

export const Header = () => {
  const classes = useStyles();

  const [hideMenu, setHideMenu] = useState(true);

  return (  
    <Box  maxWidth={1280} px={{ xs: 2, md: 4 }} className={classes.header}>
      <Typography className={classes.logo}>
        <Link href={PageRoute.HOME}>
          Hue and Cry
        </Link>
      </Typography>

      <Hidden smDown>
        <Box className={classes.navIemsContainer}>
          <Box className={classes.nav}>
            <NavItem navItems={navItems}/>
            <Icons.Twitter/>
          </Box>
        </Box>
      </Hidden>

    <Hidden mdUp>
      <IconButton className={classes.mobileIcon} onClick={()=> setHideMenu(!hideMenu)}>
        <Icons.Menu/>
      </IconButton>
      <Box className={hideMenu ? classes.hide: classes.navMobile}>
        <NavItem navItems={navItems}/>
        <Icons.Twitter/>
      </Box>
    </Hidden>

    </Box> 
  )
}

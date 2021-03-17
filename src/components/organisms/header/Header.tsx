import React, { useState } from 'react'

import { Box, Typography, IconButton, Icons, Link } from 'components/atoms'
import { MobileMenu } from './mobileMenu/MobileMenu'
import { useStyles } from './Header.styles';
import { PageRoutes } from '../../../pages/Pages.types';


export const Header = () => {
  const classes = useStyles();

  const [hideMenu, setHideMenu] = useState(true);

  return (  
    <Box  maxWidth={1280} px={{ xs: 2, md: 4 }} className={classes.header}>
      <Typography className={classes.logo}>
        <Link href={PageRoutes.HOME}>
          Hue and Cry
        </Link>
      </Typography>

      <IconButton className={classes.mobileIcon}>
        <Icons.Menu/>
      </IconButton>

      <MobileMenu/>

      <Box className={classes.navIemsContainer}>
        <Box className={classes.nav}>
          <Typography variant="h3" className={classes.navItem}>
            <Link href={PageRoutes.MILITARY}>Military</Link>
          </Typography>
          <Typography variant="h3" className={classes.navItem}>
            <Link href={PageRoutes.INDIGENOUS_WOMEN}>Indigenous Women</Link>
          </Typography>
          <Typography variant="h3" className={classes.navItem}>
            <Link href={PageRoutes.MISSING}>Missing</Link>
          </Typography>
          <Typography variant="h3" className={classes.navItem}>
            <Link href={PageRoutes.MURDERED}>Murdered</Link>
          </Typography>
          <Typography variant="h3" className={classes.navItem}>
            <Link href={PageRoutes.ABOUT}>About</Link>
          </Typography>
          <Icons.Twitter/>
        </Box>
      </Box>

    </Box> 
  )
}

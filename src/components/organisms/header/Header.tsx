import React from 'react'

import { Box, Typography, Icons, Link } from 'components/atoms'
import { useStyles } from './Header.styles';
// import { HeaderProps } from './Header.types'
import { PageRoutes } from '../../../pages/Pages.types';


export const Header = () => {
  const classes = useStyles();

  return (  
    <Box maxWidth={1280} m="auto" className={classes.header}>
      <Typography className={classes.logo}>
        <Link href={PageRoutes.HOME}>
          Hue and Cry
        </Link>
      </Typography>

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
  )
}

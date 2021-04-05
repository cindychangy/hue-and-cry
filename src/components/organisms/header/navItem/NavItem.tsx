import React from 'react';

import { Typography, Link } from 'components/atoms';
import { useStyles } from './NavItem.styles';
import { NavItemProps } from './NavItem.types';

export const NavItem = ( { navItems }: NavItemProps) => {
  const classes = useStyles();

  return (  
    <>
    {navItems.map(item => (
      <Typography variant="h3" className={classes.navItem}>
        <Link href={item.value}>{item.label}</Link>
      </Typography>
    ))}
    </>
  )
}

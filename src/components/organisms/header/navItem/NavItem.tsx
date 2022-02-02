import React from 'react';

import { Link } from 'components/atoms/link/Link';
import { NavItemProps } from './NavItem.types';

import * as S from './NavItem.styles';

export const NavItem = ( { navItems }: NavItemProps) => {

  return (  
    <>
    {navItems.map(item => (
      <S.NavItem variant="h3" key={item.label}>
        <Link href={item.value}>{item.label}</Link>
      </S.NavItem>
    ))}
    </>
  )
}

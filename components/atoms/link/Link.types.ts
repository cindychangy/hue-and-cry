import { LinkProps } from '@mui/material/Link';
import { ReactNode } from 'react';

export type CustomLinkProps = LinkProps & {
  externalLink?: boolean;
  href: string;
  children: ReactNode;
}
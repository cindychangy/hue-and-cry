import { LinkProps } from '@mui/material/Link';

export type CustomLinkProps = LinkProps & {
  externalLink?: boolean;
  href: string;
}
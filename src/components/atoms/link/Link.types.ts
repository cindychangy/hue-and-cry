import { LinkProps } from '@material-ui/core';

export type CustomLinkProps = LinkProps & {
  externalLink?: boolean;
}
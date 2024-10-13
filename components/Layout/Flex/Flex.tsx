import classNames from 'classnames';
import styles from './Flex.module.css';
interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  wrap?: 'wrap' | 'nowrap';
  gap?: string;
  responsive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap,
  responsive = false,
  className,
  children,
  ...props
}: FlexProps) => {
  const toCamelCase = (word: string) =>
    word
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

  const containerStyles = classNames(
    styles.container,
    styles[direction],
    styles[wrap],
    styles[`justify${toCamelCase(justify)}`],
    styles[`align${toCamelCase(align)}`],
    { [styles.responsive]: responsive },
  );

  return (
    <div
      className={classNames(containerStyles, className)}
      style={{ gap: gap ? `${gap}px` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
};

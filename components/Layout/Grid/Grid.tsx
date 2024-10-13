import styles from './Grid.module.css';
import classNames from 'classnames';
interface GridProps {
  columns: 1 | 2 | 3 | 4;
  gap?: string;
  className?: string;
  children: React.ReactNode;
}

export const Grid = ({ columns = 1, gap, className, children }: GridProps) => {
  const columnCount = Math.min(Math.max(columns, 1), 4);

  return (
    <div
      className={classNames(styles.grid, className)}
      style={{
        gap: `${gap}px`,
      }}
      data-columns={columnCount}
    >
      {children}
    </div>
  );
};

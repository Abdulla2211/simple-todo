import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

export interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 's' | 'm' | 'l';
  appearance?: 'white' | 'black' | 'primary' | 'secondary' | 'tertiary';
}

function Button({
  appearance = 'primary',
  children,
  leftIcon,
  rightIcon,
  className,
  ...props
}: Props): JSX.Element {
  const btnStyles = cn(styles.button, className, {
    [styles.white]: appearance === 'white',
    [styles.black]: appearance === 'black',
    [styles.primary]: appearance === 'primary',
    [styles.secondary]: appearance === 'secondary',
    [styles.tertiary]: appearance === 'tertiary',
  });
  return (
    <button className={btnStyles} {...props}>
      {leftIcon && leftIcon}
      {children && <span>{children}</span>}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;

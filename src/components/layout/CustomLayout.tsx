import React, { ReactNode } from 'react';
import { Menu } from './menu';
import styles from './CustomLayout.module.scss';

interface Props {
  children: ReactNode;
}

const CustomLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <Menu />
    </div>
  );
};

export default CustomLayout;

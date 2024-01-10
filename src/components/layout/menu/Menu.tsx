import React from 'react';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Menu = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <button type="button" className={styles.button}>
          <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Menu;

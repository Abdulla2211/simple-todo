'use client';

import { ReactNode, useCallback, useEffect } from 'react';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalTypes {
  title?: string;
  isShow: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalTypes> = ({ title, isShow, onClose, children }) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    isShow && (
      <div className={styles.background} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.head}>
            <span className={styles.title}>{title}</span>
            <button type="button" className={styles.button} onClick={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} className={styles.icon} />
            </button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;

import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ open, onClose}) => {
  if (!open) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
    </div>
  );
};

export default Modal;
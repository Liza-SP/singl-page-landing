import React from 'react';
import styles from './index.module.css';

export default function InfoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <div className={styles.cardText}>
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className={styles.cardText}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
    </div>
  );
}

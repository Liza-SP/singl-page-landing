import React from 'react';
import styles from './index.module.css';
import useWindowDimensions from '../../hooks/useWindowDimentions';

export default function Navbar() {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.logo} src="./images/Vector.png" alt="logo" />
        <img className={styles.name} src="./images/Circeya.png" alt="name" />
      </div>
      {width > 690 ? (
        <div className={styles.phone}>
          +7 (495) 495-49-54
        </div>
      ) : (
        <div>
          <img className={styles.phone2} src="./images/VectorP.png" alt="name" />
        </div>
      )}
    </div>
  );
}

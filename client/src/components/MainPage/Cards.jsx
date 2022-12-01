import React from 'react';
import styles from './index.module.css';
import InfoCard from './InfoCard';

export default function Cards({ image1, image2 }) {
  return (
    <>
      <div className={styles.title}>ut aliquip ex ea commodo consequat</div>
      <div className={styles.container}>
        <img className={styles.imgLeft} src={`./images/${image1}`} alt="necklase" />
        <InfoCard />
      </div>
      <div className={styles.container2}>
        <InfoCard />
        <img className={styles.imgRight} src={`./images/${image2}`} alt="necklase" />
      </div>
    </>
  );
}

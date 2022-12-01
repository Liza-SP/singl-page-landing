import React from 'react';
import Slider from '../Slider';
import Cards from './Cards';
import styles from './index.module.css';

export default function Main() {
  return (
    <>
      <Cards image1="julia-d-FlNTu2Bj4Dg-unsplashp1.jpg" image2="taisiia-stupak-viq7xx1boxo-unsplash 1.jpg" />
      <div className={styles.title}>Lorem ipsum dolor sit amet</div>
      <Slider />
      <Cards image1="julia-d-FlNTu2Bj4Dg-unsplash.jpg" image2="taisiia-stupak-viq7xx1boxo-unsplash1.jpg" />
    </>
  );
}

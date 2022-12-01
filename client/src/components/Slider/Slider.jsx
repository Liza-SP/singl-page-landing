/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './index.module.css';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

const images = [
  'jasmin-chew-UBeNYvk6ED0-unsplash.jpg',
  'angelica-echeverry-mI82mfLu538-unsplash 1.jpg',
  'joeyy-lee-3TnDfD2hIxg-unsplash.jpg',
  'cat-han-BJ3grTerqY4-unsplash.jpg',
  'andres-vera-CmmYT6Mm948-unsplash6.jpg',
  'andres-vera-CmmYT6Mm948-unsplash 1 (1).jpg',
  'andres-vera-CmmYT6Mm948-unsplash2.jpg',
  'andres-vera-CmmYT6Mm948-unsplash2(1).jpg',
  'andres-vera-CmmYT6Mm948-unsplash3(2).jpg',
  'andres-vera-CmmYT6Mm948-unsplash(3).jpg',
  'andres-vera-CmmYT6Mm948-unsplash(4).jpg',
];

export default function Slider() {
  const sliderRef = useHorizontalScroll();

  return (
    <div className={styles.container}>
      {/* горизонтальный скролл отрабатывает при прокпутке мышью */}
      <div ref={sliderRef} className={styles.items}>
        {images?.map((image, i) => <img id={i} key={i} className={styles.img} src={`./images/${image}`} alt="necklase" />)}
      </div>
    </div>
  );
}

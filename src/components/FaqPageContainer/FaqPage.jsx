import React from 'react';
import Slider from '../Slider/Slider';
import styles from './FaqPage.module.scss';

const FaqPage = (props) => {
  return (
    <div className={styles.sliderWrapper}>
      <Slider />
    </div>
  )
}

export default FaqPage;

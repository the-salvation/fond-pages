import React from 'react';
import Slider from '../Slider/Slider';
import styles from './MainPage.module.scss'

const MainPage = (props) => {
	return (
		<div className={styles.sliderWrapper}>
			<Slider />
			HORNEY
		</div>
	)
}

export default MainPage;
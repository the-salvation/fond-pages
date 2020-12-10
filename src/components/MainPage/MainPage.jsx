import React from 'react';
import Slider from '../Slider/Slider';
import styles from './MainPage.module.scss'

const MainPage = (props) => {
	return (
		<div className={styles.sliderWrapper}>
			{/* <ProfileInfo profile={props.profile} /> */}
			<Slider/>
			{/* <MyPostsContainer /> */}
		</div>
	)
}

export default MainPage;
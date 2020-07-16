import React from 'react';
import Slider from '../Slider/Slider';
import styles from './Profile.module.scss'

const Profile = (props) => {
	return (
		<div className={styles.sliderWrapper}>
			{/* <ProfileInfo profile={props.profile} /> */}
			<Slider/>
			{/* <MyPostsContainer /> */}
		</div>
	)
}

export default Profile;
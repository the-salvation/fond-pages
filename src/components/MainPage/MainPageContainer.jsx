import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss'

class MainPageContainer extends React.Component {

	render(){
		return (
			<div className={style.sliderContainer}>
				<MainPage {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {}) (MainPageContainer);
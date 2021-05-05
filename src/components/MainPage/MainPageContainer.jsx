import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import { isMobile, isBrowser } from "react-device-detect";

class MainPageContainer extends React.Component {
	render() {
		console.log('MainPageContainer this.props', this.props);
		return (
			<div className={style.sliderContainer}>
				{isBrowser && <MainPage {...this.props} />}
				{isMobile && <div className={style.mainPagePic}>[Mobile picture]</div>}
				<RenderPlainText {...this.props.aboutUsState.partOfState} />
			</div>

		)
	}
}

const mapStateToProps = (state) => ({
	aboutUsState: state.aboutUsreducer
})

export default connect(mapStateToProps, {})(MainPageContainer);


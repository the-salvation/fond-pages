import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class MainPageContainer extends React.Component {
	render() {
		debugger
		return (
				<div className={style.sliderContainer}>
					<MainPage {...this.props} />
					<RenderPlainText partOfState={this.props.store.FAQ} />
				</div>
		)
	}
}

const mapStateToProps = (state) => ({
	state: state.narcoticsReducer
})

export default connect(mapStateToProps, {})(MainPageContainer);
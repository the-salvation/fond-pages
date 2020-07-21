import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class MainPageContainer extends React.Component {
	debugger;
	render() {
		return (
				<div className={style.sliderContainer}>
					<MainPage {...this.props} />
				</div>
			// <div className={style.MainPageContainerWrapper}>
			// 	<div className={style.RenderPlainTextWrapper}>
			// 		<RenderPlainText partOfState={this.props.state.partOfState} />
			// 	</div>
			// </div>
		)
	}
}

const mapStateToProps = (state) => ({
	state: state.narcoticsReducer
})

export default connect(mapStateToProps, {})(MainPageContainer);
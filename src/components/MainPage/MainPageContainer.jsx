import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class MainPageContainer extends React.Component {
	render(){
		debugger;
		return (
			<div className={style.sliderContainer}>
				<MainPage {...this.props} />
				<RenderPlainText {...this.props} partOfState={this.props.state.partOfState}/>
				{/* <BookLecture partOfState={this.props.state.partOfState} /> */}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {}) (MainPageContainer);
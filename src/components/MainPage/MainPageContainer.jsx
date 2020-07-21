import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class MainPageContainer extends React.Component {
debugger;
	render(){
		return (
			<div className={style.sliderContainer}>
				<MainPage {...this.props} profile={this.props.profile} />
				<RenderPlainText {...this.props}/>
				{/* <BookLecture partOfState={this.props.state.partOfState} /> */}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {}) (MainPageContainer);
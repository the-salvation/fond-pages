import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';

class MainPageContainer extends React.Component {
	
	
	
	
	render(){
		return (
			<div>
				<MainPage {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {}) (MainPageContainer);
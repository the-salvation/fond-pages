import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
	
	
	
	
	render(){
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {}) (ProfileContainer);
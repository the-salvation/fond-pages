import React from 'react';
import { connect } from 'react-redux';
import style from './FaqPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class FaqPageContainer extends React.Component {
	render() {
		return (
				<div className={style.container}>
					<RenderPlainText partOfState={this.props.store.FAQ} />
				</div>
			
		)
	}
}

const mapStateToProps = (state) => ({
	state: state.narcoticsReducer
})

export default connect(mapStateToProps, {})(FaqPageContainer);
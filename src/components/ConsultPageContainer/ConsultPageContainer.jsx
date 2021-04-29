import React from 'react';
import { connect } from 'react-redux';
import style from './ConsultPageContainer.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class ConsultPageContainer extends React.Component {
	render() {
		return (
			<div className={style.container}>
				<RenderPlainText {...this.props.consultPageState.partOfState} />
			</div>

		)
	}
}

const mapStateToProps = (state) => ({
	consultPageState: state.getConsultReducer
})

export default connect(mapStateToProps, {})(ConsultPageContainer);
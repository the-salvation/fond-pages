import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import style from './FaqPage.module.scss'
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class FaqPageContainer extends React.Component {
	render() {
		return (
			<div className={style.container}>
				<RenderPlainText {...this.props.faqPageState.partOfState} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	faqPageState: state.faqPagereducer
});

FaqPageContainer.propTypes = {
	faqPageState: PropTypes.object
};

export default connect(mapStateToProps, {})(FaqPageContainer);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import style from './FaqPage.module.scss';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';

class FaqPageContainer extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <RenderPlainText partOfState={this.props.faqPageData.FAQ} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  faqPageData: state.narcoticsReducer,
});

FaqPageContainer.propTypes = {
  faqPageData: PropTypes.object,
};

export default connect(mapStateToProps, {})(FaqPageContainer);

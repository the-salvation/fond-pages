import React, { Component } from 'react';
import style from './BookLectureContainer.module.scss';
import { connect } from 'react-redux';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import PropTypes from 'prop-types';

class BookLectureContainer extends Component {
  render() {
    return (
      <div className={style.bookLectureContainer}>
        <RenderPlainText {...this.props.bookLectureState.partOfState} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookLectureState: state.bookLectureReducer
});

BookLectureContainer.propTypes = {
  faqPageState: PropTypes.object,
  bookLectureState: PropTypes.object
};

export default connect(mapStateToProps, {})(BookLectureContainer);

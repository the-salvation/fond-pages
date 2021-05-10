import React, { Component } from 'react';
import style from './BookLectureContainer.module.scss'
import { connect } from 'react-redux';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import PropTypes from 'prop-types';
import BookLectureForm from '../Forms/BookLectureForm/BookLectureForm';

class BookLectureContainer extends Component {
    onSubmit = (formData) => {
        console.log(formData);
    }

    render() {
        return (
            <div className={style.bookLectureContainer}>
                <RenderPlainText {...this.props.bookLectureState.partOfState} />
                <BookLectureForm form='bookLecture' onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bookLectureState: state.bookLectureReducer
});

BookLectureContainer.propTypes = {
    faqPageState: PropTypes.object
};

export default connect(mapStateToProps, {})(BookLectureContainer);
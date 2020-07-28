import React, { Component } from 'react';
import style from './BookLectureContainer.module.scss'
import { connect } from 'react-redux';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import BookLectureForm from '../Forms/BookLectureForm/BookLectureForm';

class BookLectureContainer extends Component {
    // {this.props.state.partOfState.id === "Opium" ? <OneNarcotic partOfState={this.props.state.partOfState}/> : null }
    render() {
        return (
            <div className={style.bookLectureContainer}>
                <RenderPlainText partOfState={this.props.state.partOfState}/>
                <BookLectureForm form='bookLecture'/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.narcoticsReducer
});

export default connect(mapStateToProps, {})(BookLectureContainer);
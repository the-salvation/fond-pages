import React, { Component } from 'react';
import style from './BookLectureContainer.module.scss'
import { connect } from 'react-redux';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import BookLectureForm from '../Forms/BookLectureForm/BookLectureForm';
import MyEmail from './Email';
import { renderEmail } from 'react-html-email';
import * as axios from "axios";

class BookLectureContainer extends Component {
    // {this.props.state.partOfState.id === "Opium" ? <OneNarcotic partOfState={this.props.state.partOfState}/> : null }
    onSubmit = (formData) => {

        const messageHtml =  renderEmail(<MyEmail formData={{...formData}} />);
        // console.log(formData);

        axios({
            method: "POST", 
            url:"https://www.fondnn.org.ua/book-a-lecture/send",
            data: {
                name: formData.firstName,
                email: formData.email,
                messageHtml: messageHtml
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Email sent, awesome!"); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Oops, something went wrong. Try again")
            }
        })
    // }

    };


    render() {
        return (
            <div className={style.bookLectureContainer}>
                <RenderPlainText partOfState={this.props.state.partOfState}/>
                <BookLectureForm form='bookLecture' onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.narcoticsReducer
});

export default connect(mapStateToProps, {})(BookLectureContainer);
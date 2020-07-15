import React, { Component } from 'react';
import style from './narcoticsContainer.module.css'
import { connect } from 'react-redux';
import FlexArticle from './FlexArticle/FlexArticle';

class NarcotisContainer extends Component {
    // {this.props.state.partOfState.id === "Opium" ? <OneNarcotic partOfState={this.props.state.partOfState}/> : null }
    render() {
        return (
            <div className={style.narcotisContainer}>
                <FlexArticle partOfState={this.props.state.partOfState}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.narcoticsReducer
});

export default connect(mapStateToProps, {})(NarcotisContainer);
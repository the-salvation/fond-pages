import React, { Component } from 'react';
import MediumArticle from './MediumArticle/MediumArticle';
import style from './narcoticsContainer.module.css'
import { connect } from 'react-redux';
import LargeArticle from './LargeArticle/LargeArticle';

class NarcotisContainer extends Component {
    // {this.props.state.partOfState.id === "Opium" ? <OneNarcotic partOfState={this.props.state.partOfState}/> : null }
    render() {
        return (
            <div className={style.narcotisContainer}>
                {/* <OneNarcotic partOfState={this.props.state.partOfState}/> */}
                {this.props.state.partOfState.id === "Opium" ? <MediumArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "Barbiturati" ? <MediumArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "Lsd" ? <MediumArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "Cocaine" ? <LargeArticle partOfState={this.props.state.partOfState}/> : null }
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    state: state.narcoticsReducer
});

export default connect(mapStateToProps, {})(NarcotisContainer);
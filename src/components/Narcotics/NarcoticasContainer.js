import React, { Component } from 'react';
import MediumArticle from './MediumArticle/MediumArticle';
import style from './narcoticsContainer.module.css'
import { connect } from 'react-redux';
import LargeArticle from './LargeArticle/LargeArticle';
import SmallArticle from './SmallArticle/SmallArticle';
import Article4 from './Article4/Article4';

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
                {this.props.state.partOfState.id === "Alcohol" ? <LargeArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "Durman" ? <SmallArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "DMAA" ? <SmallArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "MDMA" ? <SmallArticle partOfState={this.props.state.partOfState}/> : null }
                {this.props.state.partOfState.id === "Konopli" ? <Article4 partOfState={this.props.state.partOfState}/> : null }
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    state: state.narcoticsReducer
});

export default connect(mapStateToProps, {})(NarcotisContainer);
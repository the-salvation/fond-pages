import React, { Component } from "react";
import style from "./narcoticsContainer.module.scss";
import { connect } from "react-redux";
import RenderComplexText from "../Render/RenderComplexText/RenderComplexText";
import PropTypes from 'prop-types';

class NarcotisContainer extends Component {
  // {this.props.state.partOfState.id === "Opium" ? <OneNarcotic partOfState={this.props.state.partOfState}/> : null }
  render() {
    return (
      <div className={style.narcotisContainer}>
        <RenderComplexText partOfState={this.props.state.partOfState} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.narcoticsReducer,
});

NarcotisContainer.propTypes = {
  store: PropTypes.object
};


export default connect(mapStateToProps, {})(NarcotisContainer);

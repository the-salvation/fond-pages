import React, { Component } from 'react';
import style from './narcoticsContainer.module.scss'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderComplexText from '../Render/RenderComplexText/RenderComplexText';

class NarcotisContainer extends Component {
  render() {

    // console.log("narcoticsContainerState", this.props.narcoticsContainerState)
    return (
      <div className={style.narcotisContainer} >
        {/* <RenderComplexText partOfState={this.props.narcoticsContainerState.partOfState} /> */}
        <RenderComplexText {...this.props.narcoticsContainerState} />
      </div >
    )
  }
}

NarcotisContainer.propTypes = {
  narcoticsContainerState: PropTypes.object
};

const mapStateToProps = (state) => ({
  narcoticsContainerState: state.narcoticsReducer
});

export default connect(mapStateToProps, {})(NarcotisContainer);
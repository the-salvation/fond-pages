import React, { Component } from 'react';
import style from './narcoticsContainer.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderComplexText from '../Render/RenderComplexText/RenderComplexText';

class NarcotisContainer extends Component {
  render() {
    return (
      <div className={style.narcotisContainer} >
        <RenderComplexText {...this.props.narcoticsContainerState} />
      </div>
    )
  }
}

NarcotisContainer.propTypes = {
  narcoticsContainerState: PropTypes.object
};

const mapStateToProps = (state) => ({
  narcoticsContainerState: state.narcoticsReducer
});

NarcotisContainer.propTypes = {
  state: PropTypes.object
};


export default connect(mapStateToProps, {})(NarcotisContainer);

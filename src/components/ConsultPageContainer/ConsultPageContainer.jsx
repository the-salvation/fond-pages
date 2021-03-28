import React from "react";
import { connect } from "react-redux";
import style from "./ConsultPageContainer.module.scss";
import RenderPlainText from "../Render/RenderPlainText/RenderPlainText";
import PropTypes from 'prop-types';

class ConsultPageContainer extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <RenderPlainText partOfState={this.props.store.Consult} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.narcoticsReducer,
});

ConsultPageContainer.propTypes = {
  store: PropTypes.object
};


export default connect(mapStateToProps, {})(ConsultPageContainer);

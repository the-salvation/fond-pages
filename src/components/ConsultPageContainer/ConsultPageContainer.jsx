import React from 'react';
import { connect } from 'react-redux';
import style from './ConsultPageContainer.module.scss';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import PropTypes from 'prop-types';
// import { Image } from 'react-bootstrap';
import callImg from '../../assets/images/consultPage/call.jpg';

class ConsultPageContainer extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.contentWrapper}>
          {/* <div className="imageWrapper">
          </div> */}
            <img
              src={callImg}
              className={style.img}
              alt='call'
            />
          <div className="textWrapper">
            <RenderPlainText {...this.props.consultPageState.partOfState} />
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  consultPageState: state.getConsultReducer
});

ConsultPageContainer.propTypes = {
  consultPageState: PropTypes.object
};

export default connect(mapStateToProps, {})(ConsultPageContainer);

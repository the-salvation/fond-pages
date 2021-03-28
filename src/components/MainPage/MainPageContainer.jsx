import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import style from './MainPage.module.scss';
import RenderPlainText from '../Render/RenderPlainText/RenderPlainText';
import { isMobile, isBrowser } from 'react-device-detect';
import PropTypes from 'prop-types';

class MainPageContainer extends React.Component {
  render() {
    return (
      <div className={style.sliderContainer}>
        {isBrowser && <MainPage {...this.props} />}
        {isMobile && <div className={style.mainPagePic}>[Mobile picture]</div>}
        {/* <MainPage {...this.props} /> */}
        <RenderPlainText partOfState={this.props.store.AboutUs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.narcoticsReducer,
});

MainPageContainer.propTypes = {
  store: PropTypes.object
};


export default connect(mapStateToProps, {})(MainPageContainer);

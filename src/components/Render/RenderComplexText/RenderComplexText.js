import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import style from './RenderComplexText.module.scss';
import PropTypes from 'prop-types';

const RenderComplexText = ({ partOfState }) => {
  console.log("🚀 ~ file: RenderComplexText.js ~ line 7 ~ RenderComplexText ~ partOfState", partOfState)
  return (
    <article className={style.opium}>
      <div className={style.opium_wrapper}>
        {partOfState.t1 && <h2>{partOfState.t1}</h2>}
        {partOfState.pic1 &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              {partOfState.pic1 ? (<img className={style.opium__picture}
                align="left"
                vspace="5"
                hspace="15"
                src={partOfState.pic1}
                width="250px"
                height="200px" alt="pic1" />) : <Preloader />}
                        &nbsp; &nbsp; {partOfState.p1 && partOfState.p1}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t2 && <h2>{partOfState.t2}</h2>}
        {(partOfState.p2 || partOfState.pic2) &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              <img className={style.opium__picture}
                align="right"
                vspace="5"
                hspace="15"
                src={partOfState.pic2}
                width="250px"
                height="200px" alt="pic2" />
                        &nbsp; &nbsp; {partOfState.p2 && partOfState.p2}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t3 && <h2>{partOfState.t3}</h2>}
        {(partOfState.p3 || partOfState.pic3) &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              <img className={style.opium__picture}
                align="left"
                vspace="5"
                hspace="15"
                src={partOfState.pic3}
                width="250px"
                height="200px" alt="pic3" />
                        &nbsp; &nbsp; {partOfState.p3 && partOfState.p3}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t4 && <h2>{partOfState.t4}</h2>}
        {(partOfState.p4 || partOfState.pic4) &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              <img className={style.opium__picture}
                align="right"
                vspace="5"
                hspace="15"
                src={partOfState.pic4}
                width="250px"
                height="200px" alt="pic4" />
                        &nbsp; &nbsp; {partOfState.p4 && partOfState.p4}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t5 && <h2>{partOfState.t5}</h2>}
        {partOfState.p5 &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              {partOfState.pic5 && <img className={style.opium__picture}
                align="left"
                vspace="5"
                hspace="15"
                src={partOfState.pic5}
                width="250px"
                height="200px" alt="pic5" />}
                        &nbsp; &nbsp; {partOfState.p5 && partOfState.p5}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t6 && <h2>{partOfState.t6}</h2>}
        {(partOfState.p6) &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              {partOfState.pic6 && <img className={style.opium__picture}
                align="right"
                vspace="5"
                hspace="15"
                src={partOfState.pic6}
                width="250px"
                height="200px" alt="pic6" />}
                        &nbsp; &nbsp; {partOfState.p6 && partOfState.p6}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t7 && <h2>{partOfState.t7}</h2>}
        {partOfState.p7 &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              {partOfState.pic7 && <img className={style.opium__picture}
                align="left"
                vspace="5"
                hspace="15"
                src={partOfState.pic7}
                width="250px"
                height="200px" alt="pic7" />}
                        &nbsp; &nbsp; {partOfState.p7 && partOfState.p7}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t8 && <h2>{partOfState.t8}</h2>}
        {partOfState.p8 &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              {partOfState.pic8 && <img className={style.opium__picture}
                align="right"
                vspace="5"
                hspace="15"
                src={partOfState.pic8}
                width="250px"
                height="200px" alt="pic8" />}
                        &nbsp; &nbsp; {partOfState.p8 && partOfState.p8}
            </p>
          </div>}
      </div>
      <div className={style.opium_wrapper}>
        {partOfState.t9 && <h2>{partOfState.t9}</h2>}
        {partOfState.p9 &&
          <div className={style.opium__textBlock}>
            <p className={style.opium__text}>
              {partOfState.pic9 && <img className={style.opium__picture}
                align="left"
                vspace="5"
                hspace="15"
                src={partOfState.pic9}
                width="250px"
                height="200px" alt="pic9" />}
                        &nbsp; &nbsp; {partOfState.p9 && partOfState.p9}
            </p>
          </div>}
      </div>

    </article>
  );
};

RenderComplexText.propTypes = {
  partOfState: PropTypes.object
};


export default RenderComplexText;

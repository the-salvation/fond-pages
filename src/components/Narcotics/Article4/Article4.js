import React from 'react';
import style from './Article4.module.css';

const Article4 = ({partOfState}) => {
    return (
        <article className={style.opium}>
            <div className={style.opium_headPicture}>
                <img src={partOfState.pic4} alt="pic4"/>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{partOfState.t1}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic1}
                        width="250px" 
                        height="200px" alt="pic1"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p1}
                    </p>
                </div>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{partOfState.t2}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="right" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic2}
                        width="250px" 
                        height="200px" alt="pic2"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p2}
                    </p>
                </div>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{partOfState.t3}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic3}
                        width="250px" 
                        height="200px" alt="pic3"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p3}
                    </p>
                </div>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{partOfState.t5}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic5}
                        width="250px" 
                        height="200px" alt="pic5"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p5}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Article4;
import React from 'react';
import style from './SmallArticle.module.css';

const SmallArticle = ({partOfState}) => {
    return (
        <article className={style.opium}>
            <div className={style.opium_headPicture}>
            {
                partOfState.pic4 &&
                <img src={partOfState.pic4} alt="pic4"/>
            }
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
            
        </article>
    )
}

export default SmallArticle;
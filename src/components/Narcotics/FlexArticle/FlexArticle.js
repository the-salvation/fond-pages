import React from 'react';
import style from './FlexArticle.module.css';

const FlexArticle = ({partOfState}) => {
    return (
        <article className={style.opium}>
            
            <div className={style.opium_wrapper}>
                {partOfState.t1 && <h2>{partOfState.t1}</h2> }
                {partOfState.pic1 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic1}
                        width="250px" 
                        height="200px" alt="pic1"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p1 && partOfState.p1}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t2 && <h2>{partOfState.t2}</h2> }
                {partOfState.pic2 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="right" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic2}
                        width="250px" 
                        height="200px" alt="pic2"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p2 && partOfState.p2}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t3 && <h2>{partOfState.t3}</h2> }
                {partOfState.pic3 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic3}
                        width="250px" 
                        height="200px" alt="pic3"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p3 && partOfState.p3}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t4 && <h2>{partOfState.t4}</h2> }
                {partOfState.pic4 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="right" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic4}
                        width="250px" 
                        height="200px" alt="pic4"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p4 && partOfState.p4}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t5 && <h2>{partOfState.t5}</h2> }
                {partOfState.pic5 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic5}
                        width="250px" 
                        height="200px" alt="pic5"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p5 && partOfState.p5}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t6 && <h2>{partOfState.t6}</h2> }
                {partOfState.pic6 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="right" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic6}
                        width="250px" 
                        height="200px" alt="pic6"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p6 && partOfState.p6}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t7 && <h2>{partOfState.t7}</h2> }
                {partOfState.pic7 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic7}
                        width="250px" 
                        height="200px" alt="pic7"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p7 && partOfState.p7}
                    </p>
                </div>}
            </div>
            <div className={style.opium_wrapper}>
                { partOfState.t8 && <h2>{partOfState.t8}</h2> }
                {partOfState.pic8 && 
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="right" 
                        vspace="5" 
                        hspace="15"
                        src={partOfState.pic8}
                        width="250px" 
                        height="200px" alt="pic8"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {partOfState.p8 && partOfState.p8}
                    </p>
                </div>}
            </div>
        </article>
    )
}

export default FlexArticle;
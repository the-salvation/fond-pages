import React from 'react';
import style from './RenderPlainText.module.scss';

const RenderPlainText = ({partOfState}) => {
    return (
        <article className={style.opium}>
            <div className={style.opium_wrapper}>

                {partOfState.t1 && <h2>{partOfState.t1}</h2> }
                {partOfState.p1 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p1 && partOfState.p1}
                    </p>
                </div>}

                {partOfState.t2 && <h2>{partOfState.t2}</h2> }
                {partOfState.p2 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p2 && partOfState.p2}
                    </p>
                </div>}

                {partOfState.t3 && <h2>{partOfState.t3}</h2> }
                {partOfState.p3 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p1 && partOfState.p3}
                    </p>
                </div>}

                {partOfState.t4 && <h2>{partOfState.t4}</h2> }
                {partOfState.p4 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p4 && partOfState.p4}
                    </p>
                </div>}

                {partOfState.t5 && <h2>{partOfState.t5}</h2> }
                {partOfState.p5 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p5 && partOfState.p5}
                    </p>
                </div>}

                {partOfState.t6 && <h2>{partOfState.t6}</h2> }
                {partOfState.p6 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p6 && partOfState.p6}
                    </p>
                </div>}

                {partOfState.t7 && <h2>{partOfState.t7}</h2> }
                {partOfState.p7 && 
                <div className={style.opium__textBlock}>
                    <p className={style.opium__text}>
                        {partOfState.p7 && partOfState.p7}
                    </p>
                </div>}

            </div>
            
        </article>
    )
}

export default RenderPlainText;
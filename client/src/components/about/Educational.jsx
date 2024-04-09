import React from 'react'
import style from './Educational.module.css'

export const Educational = () => {
    return (
        <div  className={style.educational}>
            <ul className={style.items}>
                <li className={style.item}>
                    <div className={style.name}>
                        <h3>Dr. Akhilesh Das Gupta Institute Of Professional Studies,<br /> New Delhi</h3>
                        <h3>2024</h3>
                    </div>

                    <p className={style.text}>B.Tech - Infoamtion Technology  |  GGSIPU  |  percentage: 81.55%</p>
                </li>

                <li  className={style.item}>
                    <div className={style.name}>
                        <h3>RPVV, Karol Bagh, New Delhi </h3>
                        <h3>2020</h3>
                    </div>

                    <p className={style.text}>12<sup>th</sup> | CBSE | percentage: 66%</p>
                </li>

                <li  className={style.item}>
                    <div className={style.name}>
                        <h3>Govt. Co-ed. Sr. Sec. School, New Delhi </h3>
                        <h3>2017</h3>
                    </div>

                    <p className={style.text}>10<sup>th</sup> | CBSE | percentage: 95% </p>
                </li>

            
            </ul>
        </div>
    );
}

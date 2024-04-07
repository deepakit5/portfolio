import React from 'react'
import style from './Personal.module.css'


export const Personal = () => {
  return (
    <div className={style.personal}>

      <div className={style.leftContainer}>
        <p>Date Of Birth: </p>
        <p>Gender: </p>
        <p>Language: </p>
      </div>

      <div   className={style.rightContainer}>
        <p>20 NOV. 2001</p>
        <p>Male</p>
        <p>English and Hindi</p>

      </div>

</div>

  )
}

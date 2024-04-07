import React from "react";

import style from "./About.module.css";
import { FaHashtag } from "react-icons/fa";
import { getImageUrl } from "../../utils";
import { Professional } from "./Professional";
import { useState } from "react";
import { Educational } from "./Educational";
import { Personal } from "./Personal";

export const About = () => {

  const [about, setAbout] = useState('pro');

  const handleClick = (id) => {
    setAbout(id);
  }

  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={style.aboutImage}
        />
        <div className={style.dataContainer}>
          <div className={style.buttonsContainer}>

            <div  className={style.aboutBtn}  id={style.proBtnContainer} 
                  style={{ backgroundColor: about === 'pro' ? 'rgba(12, 12, 12, 0.6)' : '' }}
                  >
              <button
                id={style.proBtn}
                onClick={  () => handleClick('pro')}
              >Professional</button>
            </div>

            <div   className={style.aboutBtn} id={style.eduBtnContainer}
                  style={{ backgroundColor: about === 'edu' ? 'rgba(12, 12, 12, 0.6)' : '' }}
            
            >
              <button
                id={style.eduBtn}
                onClick={() => handleClick('edu')}
              >Educational</button>

            </div>

            <div id={style.perBtnContainer}  className={style.aboutBtn}
                  style={{ backgroundColor: about === 'personal' ? 'rgba(12, 12, 12, 0.6)' : '' }}
            
            >
              <button
                id={style.perBtn}
                onClick={() => handleClick('personal')}
              >Personal</button>
            </div>

          </div>
          {about === 'pro' && <div> <Professional />  </div>}

          {about === 'edu' && <div> <Educational /> </div>}

          {about === 'personal' && <div> <Personal /> </div>}


        </div>
      </div>
    </section>
  );
};

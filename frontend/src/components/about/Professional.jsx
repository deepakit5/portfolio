import React from 'react'
import style from "./Professional.module.css";
import { FaHashtag } from "react-icons/fa";


export const Professional = () => {
  return (
    
    <div id={style.professional}>
    <ul className={style.aboutItems}>

      <li className={style.aboutItem}>

        <div className={style.aboutItemTitle}>
          <FaHashtag className={style.hashIcons} alt="hash icon" />
          <h3>Summary</h3>
        </div>
        <div className={style.aboutItemText}>
          <p>
            My name is Deepak Jayswal. I am a Full Stack Web Developer and want to join organization as a full stack developer or software developer engineer. I have been working more than two years to learn and master the MERN stack and other technologies.
          </p>
        </div>
      </li>

      <li className={style.aboutItem}>
        <div className={style.aboutItemTitle}>
          <FaHashtag className={style.hashIcons} alt="hash icon" />
          <h3>Technical Background</h3>

        </div>
        <div className={style.aboutItemText}>
          <p>
            I have spent more than 5 Years in Technical environment, because i have done B.Tech in Infomation Technology and i had  computer science subject in my 12th.

          </p>
        </div>
      </li>

      <li className={style.aboutItem}>
        <div className={style.aboutItemTitle}>
          <FaHashtag className={style.hashIcons} alt="hash icon" />
          <h3>Frontend Developer</h3>

        </div>
        <div className={style.aboutItemText}>
          <p>
            I'm a frontend developer with experience in building responsive
            and optimized sites
          </p>
        </div>
      </li>

      <li className={style.aboutItem}>
        <div className={style.aboutItemTitle}>
          <FaHashtag className={style.hashIcons} alt="hash icon" />
          <h3>Backend Developer</h3>

        </div>
        <div className={style.aboutItemText}>
          <p>
            I have experience developing fast and optimised back-end systems
            and APIs
          </p>
        </div>
      </li>

      <li className={style.aboutItem}>
        <div className={style.aboutItemTitle}>
          <FaHashtag className={style.hashIcons} alt="hash icon" />
          <h3>UI Designer</h3>

        </div>
        <div className={style.aboutItemText}>
          <p>
            I have designed multiple landing pages and have created design
            systems as well
          </p>
        </div>
      </li>

    </ul>
  </div>
  );
};

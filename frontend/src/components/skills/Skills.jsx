import React from "react";

import style from "./Skills.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";


export const Skills = () => {
  return (
    <section className={style.container} id="skills">
      <h2 className={style.title}>Skills</h2>
      <div className={style.content}>

        <div className={style.skills}>
          {
            
            skills.map((skill, id) => {
              return (
                <div key={id} className={style.skill}>
                  <div className={style.skillImageContainer}>                   
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    <br />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })
          }
        </div>

      </div>
    </section>
  );
};

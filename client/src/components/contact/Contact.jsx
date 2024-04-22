import React from "react";

import style from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


export const Contact = () => {
  return (
    <section id="contact" className={style.container}>
      <div className={style.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={style.links}>
     

      <li className={style.link}>
          <FaPhone className={style.contactIcons} size={25}/>
          <a href="tel:+9310583822"  >9310583822</a>
          
        </li>

        <li className={style.link}>
          <IoIosMail className={style.contactIcons} size={30} />
          <a href="mailto:deepak.jayswal.it@gmail.com"
              target="_blank"
              >
            deepak.jayswal.it@gmail.com
          </a>
        </li>

        <li className={style.link}>
            <FaLinkedin className={style.contactIcons} size={28}/>
          <a href="https://www.linkedin.com/in/deepak-jayswal-it/" 
              target="_blank"

          >https://www.linkedin.com/in/deepak-jayswal-it</a>
        </li>

        <li className={style.link}>
          <FaGithub className={style.contactIcons} size={28}/>
          <a href="https://github.com/deepakit5"
              target="_blank"
          
          >https://github.com/deepakit5</a>
        </li>
      </ul>
    </section>
  );
};

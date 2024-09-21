import React from 'react';
import { getImageUrl } from '../../utils';
import style from './Hero.module.css';
import { Link as LinkScroll } from 'react-scroll';

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import resume from '../../data/DEEPAK_JAYSWAL_ADGIPS_RESUME.pdf'

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Web Developer",
      "MERN Stack Developer",
      "Problem Solver",
      "Fronted Developer",

      "Backend Developer",
      "Coder",
      "UI-UX Designer",
    ],
    loop: Infinity,
    // Cursor
    // CursorStyle: '_',
    typeSpeed: 130,
    deleteSpeed: 80,
    delaySpeed: 500,
  });

  return (
    <section className={style.container} id='hero'>
      <div className={style.content}>
        <p className={style.welcome} >Welcome to my World !</p>
        <h3 className={style.title}>
          Hi, I'm
          <span> Deepak Jayswal</span>
        </h3>

        <div className={style.typewriter}>
          <p>I am </p>
          <span>{text}</span>
          <Cursor
            cursorColor='white'
            cursorStyle='_'
            cursorBlinking={false}
          />
          {/* <Cursor cursorColor='greenyellow'/>  */}

        </div>


        <p className={style.description} >
          Open for Intern/Full-Time role as a Software Developer Engineer or Full stack web developer.
        </p>

        <div >
          {/* <a href="mailto:deejaythegamer99@gmail.com" className={style.hireBtn}>Hire Me</a> */}
          <LinkScroll to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className={style.hireBtn}
            

          >Hire Me
          </LinkScroll>

          <a href={resume}
            className={style.resumeBtn}
            target="_blank"
            download="DEEPAK_JAYSWAL_ADGIPS_RESUME"
          >Resume
          </a>
        </div>

      </div>

      <img src={getImageUrl('hero/photo4.png')} alt="hero-image" className={style.heroImg} />
    </section>
  )
}

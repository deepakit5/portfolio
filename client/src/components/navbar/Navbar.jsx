import React from 'react';
import style from './Navbar.module.css';

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

// import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';

// two variables can't have same name that's why we use this technque
// import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={style.navbar} >

            <LinkScroll to="hero"
                className={style.title}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
            >portfolio
            </LinkScroll>


            <div className={style.menu} >

                <button className={style.menuBtn} onClick={() => setMenuOpen(!menuOpen)} alt='menu-button'>
                    {menuOpen ?

                        (<IoClose className={style.menuIcon} size={30} />) :
                        (<IoMenu className={style.menuIcon} size={30} />)
                    }
                </button>


                <ul className={`${style.menuItems}   ${menuOpen ? (style.menuItems) : (style.menuClose)}`} 
                    onClick={()=>setMenuOpen(false)}
                    >

                    <li className={style.menuItem} >
                        <LinkScroll to='about'
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            onClick={()=>setMenuOpen(false)}

                        >About
                        </LinkScroll>
                    </li>

                    {/* <li className={style.menuItem} >
                        <LinkScroll to="experience" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                        >Experience
                        </LinkScroll>
                    </li> */}

                    <li className={style.menuItem}>
                        <LinkScroll to="skills"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={()=>setMenuOpen(false)}

                        >Skills
                        </LinkScroll>
                    </li>

                    <li className={style.menuItem}>
                        <LinkScroll to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={()=>setMenuOpen(false)}

                        >Projects
                        </LinkScroll>
                    </li>

                    <li className={style.menuItem}>
                        <LinkScroll to="contactform"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            onClick={()=>setMenuOpen(false)}

                        >Contact
                        </LinkScroll>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

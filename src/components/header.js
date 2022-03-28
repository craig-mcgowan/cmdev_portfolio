import React from 'react';
import { Header, Nav, StyledLink } from '../styled/Header'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import {GoX} from '@react-icons/all-files/go/GoX'
import { Link } from 'gatsby';
import { useState } from 'react';
import * as headerStyles from './header.module.scss'
import { motion } from 'framer-motion';


function NavBar() {
  const [navClosed, setNavClosed] = useState(true)
  /*----------------------------------
     Style Objects
  ----------------------------------*/
  
  const dropMenu = navClosed? headerStyles.closed : headerStyles.open
  
  

  const linkStyle = {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
  }
  
  
  const Toggler = navClosed? GiHamburgerMenu : GoX
  
  const handleToggleMenu= () => {  
    setNavClosed(!navClosed)
    console.log(dropMenu);
  }

  /*----------------------------------
     Returned JSX
  ----------------------------------*/
  
  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.logoContainer}>
          <motion.span
            className={headerStyles.logo}
            animate={{ width: "15px" }}
            transition={{ duration: .5}}
            whileHover={{
              "width": "max-content",
              transition: { duration: 1 },
            }}
          >
            Craig
          </motion.span>
          <motion.span
            whileHover={{
              "width": "max-content",
              transition: { duration: 1 },
            }}
            className={headerStyles.logo}
            animate={{ width: "21px" }}
            transition={{ duration: .5 }}
          >
            McGowan
          </motion.span>
        </div>
        <Nav>
          <Link className= {headerStyles.navLinks} to="/">About</Link>
          <Link className= {headerStyles.navLinks} to="/projects/">Projects</Link>
          <Link className= {headerStyles.navLinks} to="/contact/">Contact</Link>
          <div className={headerStyles.hamburger} onClick={() => handleToggleMenu()}>
            <Toggler />
          </div>
        </Nav>
      </header>
      <nav className={dropMenu}>
        <Link className={headerStyles.mobile} to="/">
          About
        </Link>
        <Link className={headerStyles.mobile} to="/projects/">
          Projects
        </Link>
        <Link className={headerStyles.mobile} to="/contact/">
          Contact
        </Link>
      </nav>
    </>
  );
  
}

export default NavBar;


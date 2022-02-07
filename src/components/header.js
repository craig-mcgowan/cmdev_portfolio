import React from 'react';
import { Header, Nav, StyledLink } from '../styled/Header'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import {GoX} from '@react-icons/all-files/go/GoX'
import { Link } from 'gatsby';
import { useState } from 'react';
import * as headerStyles from './header.module.scss'


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

  return (
    <>
      <header className={headerStyles.header}>
        <h1>Craig McGowan</h1>
        <Nav>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/projects/">Projects</StyledLink>
          <StyledLink to="/contact/">Contact</StyledLink>
          <div onClick={() => handleToggleMenu()}>
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


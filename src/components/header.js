import React from 'react';
import { Header, Nav, StyledLink } from '../styled/Header'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import {GoX} from '@react-icons/all-files/go/GoX'
import { Link } from 'gatsby';
import { useState } from 'react';


function NavBar() {
  /*----------------------------------
     Style Objects
  ----------------------------------*/
  
  const navClosed = {
    height: "0px"
  }
  
  const navOpen = {
    height: 'min-content',
    position: 'relative',
    top: '4rem'
  }

  const linkStyle = {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
  }

  
  
  
  const [navStatus, setNavStatus] = useState(
    {
      closed: true,
      style: navClosed,
      navIcon: GiHamburgerMenu
    })
  
  const Toggler = navStatus.navIcon
  
  const handleToggleMenu= () => {  
    setNavStatus(
      navStatus.closed ?
        {
          closed: false,
          style: navOpen,
          navIcon: GoX,
        } :
        {
          closed: true,
          style: navClosed,
          navIcon: GiHamburgerMenu
        }  
    )
  }
    
  

  return (
    <>
      <Header>
        <h1>Craig McGowan</h1>
        <Nav>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/projects/">Projects</StyledLink>
          <StyledLink to="/contact/">Contact</StyledLink>
          <div onClick={()=>handleToggleMenu()}><Toggler/></div>
        </Nav>
      </Header>
      <nav className="drop-menu" style={navStatus.style}>
        <Link style={linkStyle} to="/">
          About
        </Link>
        <Link style={linkStyle} to="/projects/">
          Projects
        </Link>
        <Link style={linkStyle} to="/contact/">
          Contact
        </Link>
      </nav>
    </>
  );
  
}

export default NavBar;


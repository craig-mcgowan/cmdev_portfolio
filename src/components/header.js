import React from 'react';
import { Header, Nav, StyledLink } from '../styled/Header'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
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


  
  const [navStatus, setNavStatus] = useState(navClosed)
  
  const handleToggleMenu= () => {
    setNavStatus(
      navStatus.height === "0px" ? navOpen : navClosed
    )
    console.log(navStatus)
  }

  return (
    <>
      <Header>
        <h1>Craig McGowan</h1>
        <Nav>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/projects/">Projects</StyledLink>
          <StyledLink to="/contact/">Contact</StyledLink>
          <GiHamburgerMenu onClick={() => handleToggleMenu()} />
        </Nav>
      </Header>
      <nav className="drop-menu" style={navStatus}>
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


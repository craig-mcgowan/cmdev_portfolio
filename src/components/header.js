import React from 'react';
import { Header, Nav, StyledLink } from '../styled/Header';


function NavBar() {
  return (
    <Header>
      <h1>Craig McGowan</h1>
      <Nav>
          <StyledLink to='/about/' >About</StyledLink>
          <StyledLink to='/projects/'>Projects</StyledLink>
          <StyledLink to='/contact/'>Contact</StyledLink>

      </Nav>
    </Header>
  );
  
}

export default NavBar;


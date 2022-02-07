import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: purple;
  color: white;
  box-sizing: border-box;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: max-content;
  align-items: center; 
  margin-right: 1rem; 
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  display: none;
  :hover {
    color: green;
  }
  @media only screen and (min-width:600px) {
    display: initial
  }
`

export const Hamburger = styled.div`
  width: min-content;

`
import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #000;
  color: white;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 25em;
  
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  :hover {
    color: green;
  }


`
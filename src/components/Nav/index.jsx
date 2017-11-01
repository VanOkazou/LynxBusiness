import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 1;

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 0 12px;

      a {
        color: ${({ theme }) => theme.color.light};
        transition: color 0.2s ease;

        &.active {
          color: ${({ theme }) => theme.color.primary};
        }

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

class Nav extends React.Component {
  render () {
    return (
      <StyledNav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/references" activeClassName="active">References</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </StyledNav>
    )
  }
}

export default Nav;

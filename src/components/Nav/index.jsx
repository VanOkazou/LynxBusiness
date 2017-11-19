import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../utils/media';

export class Navigation extends React.Component {
  render () {
    return (
      <nav {...this.props}>
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
            <NavLink to="/works" activeClassName="active">Works</NavLink>
          </li>
          <li>
            <NavLink to="/references" activeClassName="active">References</NavLink>
          </li>
          <li>
            <NavLink to="/press" activeClassName="active">Press</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

const Nav = styled(Navigation)`
  width: 100%;

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 0 12px;
      ${media.tablet`
        margin: 7px;
      `}

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

export default Nav;

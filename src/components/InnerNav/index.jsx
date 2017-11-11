import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../utils/media';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;

  ${({ fixed }) => fixed && css`
    position: fixed;
    bottom: 40px;
    z-index: 20;

    ${media.tablet`
      bottom: 20px;
    `}
  `}

  ul {
    display: flex;
    justify-content: center;

    li {
      a {
        color: ${({ theme }) => theme.color.light};
        transition: color 0.2s ease;
        display: block;
        padding: 7px 10px 0;
        border-top: 1px solid ${({ theme }) => theme.color.light};

        &.active {
          color: ${({ theme }) => theme.color.primary};
          border-color: ${({ theme }) => theme.color.primary};
        }

        &:hover:not(.active) {
          color: #fff;
          border-color: #fff;
        }
      }
    }
  }
`;

class InnerNav extends React.Component {
  render () {
    const  { children } = this.props;
    return (
      <StyledNav {...this.props}>
        <ul>
          {children}
        </ul>
      </StyledNav>
    )
  }
}

class Item extends React.Component {
  render () {
    const  { children } = this.props;
    return (
      <li>
        <NavLink to={this.props.to}>
          {children}
        </NavLink>
      </li>
    )
  }
}

export { Item };
export default InnerNav;

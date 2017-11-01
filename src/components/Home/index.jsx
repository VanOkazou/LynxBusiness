import React, { Component } from 'react';
import styled from 'styled-components';
import Screen from '../Screen';
import logo from '../../assets/img/logo.svg'

const HomeScreen = styled(Screen)`
  img {
    height: 400px;
  }

  h1 {
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 4px;

    span {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

class Home extends Component {
  componentDidMount = () => {
    window.addEventListener('mousewheel', this.props.handleMouseWheel);
  }

  render() {
    return (
      <HomeScreen centered>
        <img src={logo} alt="Lynx Business"/>
        <h1>Just a <span>digital</span> agency</h1>
      </HomeScreen>
    )
  }
}

export default Home;
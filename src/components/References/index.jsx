import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import { companies } from './companies';

const ReferencesScreen = styled(Screen)`
  .companies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    li {
      margin: 15px 25px;
      display: flex;
      align-items: center;

      img {
        max-width: 100px;
        max-height: 50px;
      }
    }
  }
`;

class References extends Component {
  componentDidMount() {
    window.removeEventListener("mousewheel", this.props.handleMouseWheel);
  }

  componentWillUnmount() {
    window.addEventListener("mousewheel", this.props.handleMouseWheel);
  }

  render() {
    return (
      <ReferencesScreen centered>
        <BigTitle>They <span>Trust</span> us.</BigTitle>
        <ul className="companies">
          {companies.map(c => (
            <li>
              <img src={c.logo} alt={c.name} key={c.name} />
            </li>
          ))}
        </ul>
      </ReferencesScreen>
    )
  }
}

export default References;

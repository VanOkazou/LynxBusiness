import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import companies from './companies';
import { media } from '../../utils/media';

const Company = styled.li`
  margin: 15px 25px;
  display: flex;
  align-items: center;

  img {
    max-width: 100px;
    max-height: 50px;
  }
`

const Companies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 55px;;
`;

const ReferencesScreen = styled(Screen)`
  background: transparent;
`;

class References extends Component {
  componentDidMount() {
    // window.removeEventListener("mousewheel", this.props.handleMouseWheel);
  }

  componentWillUnmount() {
    // window.addEventListener("mousewheel", this.props.handleMouseWheel);
  }

  render() {
    return (
      <ReferencesScreen>
        <BigTitle>They <span>Trust</span> us.</BigTitle>
        <Companies>
          {companies.map(c => (
            <Company key={c.name}>
              <img src={c.logo} alt={c.name} key={c.name} />
            </Company>
          ))}
        </Companies>
      </ReferencesScreen>
    )
  }
}

export default References;

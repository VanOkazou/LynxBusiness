import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import Breadcrumb from './Breadcrumb';

const AboutScreen = styled(Screen)`
`;

class About extends Component {
  render() {
    return (
      <AboutScreen centered>
        <BigTitle><span>Who</span> we are.</BigTitle>
        <Breadcrumb />
      </AboutScreen>
    )
  }
}

export default About;

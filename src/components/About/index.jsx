import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import InnerNav, { Item } from '../InnerNav';

const AboutScreen = styled(Screen)`
`;

class About extends Component {
  render() {
    return (
      <AboutScreen centered>
        <BigTitle><span>Who</span> we are.</BigTitle>
        <InnerNav>
          <Item to="/about/our-company">Our company</Item>
          <Item to="/about/our-team">Our team</Item>
          <Item to="/about/some-figures">Some figures</Item>
        </InnerNav>
      </AboutScreen>
    )
  }
}

export default About;

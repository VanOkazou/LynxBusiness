import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { SmallTitle } from '../Screen';

const AboutScreen = styled(Screen)`
`;

class Company extends Component {
  render() {
    return (
      <AboutScreen centered>
        <SmallTitle>Our <span>company.</span></SmallTitle>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor nisl, sodales in dapibus eu, scelerisque sed mauris. Integer eu molestie dolor, eget elementum diam. Mauris vel risus sit amet lectus eleifend euismod ac non quam. Vestibulum sit amet libero venenatis, posuere erat pellentesque, sagittis eros. Vestibulum ultrices eros ac sapien accumsan, a imperdiet mauris consectetur. Integer pellentesque nisl vel ante ullamcorper</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor nisl, sodales in dapibus eu, scelerisque sed mauris. Integer eu molestie dolor, eget elementum diam. Mauris vel risus sit amet lectus eleifend euismod ac non quam. Vestibulum sit amet libero venenatis, posuere erat pellentesque, sagittis eros. Vestibulum ultrices eros ac sapien accumsan, a imperdiet mauris consectetur. Integer pellentesque nisl vel ante ullamcorper</p>
      </AboutScreen>
    )
  }
}

export default Company;

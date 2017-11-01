import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import InnerNav, { Item } from '../InnerNav';

const SkillsScreen = styled(Screen)`
`;

class Skills extends Component {
  render() {
    return (
      <SkillsScreen centered>
        <BigTitle><span>What</span> we do.</BigTitle>
        <InnerNav>
          <Item to="/skills/develpment">Development</Item>
          <Item to="/skills/design">Design</Item>
          <Item to="/skills/security">Security</Item>
        </InnerNav>
      </SkillsScreen>
    )
  }
}

export default Skills;

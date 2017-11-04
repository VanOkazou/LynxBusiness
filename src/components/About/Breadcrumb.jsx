import React from 'react';
import InnerNav, { Item } from '../InnerNav';

function Breadcrumb(props) {
  return (
    <InnerNav {...props}>
      <Item to="/about/our-company">Our company</Item>
      <Item to="/about/our-team">Our team</Item>
      <Item to="/about/some-figures">Some figures</Item>
    </InnerNav>
  );
}

export default Breadcrumb;

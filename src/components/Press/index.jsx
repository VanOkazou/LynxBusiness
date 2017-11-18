import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import articles from './press';
import quotedown from '../../assets/img/quote-down.png';
import quoteup from '../../assets/img/quote-up.png';
import { media } from '../../utils/media';

const Article = styled.div`
  text-align: center;
  position: relative;
  display: flex;

  p {
    flex: 1;
    padding: 0 25px;
    font-size: 2rem;
    ${media.tablet`
      font-size: 1.6rem;
      width: 30px;
    `}
  }

  &::before,
  &::after {
    content: '';
    width: 50px;
    display: block;
    background-size: 100% auto;
    background-repeat: no-repeat;
    ${media.tablet`
      width: 30px;
    `}
  }

  &::before {
    background-image: url(${quoteup});
    background-position: 0 0;
  }

  &::after {
    background-image: url(${quotedown});
    background-position: 0 100%;
  }
`;

const LogoPress = styled.img`
  height: 40px;
  display: block;
  margin: 0 auto 25px;
`;
const SinglePress = styled.li`
  margin-top: 45px;
`;
const Presses = styled.ul``;

const PressScreen = styled(Screen)`
  background: transparent;
`;

class Press extends Component {
  componentDidMount() {
    // window.removeEventListener("mousewheel", this.props.handleMouseWheel);
  }

  componentWillUnmount() {
    // window.addEventListener("mousewheel", this.props.handleMouseWheel);
  }

  render() {
    return (
      <PressScreen>
        <BigTitle>They <span>talk about us</span>.</BigTitle>
        <Presses>
          {articles.map(a => (
            <SinglePress key={a.press}>
              <LogoPress src={a.logo} alt={a.press} />
              <Article>
                <p>{a.content}</p>
              </Article>
            </SinglePress>
          ))}
        </Presses>
      </PressScreen>
    )
  }
}

export default Press;

import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import companies from './companies';
import articles from './press';
import quotedown from '../../assets/img/quote-down.png';
import quoteup from '../../assets/img/quote-up.png';
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
`

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
const Press = styled.li`
  margin-top: 45px;
`;
const Presses = styled.ul``;

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

        <BigTitle>They <span>talk about us</span>.</BigTitle>
        <Presses>
          {articles.map(a => (
            <Press key={a.press}>
              <LogoPress src={a.logo} alt={a.press} />
              <Article>
                <p>{a.content}</p>
              </Article>
            </Press>
          ))}
        </Presses>
      </ReferencesScreen>
    )
  }
}

export default References;

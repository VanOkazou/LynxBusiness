import React from 'react';
import styled, { css } from 'styled-components';
import bgDark from '../../assets/img/bgDark.png';
import { media } from '../../utils/media';

const ScreenWrapper = ({ className, children }) => (
  <div className={className}>
    <div>
      {children}
    </div>
  </div>
)
const Screen = styled(ScreenWrapper)`
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  max-height 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  position: relative;
  font-size: 1.4rem;
  line-height: 1.4;
  margin: auto;

  & > div {
    margin: auto;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  ${({ centered }) => centered && css`
    justify-content: center;
    align-items: center;

    ${media.tablet`
      justify-content: flex-start;
    `}
  `}

  ${({ justifyCenter }) => justifyCenter && css`
    justify-content: center;
  `}

  ${({ alignCenter }) => alignCenter && css`
    align-items: center;
  `}
`;

const DarkScreen = Screen.extend`
  background-image: url(${bgDark});
`;

const Title = styled.h1`
  color: #888;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const SmallTitle = Title.extend`
  font-size: 5rem;
  margin: 15px 0 40px;
  ${media.tablet`
    font-size: 3rem;
    margin: 15px 0 20px;
  `}
`;

const BigTitle = Title.extend`
  font-size: 10rem;
  margin: 0 0 25px;

  ${media.tablet`
    font-size: 5rem;
  `}
`;

export { DarkScreen, SmallTitle, BigTitle };
export default Screen;

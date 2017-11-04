import styled, { css } from 'styled-components';
import bgDark from '../../assets/img/bgDark.png';

const Screen = styled.div`
  width: 100%;
  max-width: 980px;
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

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  ${({ centered }) => centered && css`
    justify-content: center;
    align-items: center;
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

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const SmallTitle = Title.extend`
  font-size: 5rem;
  margin: 15px 0 40px;
`;

const BigTitle = Title.extend`
  font-size: 10rem;
  margin: 0 0 25px;
`;

export { DarkScreen, SmallTitle, BigTitle };
export default Screen;

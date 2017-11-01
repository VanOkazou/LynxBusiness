import styled, { css } from 'styled-components';
import bgDark from '../../assets/img/bgDark.png';

const Screen = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

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
  font-size: 6rem;
  margin: 45px 0 55px;
`;

const BigTitle = Title.extend`
  font-size: 10rem;
  margin: 0 0 25px;
`;

export { DarkScreen, SmallTitle, BigTitle };
export default Screen;

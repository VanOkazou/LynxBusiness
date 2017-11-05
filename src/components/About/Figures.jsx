import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { SmallTitle } from '../Screen';

const FiguresScreen = styled(Screen)`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;

    li {
      margin: 15px 35px;
      text-align: center;
      line-height: 1.1;

      .label {
        font-size: 2rem;
        font-weight: 300;
      }

      .figure {
        font-size: 7rem;
        color: ${({ theme }) => theme.color.primary};
        font-family: ${({ theme }) => theme.font.secondary};
        font-weight: 700;
      }

      .supp {
        font-size: 1.6rem;
        font-weight: 300;
        font-style: italic;
      }
    }
  }
`;

class Figures extends Component {
  render() {
    return (
      <FiguresScreen centered>
        <ul>
          <li>
            <div className="label">Founded in</div>
            <div className="figure">2016</div>
          </li>
          <li>
            <div className="label">More than</div>
            <div className="figure">50</div>
            <div className="supp">projects</div>
          </li>
        </ul>
      </FiguresScreen>
    )
  }
}

export default Figures;

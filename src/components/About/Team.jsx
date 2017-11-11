import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { SmallTitle } from '../Screen';
import tristanPic from '../../assets/img/tristang.jpg';
import vincentPic from '../../assets/img/vincentt.jpg';

const TeamScreen = styled(Screen)`
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      padding: 10px;
      background: #eaeaea;
      border-radius: 2px;
      flex: 1;
      max-width: 250px;
      color: #555;
      margin: 15px;

      .avatar {
        width: 100%;
        padding-top: 115%;
        background-size: cover;
        background-position: center;
        margin-bottom: 15px;
        border-radius: 2px;
      }

      .name {
        text-transform: uppercase;
        font-size: 2rem;
        font-family: ${({ theme }) => theme.font.secondary};
        margin-bottom: 0;
        font-weight: 300;
        color: #999;

        strong {
          font-weight: 700;
          color: ${({ theme }) => theme.color.text};
        }
      }

      .job {
        color: #999;
      }

      .social {
        display: flex;
        justify-content: flex-end;

        a {
          font-size: 1.8rem;
          &:not(:last-child) {
            margin-right: 7px;
          }
          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
`;

class Team extends Component {
  render() {
    return (
      <TeamScreen centered>
        <SmallTitle>Our <span>team.</span></SmallTitle>
        <ul>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url(${tristanPic})` }}
            ></div>
            <p className="name"><strong>Tristan</strong> Granier</p>
            <p className="job">Lead Développeur, Security tools developer</p>
            <div className="social">
              <a href="mailto:#" title="mail" className="mail">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/tristangranierlynx/" title="linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url(${vincentPic})` }}
            ></div>
            <p className="name"><strong>Vincent</strong> Tribouillois</p>
            <p className="job">Gérant chez Lynxbusiness - Sepalevy - Co-fondateur Lynxframework</p>
            <div className="social">
              <a href="mailto:#" title="mail" className="mail">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/tristangranierlynx/" title="linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </li>
        </ul>
      </TeamScreen>
    )
  }
}

export default Team;

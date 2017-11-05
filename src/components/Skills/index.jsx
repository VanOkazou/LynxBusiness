import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';
import InnerNav, { Item } from '../InnerNav';
import devIcon from '../../assets/img/ico_dev.png';
import mobileIcon from '../../assets/img/ico_mobile.png';
import designIcon from '../../assets/img/ico_design.png';
import securIcon from '../../assets/img/ico_secur.png';

const SkillsScreen = styled(Screen)`
  .skillsWrapper {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 0;
    top: 140px;

    .singleSkill {
      width: calc(100% / 4);
      padding: 60px 20px;
      margin: 30px 0;
      position: relative;

      &:not(:nth-child(4n)) {
        border-right: 1px solid ${({ theme }) => theme.color.light};
        &:nth-child(odd) {
          margin-top: 70px;
        }
        &:nth-child(even) {
          margin-bottom: 70px;
        }
      }

      .icon {
        text-align: center;
        margin-bottom: 25px;

        img {
          height: 75px;
        }
      }

      .name {
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 25px;
      }

      .details {
        text-align: center;
      }

      .technos {
        margin-top: 35px;

        ul {
          li {
            margin-bottom: 5px;
            &::before {
              font-family: 'FontAwesome';
              content: "\f00c";
              margin-right: 7px;
            }
          }
        }
      }
    }
  }
`;

class Skills extends Component {
  render() {
    return (
      <SkillsScreen alignCenter>
        <BigTitle><span>What</span> we do.</BigTitle>
        <div className="skillsWrapper">
          <div className="singleSkill">
            <div className="icon">
              <img src={devIcon} alt="Dev"/>
            </div>
            <div className="name">Website Development</div>
            <div className="details">We develop responsive websites with modern frameworks.</div>
            <div className="technos">
              <p>WE USE :</p>
              <ul>
                <li>React JS</li>
                <li>Angular JS</li>
                <li>Laravel</li>
                <li>Symfony</li>
                <li>Wordpress</li>
                <li>Prestashop</li>
              </ul>
            </div>
          </div>
          <div className="singleSkill">
            <div className="icon">
              <img src={mobileIcon} alt="App"/>
            </div>
            <div className="name">Mobile Applications</div>
            <div className="details">We make applications for multiple devices.</div>
            <div className="technos">
              <p>WE USE :</p>
              <ul>
                <li>React Native</li>
                <li>Ionic</li>
                <li>Cordova</li>
                <li>Swift</li>
              </ul>
            </div>
          </div>
          <div className="singleSkill">
            <div className="icon">
              <img src={designIcon} alt="Design"/>
            </div>
            <div className="name">Webdesign | Print</div>
            <div className="details">We graphic layout for your websites or all kind of documents.</div>
            <div className="technos">
              <p>WE USE :</p>
              <ul>
                <li>Sketch</li>
                <li>Marvel</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Indesign</li>
              </ul>
            </div>
          </div>
          <div className="singleSkill">
            <div className="icon">
              <img src={securIcon} alt="Secur"/>
            </div>
            <div className="name">Web Security</div>
            <div className="details">We can protect your websites from external attacks.</div>
          </div>
        </div>
      </SkillsScreen>
    )
  }
}

export default Skills;

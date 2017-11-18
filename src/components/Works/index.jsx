import React, { Component } from "react";
import axios from 'axios';
import styled from "styled-components";
import Screen, { BigTitle } from "../Screen";
import { media } from '../../utils/media';

const Repos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Repo = styled.a`
  width: 50%;
  padding: 15px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  ${media.tablet`
    width: 100%;
  `}

  &:hover {
    opacity: 1;
  }

  .repoContent {
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .name {
      font-weight: bold;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.color.primary};
    }

    .infos {
      margin-top: auto;
      display: flex;
      justify-content: space-between;

      .left {
        .lang {
          color: ${({ theme }) => theme.color.primary};
        }
      }

      .right {
        display: flex;

        .info {
          margin-left: 20px;

          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

const WorksScreen = styled(Screen)`
  background: transparent;
`;

class Works extends Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/graniet/repos')
      .then((res) => {
        this.setState({ repos: res.data });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    console.log(this.state.repos);
    return (
      <WorksScreen>
        <BigTitle>
          Take a look at our <span>Github Repos</span>.
        </BigTitle>
        <Repos>
          {this.state.repos.map(repo => (
            <Repo
              key={repo.id}
              title={repo.name}
              target="_blank"
              rel="noopener noreferrer"
              href={repo.html_url}
            >
              <div className="repoContent">
                <p className="name">{repo.name}</p>
                <p className="description">{repo.description}</p>
                <div className="infos">
                  <div className="left">
                    <span className="lang">{repo.language}</span>
                  </div>
                  <div className="right">
                    <div className="info">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="info">
                      <i className="fa fa-code-fork" aria-hidden="true"></i>
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Repo>
          ))}
        </Repos>
      </WorksScreen>
    );
  }
}

export default Works;

import React, { Component } from 'react';
import styled from 'styled-components';
import logotype from '../../assets/img/logotype.svg'

const SyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 30px 20px;

  .logotype {
    img {
      width: 120px;
    }
  }

  .sharelinks {
    display: flex;
    align-items: flex-end;

    &>* {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }

    a {
      .fa {
        font-size: 2rem;
        transition: all 0.2s ease;
      }

      &:hover {
        .fa {
          color: #fff;
        }
      }
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <SyledFooter>
        <div className="logotype">
          <img src={logotype} alt="Lynx Business"/>
        </div>
        <div className="sharelinks">
          <p>Follow us</p>
          <a href="#" title="LinkedIn" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="#" title="GitHub" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </SyledFooter>
    )
  }
}

export default Footer;

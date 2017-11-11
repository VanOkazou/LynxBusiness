import React, { Component } from 'react';
import styled from 'styled-components';
import logotype from '../../assets/img/logotype.svg';
import logotypesmall from '../../assets/img/logotype_inline.svg';
import { media } from '../../utils/media';

const SyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 30px 20px;
  ${media.tablet`
    padding: 0 15px 10px;
  `}

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

const Img = styled.img`
  width: 120px;
  display: ${({ mobile }) => mobile ? 'none' : 'block'};
  ${media.tablet`
    display: ${({ desktop }) => desktop ? 'none' : 'block'};
  `}
`

class Footer extends Component {
  render() {
    return (
      <SyledFooter className={this.props.className}>
        <div className="logotype">
          <Img src={logotype} alt="Lynx Business" desktop />
          <Img src={logotypesmall} alt="Lynx Business" mobile />
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

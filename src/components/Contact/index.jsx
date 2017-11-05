import React, { Component } from 'react';
import styled from 'styled-components';
import Screen, { BigTitle } from '../Screen';

const ContactScreen = styled(Screen)`
  form {
    display: flex;
    flex-direction: column;;
    width: 100%;
    max-width: 800px;

    input, textarea {
      border: 1px solid ${({ theme }) => theme.color.light};
      background: transparent;
      width: 100%;
      margin-bottom: 25px;
      min-height: 40px;
      padding: 10px;
      color: ${({ theme }) => theme.color.light};
      transition: background 0.2s ease;

      &:focus {
        color: ${({ theme }) => theme.color.text};
        outline: none;
        background: ${({ theme }) => theme.color.light};
      }
    }

    button {
      background: ${({ theme }) => theme.color.light};
      height: 40px;
      border: none;
      text-transform: uppercase

      &:focus {
        outline: none;
      }

      &:hover {
        background: ${({ theme }) => theme.color.primary};
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

class Contact extends Component {
  render() {
    return (
      <ContactScreen centered>
        <BigTitle>Get in <span>touch</span>.</BigTitle>
        <form action="mailto:p.vannareth@gmail.com" method="post" enctype="text/plain">
          <input type="text" placeholder="Your name" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </ContactScreen>
    )
  }
}

export default Contact;

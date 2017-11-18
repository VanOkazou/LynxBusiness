import React, { Component } from "react";
import styled from "styled-components";
import nodemailer from "nodemailer";
import Screen, { BigTitle } from "../Screen";

const ContactScreen = styled(Screen)`
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;

    input,
    textarea {
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
  handleSubmit = e => {
    e.preventDefault();
    nodemailer.createTestAccount((err, account) => {
      console.log('ACCOUNT', account);
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.user, // generated ethereal user
          pass: account.pass // generated ethereal password
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
        to: "p.vannareth@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      });
    });
  };

  render() {
    return (
      <ContactScreen centered>
        <BigTitle>
          Get in <span>touch</span>.
        </BigTitle>
        <form method="post" onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Your name" name="name" />
          <textarea name="msg" id="" cols="30" rows="10" />
          <button type="submit">Send</button>
        </form>
      </ContactScreen>
    );
  }
}

export default Contact;

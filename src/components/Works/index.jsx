import React, { Component } from "react";
import styled from "styled-components";
import nodemailer from "nodemailer";
import Screen, { BigTitle } from "../Screen";

const WorksScreen = styled(Screen)`

`;

class Works extends Component {
  render() {
    return (
      <WorksScreen>
        <BigTitle>
          What we <span>can do</span>.
        </BigTitle>
      </WorksScreen>
    );
  }
}

export default Works;

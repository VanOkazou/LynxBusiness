import React, { Component } from "react";
import styled from "styled-components";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Screen, { BigTitle } from "../Screen";
import { media } from '../../utils/media';

const Tel = styled.p`
  text-align: center;
  font-size: 5rem;
  font-size: 700;
  ${media.tablet`
    font-size: 2.5rem;
  `}
`;

const Mail = styled.a`
  text-align: center;
  font-size: 3rem;
  display: block;
  margin-bottom: 75px;
  ${media.tablet`
    font-size: 2.5rem;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const Address = styled.p`
  margin-top: 35px;
  text-align: center;
  font-size: 3rem;
  font-size: 700;
  ${media.tablet`
    font-size: 2rem;
  `}
`;

const ContactScreen = styled(Screen)``;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 49.06863, lng: 2.081229 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 49.06863, lng: 2.081229 }} />}
  </GoogleMap>
))

class Contact extends Component {
  render() {
    return (
      <ContactScreen>
        <BigTitle>
          Get in <span>touch</span>.
        </BigTitle>
        <Tel>+33 6 95 36 33 23</Tel>
        <Mail title="mail" href="mailto:contact@lynx-business.com">contact@lynx-business.com</Mail>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Address>
          10 rue Jean Sebastien Bach<br />
          95520 Osny
        </Address>
      </ContactScreen>
    );
  }
}

export default Contact;

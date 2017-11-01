import React, { Component } from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  transform: scale(1.7);

  svg {
    height: 331px;
    width: 199px;

    .st0{stroke:#999999;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:10;}
    .st1{stroke:#999999;stroke-width:0.5;stroke-linejoin:round;stroke-miterlimit:10;}
    .st2{stroke:#999999;stroke-width:0.5;stroke-miterlimit:10;}
    .st3{fill:#fff;}
    .st4{fill:#fff;}

    #grad1 {
      transform: rotate(45deg);
    }

    path {
      fill: transparent;
    }

    polygon {
      fill: #fff;
      transition: all 0.5s;

      &:hover {
        fill: #ececec;
      }

      &.eyeLeft {
        fill: url(#SVGID_1_);
      }

      &.eyeRight {
        fill: url(#SVGID_2_);
      }

      &.eyeLeft, &.eyeRight {
        &.shinning {
          box-shadow: 0 0 10px #008ee1;
        }
      }
    }
  }
`;

class LogoLynx extends Component {
  lightOnEyes = () => {
    this.eyeRight.classList.add('shinning');
    this.eyeLeft.classList.add('shinning');
  }
  lightOffEyes = () => {
    this.eyeRight.classList.remove('shinning');
    this.eyeLeft.classList.remove('shinning');
  }

  render() {
    return (
      <Logo>
        <svg version="1.1" id="Calque_3" x="0px" y="0px">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'rgb(253,253,253)', stop0pacity: 1}} />
              <stop offset="50%" style={{stopColor: 'rgb(238,238,238)', stop0pacity: 1}} />
              <stop offset="55%" style={{stopColor: 'rgb(245,245,245)', stop0pacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgb(254,254,254)', stop0pacity: 1}} />
            </linearGradient>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="54.1195" y1="169.8122" x2="79.6849" y2="169.8122">
            	<stop  offset="0" style={{stopColor:'#212BB2'}}/>
            	<stop  offset="0.4479" style={{stopColor:'#105ECA'}}/>
            	<stop  offset="0.8066" style={{stopColor:'#0481DB'}}/>
            	<stop  offset="1" style={{stopColor:'#008EE1'}}/>
            </linearGradient>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="61.2634" y1="169.8122" x2="86.8288" y2="169.8122" gradientTransform="matrix(-1 0 0 1 205.3856 0)">
            	<stop  offset="0" style={{stopColor:'#212BB2'}}/>
            	<stop  offset="0.4479" style={{stopColor:'#105ECA'}}/>
            	<stop  offset="0.8066" style={{stopColor:'#0481DB'}}/>
            	<stop  offset="1" style={{stopColor:'#008EE1'}}/>
            </linearGradient>
          </defs>
          <g id="Calque_4">
          	<path className="st0" d="M99.1,242.8c-0.8,0.4-11.1,0-11.1,0l-3.2,1.5"/>
          	<path className="st0" d="M99.1,242.8c0.8,0.4,11.1,0,11.1,0l3.2,1.5"/>
          </g>
          <polygon className="st1" points="99.1,85.2 78.2,90.2 83.5,137.5 99.1,127.8 "/>
          <polygon className="st1" points="62.2,118.6 78.2,90.2 83.5,137.5 72.4,162.6 "/>
          <polygon className="st1" points="80.7,177.3 99.1,169.1 99.1,127.8 83.5,137.5 72.4,162.6 "/>
          <polygon className="st1" points="62.2,118.6 24,143.6 53,162.6 72.4,162.6 "/>
          <polygon className="st1" points="62.2,118.6 24,143.6 16,122.1 17.7,49.3 35.3,57.1 "/>
          <polygon className="st1" points="62.2,118.6 78.2,90.2 30.6,46.2 "/>
          <polygon className="st1" points="35.3,57.1 17.7,49.3 0,23.6 30.6,46.2 "/>
          <polygon className="st1" points="30.6,46.2 24,41.4 25.1,5.3 39.1,54.1 "/>
          <polygon className="st1" points="17.7,169.1 24,143.6 53,162.6 "/>
          <polygon className="st1" points="17.7,169.1 24,187.8 45,184.1 76.5,201.3 80.7,177.3 62.2,172.3 53,162.6 "/>
          <polygon className="st1" points="80.7,177.3 99.1,169.1 99.1,217.6 85.8,221.3 76.5,201.3 "/>
          <polygon className="st1" points="12.5,217.6 24,187.8 45,184.1 76.5,201.3 76.5,201.3 42.2,214.8 "/>
          <polygon className="st1" points="85.8,230.1 99.1,241.1 99.1,217.6 85.8,221.3 "/>
          <polygon className="st1" points="85.8,230.1 71.2,230.6 76.5,201.3 85.8,221.3 "/>
          <polygon className="st1" points="85.8,230.1 71.2,230.6 77,242.8 99.1,259.6 99.1,241.1 "/>
          <polygon className="st1" points="27.2,228.1 50.1,234.9 77,242.8 71.2,230.6 76.5,201.3 76.5,201.3 42.2,214.8 "/>
          <polygon className="st1" points="27.2,228.1 42.2,214.8 17.7,217.1 25.5,259.6 50.1,234.9 "/>
          <polygon className="st1" points="77,242.8 85.8,249.5 58.2,294.3 29.7,255.3 50.1,234.9 "/>
          <polygon className="st1" points="85.8,249.5 62.2,287.8 99.4,331.5 99.1,259.6 "/>
          <polygon className="st2" points="94.2,231.2 99.1,235.2 99.1,227.6 92,223.7 "/>
          <polygon className="st1" points="99.1,85.2 120,90.2 114.7,137.5 99.1,127.8 "/>
          <polygon className="st1" points="136,118.6 120,90.2 114.7,137.5 125.9,162.6 "/>
          <polygon className="st1" points="117.5,177.3 99.1,169.1 99.1,127.8 114.7,137.5 125.9,162.6 "/>
          <polygon className="st1" points="136,118.6 174.3,143.6 145.3,162.6 125.9,162.6 "/>
          <polygon className="st1" points="136,118.6 174.3,143.6 182.3,122.1 180.5,49.3 162.9,57.1 "/>
          <polygon className="st1" points="136,118.6 120,90.2 167.6,46.2 "/>
          <polygon className="st1" points="162.9,57.1 180.5,49.3 198.2,23.6 167.6,46.2 "/>
          <polygon className="st1" points="167.6,46.2 174.2,41.4 173.2,5.3 159.2,54.1 "/>
          <polygon className="st1" points="180.5,169.1 174.3,143.6 145.3,162.6 "/>
          <polygon className="st1" points="180.5,169.1 174.3,187.8 153.3,184.1 121.8,201.3 117.5,177.3 136.1,172.3 145.3,162.6 "/>
          <polygon className="st1" points="117.5,177.3 99.1,169.1 99.1,217.6 112.5,221.3 121.8,201.3 "/>
          <polygon className="st1" points="185.8,217.6 174.3,187.8 153.3,184.1 121.8,201.3 121.8,201.3 156,214.8 "/>
          <polygon className="st1" points="112.5,230.1 99.1,241.1 99.1,217.6 112.5,221.3 "/>
          <polygon className="st1" points="112.5,230.1 127,230.6 121.8,201.3 112.5,221.3 "/>
          <polygon className="st1" points="112.5,230.1 127,230.6 121.3,242.8 99.1,259.6 99.1,241.1 "/>
          <polygon className="st1" points="171,228.1 148.1,234.9 121.3,242.8 127,230.6 121.8,201.3 121.8,201.3 156,214.8 "/>
          <polygon className="st1" points="171,228.1 156,214.8 180.5,217.1 172.8,259.6 148.1,234.9 "/>
          <polygon className="st1" points="121.3,242.8 112.5,249.5 140,294.3 168.5,255.3 148.1,234.9 "/>
          <polygon className="st1" points="112.5,249.5 136,287.8 98.9,331.5 99.1,259.6 "/>
          <polygon className="st2" points="104,231.2 99.1,235.2 99.1,227.6 106.3,223.7 "/>
          <polygon
            ref={polygon => this.eyeLeft = polygon}
            onMouseEnter={() => this.lightOnEyes()}
            onMouseLeave={() => this.lightOffEyes()}
            className="eyeLeft" points="54.1,163.1 62.4,171.9 79.7,176.5 72.1,163.1 "
          />
          <polygon
            ref={polygon => this.eyeRight = polygon}
            onMouseEnter={() => this.lightOnEyes()}
            onMouseLeave={() => this.lightOffEyes()}
            className="eyeRight" points="144.1,163.1 135.8,171.9 118.6,176.5 126.2,163.1 "
          />
        </svg>
      </Logo>
    );
  }
}

export default LogoLynx;

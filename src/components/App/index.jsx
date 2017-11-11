import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import bgDark from "../../assets/img/bgDark.png";
import theme from "../../theme";
import normalize from "../../theme/normalize";
import Nav from "../Nav";
import Footer from "../Footer";
import Home from "../Home";
import { media } from '../../utils/media';

// ABOUT
import About from "../About";
import AboutBreadcrumb from '../About/Breadcrumb';
import Company from "../About/Company";
import Team from "../About/Team";
import Figures from "../About/Figures";


import Skills from "../Skills";
import References from "../References";
import Contact from "../Contact";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-image: url(${bgDark});
  position: relative;
  overflow: hidden;
  padding: ${({ innerPage }) => innerPage ? '100px 0 120px' : '120px 0'};
  ${media.tablet`
    padding: ${({ innerPage }) => innerPage ? '60px 0' : '80px 0 60px'};
  `}

  &::before, &::after {
    content: '';
    display: block;
    width: 1px;
    height: ${({ innerPage }) => innerPage ? '30px' : '60px'};
    background: ${({ theme }) => theme.color.light};
    position: absolute;
    left: 50%;
    transition: all 0.5s ease;

    ${media.tablet`
      height: ${({ innerPage }) => innerPage ? '15px' : '30px'};
    `}
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  .content {
    height: 100%;
    position: relative;
    z-index: 1;

    &>div {
      height: 100%;
    }
  }

  ${Nav} {
    position: fixed;
    left: 0;
    top: ${({ innerPage }) => innerPage ? '60px' : '90px'};
    z-index: 1;
    transition: all 0.5s ease;

    ${media.tablet`
      top: ${({ innerPage }) => innerPage ? '30px' : '45px'};
    `}
  }

  .screenWrapper {
    position: relative;
    height: 100%;
  }
`;

const StyledFooter = styled(Footer)`
  display: ${({ innerPage }) => innerPage ? 'none' : 'flex'};
`;

class App extends React.Component {
  state = {
    views: [
      "/",
      "/about",
      "/skills",
      "/references",
      "/contact",
    ],
    isScrolling: false
  };

  componentDidMount() {
    normalize();
    //window.addEventListener("mousewheel", this.handleMouseWheel);
  }

  handleMouseWheel = e => {
    if (this.state.isScrolling) return;

    this.setState({ isScrolling: true });
    const currentPath = this.props.location.pathname;
    const views = this.state.views;
    const currentIndex = views.indexOf(currentPath);

    if (e.deltaY < 0) {
      if (currentIndex === views.length - 1) {
        return;
      }
      this.props.history.push(views[currentIndex + 1]);
    } else {
      if (currentIndex === 0) {
        return;
      }
      this.props.history.push(views[currentIndex - 1]);
    }
    setTimeout(() => {
      this.setState({ isScrolling: false });
    }, 700);
  };

  render() {
    const { location } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Div innerPage={this.props.location.pathname.split('/').length > 2}>
          <Nav />
          <div className="content">
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fadeTranslate"
                timeout={500}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route path="/about/:page" render={() => {
                    console.log(this.props)
                    return (
                      <div className="screenWrapper">
                        {this.props.location.pathname === '/about/our-company' && <Company />}
                        {this.props.location.pathname === '/about/our-team' && <Team />}
                        {this.props.location.pathname === '/about/some-figures' && <Figures />}

                      </div>
                    )
                  }} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/references" component={References} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          {this.props.location.pathname.includes('about/') &&
            <AboutBreadcrumb fixed />
          }
          <StyledFooter innerPage={this.props.location.pathname.split('/').length > 2}/>
        </Div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);

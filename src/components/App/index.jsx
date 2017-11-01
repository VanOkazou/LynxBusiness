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
import About from "../About";
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
  padding: 130px 0 100px;

  &::before, &::after {
    content: '';
    display: block;
    width: 1px;
    height: 60px;
    background: ${({ theme }) => theme.color.light};
    position: absolute;
    left: 50%;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  .content {
    height: 100%;
    max-height 100%;
    overflow-y: auto;

    &>div {
      height: 100%;
    }
  }
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
    window.addEventListener("mousewheel", this.handleMouseWheel);

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
        <Div>
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
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/references" render={() => {
                    return (
                      <References handleMouseWheel={this.handleMouseWheel}/>
                    )
                  }} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </Div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);

import styled from 'styled-components';
import { GlobalStyle, Theme } from './Settings';
import { useEffect, useState } from 'react';
import { Cursor } from './Components';
import {
  Switch,
  useLocation,
  Route
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

import { Home } from './Home';
import { Projects } from './Projects';
import { Header, LoadingScreen } from './shared';
import { About } from './About';
// import { NotFound } from './NotFound'

const {
  colors: {
    primaryColor,
  }
} = Theme;

const AppStyled = styled.div`
    background-color: ${primaryColor};
`

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1200);
    return () => {
      setIsReady(false);
    }
  }, [])

  const isMobileTest = () => {
    const ua = navigator.userAgent;
    const test = /Android|Mobi/i.test(ua)
    setIsMobile(test);
  };

  const HandleMouseoverEffects = () => {
    useEffect(() => {
      window.addEventListener('resize', isMobileTest);

      document.querySelectorAll(".cursor_hover").forEach(el => {
        el.addEventListener("mouseover", () => setIsHovered(true));
        el.addEventListener("mouseout", () => setIsHovered(false));
      });
      isMobileTest();
      return () => {
        window.removeEventListener('resize', isMobileTest);

        document.querySelectorAll(".cursor_hover").forEach(el => {
          el.removeEventListener("mouseover", () => setIsHovered(true));
          el.removeEventListener("mouseout", () => setIsHovered(false));
        });
      };
    }, []);
  };

  const HandleLocomotiveScroll = () => {
    useEffect(() => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        lerp: 0.09,
        reloadOnContextChange: true,
        smooth: true
      });
      return () => {
        scroll.destroy();
      }
    }, []);
  }

  HandleMouseoverEffects();

  const routingProps = {
    HandleMouseoverEffects,
    HandleLocomotiveScroll
  }

  return (
    <AppStyled className="App">
      {
        isReady ? (
          <>
            <Header />
            <GlobalStyle />
            {
              isMobile ? (
                <Cursor isMobile={isMobile} />
              ) : (
                <Cursor isHovered={isHovered} />
              )
            }

            <AnimatePresence exitBeforeEnter >
              <Switch location={location} key={location.pathname}>
                <Route exact path='/projects' render={props => <Projects {...props} {...routingProps} />} />
                <Route exact path='/about' render={props => <About {...props} {...routingProps} />} />
                <Route exact path='/' render={props => <Home {...props} {...routingProps} />} />
                {/* <Route render={props => <NotFound {...props} {...routingProps} />} /> */}
              </Switch>
            </AnimatePresence>
          </>
        ) : (
          <LoadingScreen />
        )
      }
    </AppStyled>
  );
}

export default App;
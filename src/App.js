import styled from 'styled-components';
import { GlobalStyle, projects, Theme } from './Settings';
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
import Project from './Projects/Project';
import { NotFound } from './NotFound'

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
    setIsReady(true);
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

  let firefoxAgent = navigator.userAgent.indexOf("Firefox") > -1;

  const HandleLocomotiveScroll = () => {
    useEffect(() => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        lerp: 0.09,
        reloadOnContextChange: true,
        smooth: !firefoxAgent
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
    <AppStyled className="App smooth-scroll" data-scroll-container>
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
                <Route exact path='/projects'>
                  <Projects {...routingProps} title="Projekty | Przemek M. | FrontEnd Developer" />
                </Route>
                {projects.map((project) => (
                  <Route key={project.id} exact path={project.path}>
                    <Project {...routingProps} title={`${project.name} | Przemek M. | FrontEnd Developer`} />
                  </Route>
                ))}
                <Route exact path='/about'>
                  <About {...routingProps} title="O mnie | Przemek M. | FrontEnd Developer" />
                </Route>
                <Route exact path='/'>
                  <Home {...routingProps} title="Przemek M. | FrontEnd Developer" />
                </Route>
                <Route>
                  <NotFound {...routingProps} title="Przemek M. | FrontEnd Developer" />
                </Route>
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
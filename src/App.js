import styled from 'styled-components';
import { GlobalStyle } from './Settings/';
import { useEffect, useState } from 'react';
import { Cursor } from './Components/';
import {
  Switch,
  useLocation,
  useHistory,
  Route
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { Home } from './Home';
import Projects from './Projects/Projects';



const AppStyled = styled.div`
    background-color: white;
`
function App({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const location = useLocation();
  console.log(location);

  const isMobileTest = () => {
    const ua = navigator.userAgent;
    const test = /Android|Mobi/i.test(ua)
    setIsMobile(test);
  };

  useEffect(() => {
    window.addEventListener('resize', isMobileTest);

    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setIsHovered(true));
      el.addEventListener("mouseout", () => setIsHovered(false));
    });
    isMobileTest();
    return () => {
      window.removeEventListener('resize', isMobileTest);

      document.querySelectorAll("a").forEach(el => {
        el.removeEventListener("mouseover", () => setIsHovered(true));
        el.removeEventListener("mouseout", () => setIsHovered(false));
      });
    };
  }, []);


  return (
    <AppStyled className="App">
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
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AnimatePresence>

    </AppStyled>
  );
}

export default App;
import Header from './shared/Header';
import styled from 'styled-components';
import { GlobalStyle } from './Settings/';
import { useEffect, useState } from 'react';
import { Cursor } from './Components/';

const AppStyled = styled.div`
    background-color: white;
`

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', isMobileTest)

    return _ => {
      window.removeEventListener('resize', isMobileTest)

    }
  })


  useEffect(() => {
    // handleLinkHoverEvents();
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setIsHovered(true));
      el.addEventListener("mouseout", () => setIsHovered(false));
    });
    isMobileTest();
    return () => {
      document.querySelectorAll("a").forEach(el => {
        el.removeEventListener("mouseover", () => setIsHovered(true));
        el.removeEventListener("mouseout", () => setIsHovered(false));
      });
    };
  }, []);

  const isMobileTest = () => {
    const ua = navigator.userAgent;
    const test = /Android|Mobi/i.test(ua)
    setIsMobile(test);
  };

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
      {/* <Home></Home> */}
      <Header></Header>
    </AppStyled>
  );
}

export default App;
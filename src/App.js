import { Home } from './Home';
import styled from 'styled-components';
import { GlobalStyle } from './Settings/';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';
import { Cursor } from './Components/'

const AppStyled = styled.div`
    background-color: white;
`

function App() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    handleLinkHoverEvents();
    return () => { };
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setIsHovered(true));
      el.addEventListener("mouseout", () => setIsHovered(false));
    });
  };

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      lerp: 0.09,
      reloadOnContextChange: true,
      smooth: true
      // smartphone: {
      //   smooth: true
      // },
      // tablet: {
      //   smooth: true
      // }
    });
  }, [])

  return (
    <AppStyled className="App">
      <GlobalStyle />
      <Cursor isHovered={isHovered} />
      <Home></Home>
    </AppStyled>
  );
}

export default App;
import { Home } from './Home';
import styled from 'styled-components';
import { GlobalStyle } from './Settings/';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const AppStyled = styled.div`
    background-color: white;
`

function App() {
  useEffect(() => {
    console.log(document.querySelector('.App'));

    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      lerp: 0.09,
      reloadOnContextChange: true,
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });
  }, [])

  return (
    <AppStyled className="App">
      <GlobalStyle />
      <Home></Home>
    </AppStyled>
  );
}

export default App;
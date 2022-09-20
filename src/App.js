import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from "./components/SectionThree";


function App() {
  const ref = useRef()
  return (
    <div className="App">
      <Parallax pages={3} ref={ref} style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        <ParallaxLayer offset={0} speed={1}>
          <SectionOne />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          <SectionTwo />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={3}>
          <SectionThree />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;


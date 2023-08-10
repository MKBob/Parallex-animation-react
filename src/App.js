import "./App.css";
import { Parallax } from "react-parallax";
import Woman from "./images/woman.jpg";
import City from "./images/city.jpg";
import Fly from "./images/fly.jpg";

function App() {
  const data = [
    {
      stre: 300,
      bgI: Woman,
      text: "Normal Parallax",
    },  
    {
      stre: 300,
      bgI: City,
      text: "Blur",
      mac: { min: -5, max: 15 },
    },
    {
      stre: -600,
      bgI: Woman,
      text: "Reverse Parallax",
    },
    {
      stre: 600,
      bgI: Fly,
      text: "Reverse ",
    },
  ];
  return (
    <div className="App">
      {data.map((e) => {
        return (
          <Parallax strength={e.stre} bgImage={e.bgI} blur={e.mac}>
            <div className="content">
              <div className="text-content">{e.text}</div>
            </div>
          </Parallax>
        );
      })}
   
    </div>
  );
}

export default App;

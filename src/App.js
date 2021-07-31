import "./App.css";
import background_top from "./deju2t4.jpg";
import CardLive from "./Components/CardLive";
import Defend from "./Components/Defend";
import Voting from "./Components/Voting";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <img src={background_top} width="100%" alt="background-top" />
      <div className="header" id="header">
        <div className="circle-logo"></div>
        <h3>
          <b>LIVE : DIKE (The Devil Judge)</b>
        </h3>
      </div>

      <CardLive />

      <Defend />

      <Voting />

      <br />

      <Footer />

      <br />
    </div>
  );
}

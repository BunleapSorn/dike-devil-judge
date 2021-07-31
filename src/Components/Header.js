import background_top from "../deju2t4.jpg";

export default function Header() {
  return (
    <div>
      <img src={background_top} width="100%" alt="background-top" />
      <div className="header" id="header">
        <div className="circle-logo"></div>
        <h3>
          <b>LIVE : DIKE (The Devil Judge)</b>
        </h3>
      </div>
    </div>
  );
}

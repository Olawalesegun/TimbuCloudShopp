import { Image } from "./Image";
import NavBar from "./NavBar";
import navBarShoe from "../assets/navBarShoe.png";
import Nav from "./Nav.jsx";
import '../App.css';

const navTitle = ["SHOES", "CART", "PAYMENT"];
export default function ProductHead({ width, height }) {
  return (
    <div style={{width: width, height: height}}>
      <NavBar nav={navTitle}/>
      <div className="prodHead">
        <div className="step">
          <h2 id="stepH2"> Step Into Style </h2>
          <p id="par">
            Find your perfect fit from our wide<br></br> collection of premium footware
          </p>
          <Nav style={{ background: "#2FCD1A", border: "none", width: "215px", height: "48px", fontSize: "24px", textAlign: 'center', color: "#FFFFFF"}}>SHOP NOW</Nav>
        </div>
        <div className="shoe">
          <Image image={navBarShoe} />
        </div>
      </div>
    </div>
  );
}

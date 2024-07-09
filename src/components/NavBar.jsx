import Nav from "./Nav";
import "../App.css";
import { useWindowWidth } from "./useWindowWidth";

export default function NavBar({ nav }) {
  
  const widthOfScreen = useWindowWidth();
  const isMobile = widthOfScreen <= 1366;
  
  return (
    <>
      <ul className="navbar">
        <Nav
          className="buttonList"
          style={{ border: "none", padding: "10px", color: "#2FCD1A", width: "234px"}}
        >
          TIMBU CLOUD SHOPPING
        </Nav>
        {!isMobile ? (<ul className="navbar navLeft">
          {nav.map((item, index) => (
            <Nav
            key={index}
            className="buttonList" 
            style={{ border: "none", padding: "10px", width: "166px" }}>
              {item}
            </Nav>))
          }
        </ul>) : <button>
            ☰
          </button>}
      </ul>
    </>
  );
}

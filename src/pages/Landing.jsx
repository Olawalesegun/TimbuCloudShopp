import ProductHead from '../components/ProductHead';
import Nav from '../components/Nav.jsx';
import { ProdDisplay } from '../components/ProdDisplay.jsx';
import '../App.css';


export default function Landing() {
  

  return (
    <>
      <div className="prodktHead">
        <ProductHead width="100%" height="570px" />
      </div>
      
      <div className="stanza" >
        <Nav className="gapp"> SHOES</Nav>
        <Nav className="gapp"> BAGS</Nav>
        <Nav className="gapp"> TRAVEL</Nav>
      </div>
      <div className="app">
        <ProdDisplay />
      </div>

    </>
  )
}

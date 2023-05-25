
import '../App.css';
import Header from "../components/Header.js"
import Body from "../components/Body.js"
import Footer from '../components/Footer';
import Menu from '../components/Menu';



function Homepage( {cart, handleMenuStart, menuActive}) {
  return (
    <div className="App">
      <Header 
        cart={cart}
        handleMenuStart={handleMenuStart}
      />
      <Body/>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default Homepage;

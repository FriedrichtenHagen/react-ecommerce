
import '../../assets/App.css';
import Header from "../../components/Header.js"
import Body from "./Body.js"
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';



function Homepage( {cart}) {
  return (
    <div className="App">
      <Header 
        cart={cart}   />
      <Body/>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default Homepage;

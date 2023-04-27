
import '../App.css';
import Header from "../components/Header.js"
import Body from "../components/Body.js"
import Footer from '../components/Footer';



function Homepage( {cart}) {
  return (
    <div className="App">
      <Header cart={cart}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default Homepage;


// add a slide-in shopping cart
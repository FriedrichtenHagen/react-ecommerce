
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import ClientHomePageContent from "./ClientHomePageContent.js"
import { getAuth, signOut } from "firebase/auth";

export default function ClientHomePage({cart}){





    function  handleSignOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log(auth)
          
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
    }

    return(
        <>
            <Header cart={cart}/>
            <ClientHomePageContent handleSignOut={handleSignOut} />
            <Footer/>
            <Menu/>
        </>
    )
}    
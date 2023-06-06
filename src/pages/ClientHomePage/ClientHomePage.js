import { useState } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import ClientHomePageContent from "./ClientHomePageContent.js"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function ClientHomePage({cart}){
    const [signedIn, setSignedIn] = useState(false)

    // auth observer
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
        
    } else {
        // User is signed out
        // ...
        setSignedIn(false)
    }
    });



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
            <ClientHomePageContent handleSignOut={handleSignOut} signedIn={signedIn} />
            <Footer/>
            <Menu/>
        </>
    )
}    
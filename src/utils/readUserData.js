import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firestore"

export default async function readUserDate(uid){
    const docRef = doc(db, "customers", uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("users shopping cart:", docSnap.data().cart);
      const databaseCart = docSnap.data().cart
      return databaseCart
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
}


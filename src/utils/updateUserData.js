import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../config/firestore"


// export default function updateUserData(collection, data){
// // data is an object of key value pairs
// // if the document does not exist, it will be created.
// // existing values will be overwriten, new ones will be created
//     const userRef = doc(db, collection, 'TEST');
//     setDoc(userRef, data, { merge: true });
// }

export default async function updateUserData(userData, uid){
    try {
      await setDoc(doc(db, "customers", uid), 
        userData
      , { merge: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
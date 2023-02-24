import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRVg5ekupY077Sdu02yhgDidpVbVSrx9U",
  authDomain: "e-commerce-e8790.firebaseapp.com",
  projectId: "e-commerce-e8790",
  storageBucket: "e-commerce-e8790.appspot.com",
  messagingSenderId: "524289796586",
  appId: "1:524289796586:web:763dcc29fafa52acb72a93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const theAuth = getAuth();
export const theSignInPop = ()=> signInWithPopup(theAuth,provider);

export const db = getFirestore();
export const creatingDoc =async (userResponse)=>{
    const theMainDoc = doc(db,"users",userResponse.uid);

    const GetTheDoc = await getDoc(theMainDoc);

    if(!GetTheDoc.exists()){
        const {displayName,email} = userResponse;
        const theTime = new Date()

        try{
            await setDoc(theMainDoc,{displayName,email,theTime});
        }catch(error){
            console.log("the error generated ", error.message)
        }
    }

    return theMainDoc
}

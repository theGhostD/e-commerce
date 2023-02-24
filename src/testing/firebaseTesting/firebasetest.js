
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth";

import { doc,getDoc ,setDoc ,getFirestore} from "firebase/firestore";

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
    prompt : "select_account"
})

export const Authget = getAuth();
export const SigninUser = async () => await signInWithPopup(Authget,provider)

// adding and creating the user into the firestore 
const db = getFirestore()

export const creatingUser  = async ({user}) =>{
    const TheMainDoc =  doc(db,"theUsers",user.uid);
    // to get the user from the database 
    const getdoc = await getDoc(TheMainDoc);
    console.log(getdoc)
    console.log(getdoc.exists())

    if (!getdoc.exists()){
        const { displayName,email} = user
        const theDate = new Date()

        try{
            await setDoc(TheMainDoc,{theDate,displayName,email});
        }catch(e){
            console.log("the error encounter ",e)
        }
       
    }
}

// creating user with email and pass 

export const createUserWithEmailAndPass = async(email,pass)=>{
   return await  createUserWithEmailAndPassword(Authget,email,pass)
}
// export default createUserWithEmailAndPass
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVpH7x2sMdMoHyKga_E5GnfR_jygu31cQ",
  authDomain: "commerce-92c7d.firebaseapp.com",
  projectId: "commerce-92c7d",
  storageBucket: "commerce-92c7d.appspot.com",
  messagingSenderId: "1098402926297",
  appId: "1:1098402926297:web:54090e433f2930750bf8c8",
  measurementId: "G-VS7V3BJDVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// this set parameters are for GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
});

export const Auth = getAuth();
export const SigninwithGooglePopUp = () => signInWithPopup(Auth, provider);

export const db = getFirestore();

export const createDocAndCollection = async (collectionKey, objectToAdd) => {
  const collectionref = collection(db, collectionKey);
  console.log(collectionref);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionref, object.title);

    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocument = async () => {
  const collectionref = collection(db, "categories");
  const theQuery = query(collectionref);

  const querySnapShot = await getDocs(theQuery);

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title] = items;
    return acc;
  }, {});
  console.log(categoryMap);
  return categoryMap;
};

export const createDocumentFromRes = async (userRes) => {
  console.log(userRes.uid);
  
  const theDoc = doc(db, "users", userRes.uid);
  const getTheDoc = await getDoc(theDoc);
  console.log(getTheDoc.exists());

  if (!getTheDoc.exists()) {
    const { displayName, email, uid } = userRes;
    const thecreatedDate = new Date();

    try {
      await setDoc(theDoc, {
        displayName,
        email,
        uid,
        thecreatedDate,
      });
    } catch (error) {
      console.log("the error is ", error.message);
    }
  }

  return theDoc;
};

// creating signUp function
export const signupWithEP = async (email, password) => {
  return await createUserWithEmailAndPassword(Auth, email, password);
};

//creating login with username and passowrd function

export const LoginUser = async (email, password) =>
  await signInWithEmailAndPassword(Auth, email, password);

// signOut user
export const SignOutUser = async () => await signOut(Auth);

// onAuthStateChange
export const onAuthStateChangelistener = (callback) =>
  onAuthStateChanged(Auth, callback);



import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore,
    getDoc,
    doc,
    updateDoc,
    setDoc,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAaGGWxb0z9SAl7x7mutSw3eJYSapGdC8g",
    authDomain: "hackpacks-web-firebase.firebaseapp.com",
    projectId: "hackpacks-web-firebase",
    storageBucket: "hackpacks-web-firebase.appspot.com",
    messagingSenderId: "712387292405",
    appId: "1:712387292405:web:b4ae6dbdfb0b9ea73ba9bc",
    measurementId: "G-4CYQ6QEPQ6"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}

export const registerWithEmailAndPassword = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "to-do", email), {
        items: [],
    });

};

export const getMyToDoList = async (email) => {
    try {
        const docSnap = await getDoc(doc(db, "to-do", email));
        return docSnap.data().items;
    } catch (error) {
        console.error(error);
    }
};

export const addToDoItem = async (currentItems, email, newItem) => {
    await updateDoc(doc(db, "to-do", email), {
        items: [...currentItems, newItem],
    }); 
}

export const deleteToDoItem = async (currentItems, email, deleteItem) => {
    var newItems = currentItems;
    
    const index = newItems.indexOf(deleteItem);

    if (index > -1) {
        newItems.splice(index, 1);
    }

    await updateDoc(doc(db, "to-do", email), {
        items: [...newItems],
    });
}
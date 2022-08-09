// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyCemvrO89cbF1Rft_mzmjNz0liGhN0FHOI',
   authDomain: 'sparta-react-marketkurly.firebaseapp.com',
   projectId: 'sparta-react-marketkurly',
   storageBucket: 'sparta-react-marketkurly.appspot.com',
   messagingSenderId: '552270587852',
   appId: '1:552270587852:web:05a93fbcdfb20ab6405f69',
   measurementId: 'G-94G6XKCPH4',
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
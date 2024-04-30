// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD-17NaLbspWana564jyzI8ipt7coy41SU",
//   authDomain: "bookhaven-11752.firebaseapp.com",
//   projectId: "bookhaven-11752",
//   storageBucket: "bookhaven-11752.appspot.com",
//   messagingSenderId: "177296970751",
//   appId: "1:177296970751:web:e6164aac023cae1557cdca"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAikjyoMeGFz9p3wpUfIRKTSmsJqmNMzTQ",
  authDomain: "book-heaven-f3c5b.firebaseapp.com",
  projectId: "book-heaven-f3c5b",
  storageBucket: "book-heaven-f3c5b.appspot.com",
  messagingSenderId: "95449318991",
  appId: "1:95449318991:web:b9ba2f1193ed29af288c3a",
  measurementId: "G-1SQNCHNCM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
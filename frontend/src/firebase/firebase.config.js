
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCbHUDXgD1moOehDpgQwQ5BXvc4FjRCPOc",
  authDomain: "chat-785d3.firebaseapp.com",
  projectId: "chat-785d3",
  storageBucket: "chat-785d3.appspot.com",
  messagingSenderId: "989483446914",
  appId: "1:989483446914:web:d51d529fb8cadf07a87a9b",
  measurementId: "G-1NHMDCP0ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
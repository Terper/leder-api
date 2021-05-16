import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT3o8V4p-0SU2M8IPsap2x2a2Gv2ONNKk",
  authDomain: "leder-5089a.firebaseapp.com",
  projectId: "leder-5089a",
  storageBucket: "leder-5089a.appspot.com",
  messagingSenderId: "190680921957",
  appId: "1:190680921957:web:d1b0f406c1d3edb9f9538c",
  measurementId: "G-Y5BEBTL4H0"
};

firebase.initializeApp(firebaseConfig);
export const collection = firebase.firestore().collection("routes");

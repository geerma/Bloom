
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8plFEg9Ug9wC9DK3GSZOqLTT87ycV61g",
  authDomain: "uot-hackathon-d1638.firebaseapp.com",
  projectId: "uot-hackathon-d1638",
  storageBucket: "uot-hackathon-d1638.appspot.com",
  messagingSenderId: "689490705372",
  appId: "1:689490705372:web:3641fe479b71bb68292d19",
  measurementId: "G-SB0WBFG4JW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

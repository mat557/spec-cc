import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyCfysPFWJKRe1UhVfvt__iN2y0YUjtPnjA",
  authDomain:"spectrum-login.firebaseapp.com",
  projectId:"spectrum-login",
  storageBucket:"spectrum-login.appspot.com",
  messagingSenderId:"523733533197",
  appId:"1:523733533197:web:3fcb33d0f1f0c944548b44",
};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
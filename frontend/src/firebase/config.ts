// // src/firebase/config.ts

// import {getApp, getApps, initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDtWMAN-Vjr17WkFmh1GqhJNBS_fYOOetQ",
//   authDomain: "amiri-finance.firebaseapp.com",
//   projectId: "amiri-finance",
//   storageBucket: "amiri-finance.firebasestorage.app",
//   messagingSenderId: "704478193152",
//   appId: "1:704478193152:web:a60e0e2fb45a0243155ae5",
// };

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// src/firebase/config.ts

import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtWMAN-Vjr17WkFmh1GqhJNBS_fYOOetQ",
  authDomain: "amiri-finance.firebaseapp.com",
  projectId: "amiri-finance",
  storageBucket: "amiri-finance.firebasestorage.app",
  messagingSenderId: "704478193152",
  appId: "1:704478193152:web:a60e0e2fb45a0243155ae5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export {signInWithPopup};

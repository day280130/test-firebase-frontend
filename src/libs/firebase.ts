// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect, signOut } from "firebase/auth";
import { logoutBackend } from "@/libs/backend-api";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// my playground
// const firebaseConfig = {
//   apiKey: "AIzaSyCqxp4JCiK3MT1moOQcly5flqgf5dzVUlo",
//   authDomain: "playground-2801.firebaseapp.com",
//   projectId: "playground-2801",
//   storageBucket: "playground-2801.appspot.com",
//   messagingSenderId: "972327874312",
//   appId: "1:972327874312:web:1f13ed9aa8e3de3365c6bd",
//   measurementId: "G-G9T0MJZYRX",
// };

// bangkit capstone
const firebaseConfig = {
  apiKey: "AIzaSyADOxo5CTQ7KrlsEBCZ5YledqDTI_NSg8c",
  authDomain: "capstone-project-407013.firebaseapp.com",
  projectId: "capstone-project-407013",
  storageBucket: "capstone-project-407013.appspot.com",
  messagingSenderId: "425997828382",
  appId: "1:425997828382:web:3624771a54a5e6f647090f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const analytics = getAnalytics(app);

export const logIn = async () => {
  try {
    await signInWithRedirect(auth, provider);
    const result = await getRedirectResult(auth);
    if (!result) throw new Error("no credential");
    return result;
  } catch (err) {
    console.error(JSON.stringify(err));
    return undefined;
  }
};

export const logOut = async () => {
  const auth = getAuth(app);
  try {
    const token = await auth.currentUser?.getIdToken();
    await signOut(auth).then(() => logoutBackend(token ?? ""));
  } catch (err) {
    console.error(JSON.stringify(err));
  }
};

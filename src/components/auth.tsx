import { app, logIn, logOut } from "@/libs/firebase";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";

export const Auth = () => {
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => setCurrentUser(user));
  const [currentUser, setCurrentUser] = React.useState<User | null>();

  return (
    <div className="bg-slate-200 rounded-lg p-3 flex gap-2 max-w-screen-lg">
      <input className="p-2" type="text" id="backend-url-input" defaultValue="http://localhost:8000" />
      <button className="bg-white p-2 rounded-md disabled:bg-white/50" onClick={logIn} disabled={!!currentUser}>
        {currentUser ? "Already signed in" : "Sign In With Google"}
      </button>
      <button className="bg-red-600 p-2 text-white rounded-md" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

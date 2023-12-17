import { app } from "@/libs/firebase";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";

export const UserData = () => {
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => {
    setCurrentUser(user);
    const token = await user?.getIdToken();
    setCurrentToken(token ?? "");
  });
  const [currentUser, setCurrentUser] = React.useState<User | null>();
  const [currentToken, setCurrentToken] = React.useState("");

  return (
    <div className="bg-slate-200 rounded-lg p-3 text-center space-y-2 max-w-screen-lg">
      <div className="grid grid-cols-4 text-start">
        <div>ID</div>
        <div className="col-span-3">{currentUser?.uid}</div>
        <div>Email</div>
        <div className="col-span-3">{currentUser?.email}</div>
        <div>Name</div>
        <div className="col-span-3">{currentUser?.displayName}</div>
        <div>Photo</div>
        <img className="col-span-3" src={currentUser?.photoURL ?? ""} alt={currentUser?.displayName ?? "user not found"} />
        <div>Current Token</div>
        <div className="col-span-3 break-words">{currentToken}</div>
      </div>
    </div>
  );
};

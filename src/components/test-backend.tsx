import { testBackend } from "@/libs/backend-api";
import { app } from "@/libs/firebase";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";

export const TestBackend = () => {
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => setCurrentUser(user));
  const [currentUser, setCurrentUser] = React.useState<User | null>();
  const [decodedToken, setDecodedToken] = React.useState("");
  const getDecodedToken = React.useCallback(async () => {
    const token = await currentUser?.getIdToken();
    const response = await testBackend(token ?? "");
    setDecodedToken(JSON.stringify(response?.token.decoded, undefined, "\t") ?? "");
  }, [currentUser]);
  return (
    <div className="bg-slate-200 rounded-lg p-3 text-center space-y-2 max-w-screen-lg">
      <button className="bg-white p-2 rounded-md disabled:bg-white/50" onClick={() => getDecodedToken()}>
        Test Backend
      </button>
      <div className="grid grid-cols-4 text-start">
        <div>Decoded Token</div>
        <pre className="col-span-3">
          <div className="[text-wrap:wrap] break-words">{decodedToken}</div>
        </pre>
      </div>
    </div>
  );
};

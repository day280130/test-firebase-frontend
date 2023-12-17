// import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { Auth } from "@/components/auth";
import { TestBackend } from "@/components/test-backend";
import { UserData } from "@/components/user-data";

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex flex-col gap-2 items-center justify-center">
      {/* <div className="flex gap-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24" alt="React logo" />
        </a>
      </div> */}
      <h1 className="text-xl font-semibold">Testing Firebase</h1>
      <Auth />
      <div className="overflow-y-scroll space-y-2 no-scrollbar max-w-screen-lg">
        <UserData />
        <TestBackend />
      </div>
    </div>
  );
}

export default App;

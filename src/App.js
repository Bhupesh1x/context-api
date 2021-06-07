import React from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import { DataProvider } from "./dataContext";
function App() {
  return (
    <div>
      <DataProvider>
        <CompA />
        <CompB />
      </DataProvider>
    </div>
  );
}

export default App;

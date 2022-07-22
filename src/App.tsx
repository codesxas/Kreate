import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Router from "./Router";

function App() {
  return (
    <div className="App">
      <header className="App-header-text">Hello Fakelandians</header>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

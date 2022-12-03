/** @format */

import "./App.css";
import React from "react";
import { Header } from "./Header";
import { Technologies } from "./Technologies";

const App = () => {
  return (
    <div>
      <h1>
        <Technologies/>
        <Header />
      </h1>
    </div>
  );
};

export default App;

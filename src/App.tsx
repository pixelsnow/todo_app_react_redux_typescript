import React from "react";

import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <List />
      <Footer />
    </div>
  );
};

export default App;

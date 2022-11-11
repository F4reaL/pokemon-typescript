import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <h2>Pokemon'</h2>
      <Home />
    </div>
  );
};

export default App;

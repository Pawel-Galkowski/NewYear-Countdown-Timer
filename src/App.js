import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Coutdown from "./components/Countdown";
import "./stylesheets/app.css";

function App() {
  return (
    <Router>
      <main className="bg-image">
        <Route exact path="/" component={Coutdown} />
      </main>
    </Router>
  );
}

export default App;

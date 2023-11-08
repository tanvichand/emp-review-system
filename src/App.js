// src/App.js
import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import EmployeeManagement from "./components/EmployeeManagement";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
      
          <React.Fragment path="/">
              {user ? (
                <EmployeeManagement user={user} />
              ) : (
                <Login onLogin={setUser} />
              )}
          </React.Fragment>
        
      </div>
    </Router>
  );
}

export default App;

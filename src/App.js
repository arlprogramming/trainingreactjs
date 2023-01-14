import "./App.css";
import { useState } from "react";
import Intro from "./components/react/Intro/Intro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/react/Pageerror/Error";
// import Home from "./components/react/Home/Home";
// import Intro from "./components/react/Intro/Intro";

function App() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    setValue(username);
  };

  return (
    <Router>
      <div>
        {value != "rully" ? (
          <div className="Container">
            <header className="App-header">
              <h3>Hallo, Welcome App!!</h3>
            </header>
            <div className="nav_content">
              <div className="login">
                <form onSubmit={handleSubmit}>
                  <div className="test">
                    <label>Password</label>
                    <input id="username"></input>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

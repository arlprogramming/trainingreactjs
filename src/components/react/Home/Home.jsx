import React from "react";
import BasicExample from "../../../Navbar.js/Navbar";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div>
        <div className="App-template">
          <div className="App-title">
            <BasicExample />
          </div>
          <div className="App-content">Hallo</div>
        </div>
      </div>
    </div>
  );
}

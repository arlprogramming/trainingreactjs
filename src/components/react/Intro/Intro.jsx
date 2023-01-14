import React, { useState, useEffect } from "react";
import rukawa from "../../../picture/png/KaedaRukawa.png";

import "./intro.css";

const Intro = () => {
  //membuat useState
  const [text, setText] = useState("");

  //bermain boolean untuk menampilkan sesuatu
  const [showImage, setShowImage] = useState(false);

  //membuat useEffect
  //useEffect bentuk ini digunakan ketika ada triger yg dijalankan
  useEffect(() => {
    if (text === "rukawa") {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  }, [text]);
  return (
    <div>
      <div className="Container">
        <header className="App-header">
          <h3>Binding Data</h3>
        </header>
        <div className="login">
          <div className="content-1">
            <div className="binding">
              {!showImage ? "" : <img id="rukawa" src={rukawa} alt="" />}
              {/* onChange={() => {}} = salah satau contoh data binding di reactjs */}
              <input
                type="text"
                id="text"
                placeholder="Type here.."
                onChange={(ketik) => setText(ketik.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

/*{
 <div className="pict-content">
              {showImage ? <img id="rukawa" src={rukawa} alt="rukawa" /> : ""}
            </div>
            <div className="App-content">
              <h4 style={{ fontSize: "20px" }}>1. Binding Data</h4>
              <div className="binding">
                <h3>{text}</h3>
                {/* onChange={() => {}} = salah satau contoh data binding di reactjs 
                <input
                  type="text"
                  id="text"
                  placeholder="Type here.."
                  onChange={(ketik) => setText(ketik.target.value)}
                />
              </div>
            </div>
}*/

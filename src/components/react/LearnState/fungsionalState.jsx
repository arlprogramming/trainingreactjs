import React, { useState } from "react";
import "./state.css";

const Learnstate = () => {
  //--------------------------------------menggunakan useState di Function---------------------------------------
  let [counter, setCounter] = useState(0);
  let [players, setPlayers] = useState(["Jordan", "Lebron", "Curry"]);

  //Bisa juga digabung
  let [state, setState] = useState({
    counter: 0,
    players: ["Jordan", "Lebron", "Curry"],
  });

  //---------------------cara manggilnya---------------------
  // let addCounter2 = () => {
  //...state = supaya si players juga kebawa, jika tidak menggunakan state players tidak kebawa
  //   setState({ ...state, counter: state.counter + 1 });
  // };

  //------------------------------jika si nilai counter dimasukkan kedalam function-----------------------------state

  console.log(state);
  let addCounter = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    button1.addEventListener("click", (e) => {
      setCounter(counter + 1);
    });

    button2.addEventListener("click", (e) => {
      setCounter(counter - 1);
    });

    button3.addEventListener("click", (e) => {
      setCounter((counter = 0));
    });
  };

  let addPlayers = () => {
    let button1 = document.getElementById("button4");
    let button2 = document.getElementById("button5");
    button1.addEventListener("click", (e) => {
      setPlayers([...players, "NBA"]);
    });

    button2.addEventListener("click", (e) => {
      setPlayers(["Jordan", "Lebron", "Curry"]);
    });
  };

  return (
    <div>
      <h1>Hallo this is useState in function</h1>
      <div className="containerpage">
        <div className="page1">
          <h2>Counter</h2>
          <h2>{counter}</h2>
          <button id="button1" onClick={addCounter}>
            +
          </button>
          {/* untuk onClick bisa juga => onClick={() => setPlayers((prev)=>prev + 1)} */}
          <button id="button2" onClick={addCounter}>
            -
          </button>
          {/* untuk onClick bisa juga => onClick={() => setPlayers((prev)=>prev - 1)} */}
          <button id="button3" onClick={addCounter}>
            set
          </button>
        </div>
        <div className="page2">
          <h2>Counter</h2>
          <p>{players}</p>
          <button id="button4" onClick={addPlayers}>
            Add Player
          </button>
          <button id="button5" onClick={addPlayers}>
            Set Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learnstate;

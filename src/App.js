import "./App.css";
import FunctionalMap from "./components/LearnMap/FunctionalMap";
import Learnstate from "./components/LearnState/fungsionalState";
import Fungsionaluseeffect from "./components/LearnUseeffect/fungsionalUseeffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React</h1>
        {/* <Learnstate /> */}
        {/* <Fungsionaluseeffect /> */}
        <FunctionalMap />
      </header>
    </div>
  );
}

export default App;

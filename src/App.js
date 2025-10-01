import { ContextExample } from "./context";
import { ContextExample2 } from "./context2";
import { ReduxExample } from "./redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextExample />
      </header>
      <header className="App-header">
        <ContextExample2 />
      </header>
      <header className="App-header">
        <ReduxExample />
      </header>
    </div>
  );
}

export default App;

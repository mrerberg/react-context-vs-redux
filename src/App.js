import { ContextExample } from "./context";
import { ReduxExample } from "./redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextExample />
      </header>
      <header className="App-header">
        <ReduxExample />
      </header>
    </div>
  );
}

export default App;

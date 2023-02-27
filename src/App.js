import logo from "./logo.svg";
import "./App.css";
import Recherche from "./component/recherche/recherche";
import trump from "./component/comments/data";
function App() {
  return (
    <div className="App">
      <h1>Haroun The Great</h1>
      <Recherche trump={trump} />
    </div>
  );
}

export default App;

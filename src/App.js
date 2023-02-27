import logo from "./logo.svg";
import "./App.css";
import Recherche from "./component/first_comments/recherche/recherche";
import trump from "./component/first_comments/comments/data";
function App() {
  return (
    <div className="App">
      <h1>Haroun The Great</h1>
      <Recherche trump={trump} />
    </div>
  );
}

export default App;

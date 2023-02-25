import logo from "./logo.svg";
import "./App.css";
import Recherche from "./component/recherche/recherche";
import trump from "./component/comments/data";
function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(arr);
  return (
    <div className="App">
      <h1>Haroun The Great</h1>
      <Recherche trump={trump} />
    </div>
  );
}

export default App;

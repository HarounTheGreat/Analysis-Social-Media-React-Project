import logo from "./logo.svg";
import "./App.css";
import trump from "./data/data";
import Comments from "./component/Comments";
function App() {
  console.log(trump);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(arr);
  return (
    <div className="App">
      <h1>Haroun The Great</h1>
      <Comments />
    </div>
  );
}

export default App;

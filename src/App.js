import logo from "./logo.svg";
import "./App.css";
import Comments from "./component/comments/Comments";
function App() {
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

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./component/error/error";
import Home from "./pages/home";
import Area_chart from "./pages/area_chart";
import trump_data from "./data";
import obama_data from "./obama";
import Bar_chart from "./pages/bar_chart";
import Bubble_chart from "./pages/bubble_chart";
import Doughnut_chart from "./pages/doughnut_chart";
const Numbers = (X) => {
  let a = 0;
  let b = 0;
  let c = 0;
  let R = [];
  for (let i = 0; i < X.length; i++) {
    if (X[i].an === "O") {
      a = a + 1;
    } else if (X[i].an === "P") {
      b = b + 1;
    } else {
      c = c + 1;
    }
  }
  R.push(a);
  R.push(b);
  R.push(c);
  return R;
};
function App() {
  const n = Numbers(trump_data);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/area_chart"
            element={<Area_chart trump_data={trump_data} />}
          />
          <Route
            path="/bar_chart"
            element={
              <Bar_chart trump_data={trump_data} obama_data={obama_data} />
            }
          />
          <Route path="/bubble_chart" element={<Bubble_chart />} />
          <Route
            path="/Doughnut_chart"
            element={<Doughnut_chart trump_data={trump_data} n={n} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

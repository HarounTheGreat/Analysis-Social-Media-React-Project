import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./component/error/error";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Area_chart from "./pages/area_chart";
import trump_data from "./data";
import obama_data from "./obama";
import Bar_chart from "./pages/bar_chart";
import Bubble_chart from "./pages/bubble_chart";
import Doughnut_chart from "./pages/doughnut_chart";
import Line_chart from "./pages/line_chart";
import Analyse_by_language from "./pages/analyse_by_language";
import Pie_chart from "./pages/pie_chart";
import Multiaxis_line_chart from "./pages/multiaxis_line_chart";
import SinglePerson from "./component/services/SinglePerson";
import trump from "./data";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Dashboard data={trump} />} /> */}
          <Route path=":personId/bar_chart" element={<Bar_chart />} />
          <Route path="/bubble_chart" element={<Bubble_chart />} />
          <Route
            path="/Doughnut_chart"
            element={<Doughnut_chart trump_data={trump_data} />}
          />
          <Route
            path="/line_chart"
            element={
              <Line_chart trump_data={trump_data} obama_data={obama_data} />
            }
          />
          <Route
            path="/analyse_by_language"
            element={<Analyse_by_language trump_data={trump_data} />}
          />
          <Route
            path="/pie_chart"
            element={<Pie_chart trump_data={trump_data} />}
          />
          <Route
            path="/multiaxis_line_chart"
            element={
              <Multiaxis_line_chart
                trump_data={trump_data}
                obama_data={obama_data}
              />
            }
          />
          <Route path=":productId" element={<SinglePerson />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

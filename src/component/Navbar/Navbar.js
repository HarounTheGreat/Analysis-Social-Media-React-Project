import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <p></p>
      <Link to="/">Home</Link>
      <Link to="/area_chart">Area Chart</Link>
      <Link to="/bar_chart">Bar Chart</Link>
      <Link to="/bubble_chart">Bubble Chart</Link>
      <Link to="/column_chart">Column Chart</Link>
      <Link to="/doughnut_chart">Doughnut Chart</Link>
      <Link to="/line_chart">Line Chart</Link>
      <Link to="/pie_chart">Pie Chart</Link>
      <Link to="/stacked_bar_charts">Stacked Bar Charts</Link>
      <Link to="/analyse_by_language">Analyse by Language</Link>
      <p></p>
    </nav>
  );
};
export default Navbar;

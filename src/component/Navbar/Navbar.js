import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/area_chart">
            Area Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/bar_chart">
            Bar Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/bubble_chart">
            Bubble Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/column_chart">
            Column Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/doughnut_chart">
            Doughnut Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/line_chart">
            Line Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/pie_chart">
            Pie Chart
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/stacked_bar_charts">
            Stacked Bar Charts
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/analyse_by_language">
            Analyse by Language
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/multiaxis_line_chart">
            Multiaxis Line Chart
          </Link>
        </li>
      </ul>
      <p></p>
    </nav>
  );
};
export default Navbar;

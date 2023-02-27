import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <p></p>
      <Link to="/">Home</Link>
      <Link to="/Area_Chart">Area Chart</Link>
      <Link to="/Bar Chart">Bar Chart</Link>
      <Link to="/Bubble Chart">Bubble Chart</Link>
      <Link to="/Column Chart">Column Chart</Link>
      <Link to="/Doughnut Chart">Doughnut Chart</Link>
      <Link to="/Line Chart">Line Chart</Link>
      <Link to="/Pie Chart">Pie Chart</Link>
      <Link to="/Stacked Bar Charts">Stacked Bar Charts</Link>
      <p></p>
    </nav>
  );
};
export default Navbar;

import Recherche from "../component/first_comments/recherche/recherche";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import trump from "../data";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <Recherche trump={trump} />
      </section>
    </>
  );
};
export default Dashboard;

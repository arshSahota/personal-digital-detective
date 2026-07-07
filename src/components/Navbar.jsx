import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link to="/">
        Dashboard
      </Link>

      <Link to="/library">
        Library
      </Link>

      <Link to="/add-entry">
        Add Entry
      </Link>

      <Link to="/analytics">
        Analytics
      </Link>

    </nav>
  );
};

export default Navbar;
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="appHeader">
      <div className="navInner">
        <div className="brand">
          <Link className="link" to="/">
            User Manager
          </Link>
        </div>

        <nav className="navLinks">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link btn btnPrimary" to="/create">
            + Create User
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;



import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contacts">Contacts</NavLink></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
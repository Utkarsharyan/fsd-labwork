import { NavLink } from 'react-router';

function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="navigation">
        <span className="brand">TaskFlow</span>
        <NavLink end to="/">Dashboard</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";
//do i need to also import “./index.css”; ??

const Nav = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <NavLink to="/" className={getNavLinkClass}>
            Candidates Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/SavedCandidates" className={getNavLinkClass}>
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;





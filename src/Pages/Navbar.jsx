import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
        style={{ backgroundColor: "#ff9800" }}
      >
        <div className="container">

          {/* Brand */}
          <NavLink className="navbar-brand fw-bold text-light fs-4" to="/">
            FoodOrder
          </NavLink>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center fs-5">

              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/allFoods">
                  Foods
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/ordernow">
                  Order
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

import React, { useState } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/Group 14.svg"

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div className="top-bar">
                <p>GRATE VALUE FOR A FRACTION OF THE COST, PLUS FREE ACCESS DURING THE BETA PHASE</p>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" classNameName='img-fluid'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setClicked(!clicked)}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/priceweb">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/homepage">API</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/homepage">Support</NavLink>
                            </li>
                            <div className="right-side">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/contactus">Login</NavLink>
                                </li>
                                <div className="vertical-line me-2 d-none d-lg-block">|</div>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/contactus">Register</NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;

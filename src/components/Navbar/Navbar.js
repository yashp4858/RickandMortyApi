import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../App.css";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink activeClassName="active" to="/" className="nav-link">Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                        <NavLink to="/location" className="nav-link">Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

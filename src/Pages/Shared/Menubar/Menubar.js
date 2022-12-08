import React from 'react';
import logo from '../../../assets/logo/logo.png';
import { FaSearch } from "react-icons/fa";

const Menubar = () => {
    return (
        <nav className="navbar-expand-lg bg-light" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-between align-items-center" id="navbarTogglerDemo01">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='position-relative'>
                        <FaSearch className='position-absolute' style={{ top: "15px", left: "20px", color: "#7A7A7A" }} />
                        <input className="form-control" style={{ width: "360px", height: "42px", background: "#F2F2F2", fontWeight: '500px', borderRadius: "21px", paddingLeft: '50px' }} type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
                    </div>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fw-semibold">
                                Create account,<a className="d-inline nav-link" style={{ marginLeft: "2px", color: "blue" }} href="/">It's Free!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;
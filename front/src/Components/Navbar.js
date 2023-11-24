import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UseAppContext from "../AppContext";


const Navbar = () => {

    const { loggedin, logout } = UseAppContext();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );

    const displayUserOption = () => {
        if (loggedin) {
            return (
                <>
                    <li className="nav-item">
                        <button className="btn btn-danger" onClick={logout}>
                            Logout
                        </button>
                    </li>
                    <li>
                        <img
                            height={50}
                            className="rounded-circle"
                            src={"http://localhost:5000/" + currentUser.avatar}
                            alt=""
                        />
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/Login">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/Signup">
                            Sign
                        </NavLink>
                    </li>
                </>
            );
        }
    };


    return (
        <nav
            className="navbar navbar-expand-md sticky-top bg-dark-subtle py-3"
            data-bs-theme="dark"
            style={{
                boxShadow: "0px 0px",
                borderBottomWidth: "122px",
                borderBottomColor: "rgb(160,208,255)",
                borderLeftColor: "transparent",
                background: "transparent",
            }}
        >
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <span
                        data-bss-parallax-bg={true}
                        style={{
                            backgroundImage:
                                'url("/assets/img/pexels-ivan-samkov-5799692.jpg")',
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        DT
                    </span>
                </NavLink>
                <button
                    data-bs-toggle="collapse"
                    className="navbar-toggler"
                    data-bs-target="#navcol-1"
                >
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon me-xxl-0 ms-0"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                data-bss-hover-animate="pulse"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                data-bss-hover-animate="pulse"
                                to="/Calorie"
                            >
                                Calorie Tracker
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                data-bss-hover-animate="pulse"
                                to="/Meal"
                            >
                                Meal
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {displayUserOption()}
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
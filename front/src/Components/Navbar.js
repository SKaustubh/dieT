import React from 'react'

function Navbar() {
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
                <a className="navbar-brand d-flex align-items-center" href="#">
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
                </a>
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
                            <a
                                className="nav-link active"
                                data-bss-hover-animate="pulse"
                                href="#Personal"
                            >
                                Personal
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                data-bss-hover-animate="pulse"
                                href="#Bussines"
                            >
                                Bussiness
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                data-bss-hover-animate="pulse"
                                href="#Community"
                            >
                                Community
                            </a>
                        </li>
                    </ul>
                    <button
                        className="btn btn-primary me-3"
                        data-bss-hover-animate="pulse"
                        type="button"
                        style={{
                            marginRight: '10px',
                            color: 'rgb(255, 249, 249)',
                            background: 'var(--bs-gray-800)',
                            borderRadius: '25px',
                            borderTopRightRadius: '158px',
                            borderBottomLeftRadius: '142px',
                            '--bs-body-color': '#040404',
                            borderWidth: '0.8px',
                            borderColor: 'rgb(255, 255, 255)'
                        }}
                    >
                        Login
                    </button>
                    <button
                        className="btn btn-primary ms-0 me-4"
                        data-bss-hover-animate="pulse"
                        type="button"
                        style={{
                            marginLeft: '-2px',
                            marginRight: '12px',
                            borderTopLeftRadius: '94px',
                            borderColor: 'var(--bs-navbar-brand-color)',
                            background: 'var(--bs-secondary-border-subtle)',
                            borderBottomRightRadius: '90px'
                        }}
                    >
                        SignUp
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
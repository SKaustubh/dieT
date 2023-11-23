import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import UseAppContext from "../AppContext";

const Login = () => {


    const { setLoggedin } = UseAppContext();

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: async (values) => {
            console.log(values);
            const res = await fetch("http://localhost:5000/user/authenticate", {
                method: "POST",
                body: JSON.stringify(values), // in this we are converting js to json using stringify
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res.status);

            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Login successful",
                });

                const data = await res.json();
                console.log(data);

                sessionStorage.setItem('user', JSON.stringify(data));  // set the token in the session storage

                setLoggedin(true);

            } else if (res.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        },
    });






    return (
        <section data-bss-scroll-zoom="true" data-bss-scroll-zoom-speed="1" className="position-relative py-4 py-xl-5" style={{ background: 'url("/assets/img/pexels-vanessa-loring-5966431.jpg")' }}>
            <div className="container py-lg-5 my-lg-5 px-lg-5">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h1 className="display-3 text-capitalize fw-bolder">Log in</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <div className="card bg-body-tertiary bg-opacity-25 bg-gradient mb-5" data-bss-hover-animate="pulse">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                                </svg></div>
                                <form onSubmit={loginForm.handleSubmit}>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={loginForm.handleChange}
                                            className="form-control form-control-lg"
                                            placeholder="e.g.  kriti@gmail.com"
                                        />
                                        <label className="form-label">Email address</label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            onChange={loginForm.handleChange}
                                            value={loginForm.values.password}
                                            className="form-control form-control-lg"
                                            placeholder="**********"
                                        />
                                        <label className="form-label">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-left  align-items-center mb-4">
                                        {/* Checkbox */}
                                        <div className="form-check me-5 ">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="form1Example3"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="form1Example3">
                                                {" "}
                                                Remember me{" "}
                                            </label>
                                        </div>
                                        <Link to="/Login">Forgot password?</Link>
                                    </div>
                                    {/* Submit button */}
                                    <div className="d-flex justify-content-center align-content-center  mb-3 mb-lg-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100 "
                                        >
                                            Sign in
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
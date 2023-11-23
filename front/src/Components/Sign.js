import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")

        .required("Password is Required"),
});




const Sign = () => {


    const nav = useNavigate();

    const [selfile, setSelfile] = useState();
    const signUpForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            values.avatar = selfile;
            setSubmitting(true);

            setTimeout(() => {
                console.log("Form is submitted ", values);
                setSubmitting(false);
            }, 3000);

            console.log(values);

            // send the data to the server

            const res = await fetch("http://localhost:5000/user/add", {
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
                    title: "Nice",
                    text: "You have signed successfully",
                });
                nav("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        },
        validationSchema: SignupSchema,
    });

    return (
        <section data-bss-scroll-zoom="true" data-bss-scroll-zoom-speed="1" className="position-relative py-4 py-xl-5" style={{ background: 'url("/assets/img/pexels-linda-ellershein-3127880.jpg")', backgroundSize: "cover" }}>
            <div className="container py-lg-5 my-lg-5 px-lg-5">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h1 className="display-3 text-capitalize fw-bolder" style={{ color: 'var(--bs-body-bg)' }}>Sign UP</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4 col-xxl-7 d-flex d-xxl-flex flex-row justify-content-center align-content-center justify-content-xxl-center align-items-xxl-center" style={{ overflow: 'hidden' }}>
                        <div className="card bg-body-tertiary bg-opacity-25 bg-gradient mb-5" data-bss-hover-animate="pulse" style={{
                            /* width: '86%', */
                            borderRadius: '75px',
                            boxShadow: '1px 10px 15px 5px',
                            /* height: '89%', */
                        }}>
                            <div className="card-body d-flex flex-column align-items-center mb-lg-5 px-lg-5 py-lg-5" style={{/*height: 393.8p50x;*//*width: 480.112px;*/ }}>
                                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4" style={{ background: 'var(--bs-body-color)' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person-add">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
                                </svg></div>

                                {/* form starting */}
                                <form
                                    className="mx-1 mx-md-4"
                                    onSubmit={signUpForm.handleSubmit}
                                >
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0">
                                            <span style={{ fontsize: "0.8em", color: "red" }}>
                                                {signUpForm.touched.name && signUpForm.errors.name}
                                            </span>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={signUpForm.handleChange}
                                                value={signUpForm.values.name}
                                                className="form-control"
                                                placeholder="e.g.  King"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example1c"
                                            >
                                                Your Name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0">
                                            <span style={{ fontsize: "0.8em", color: "red" }}>
                                                {signUpForm.touched.email &&
                                                    signUpForm.errors.email}
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={signUpForm.handleChange}
                                                value={signUpForm.values.email}
                                                className="form-control"
                                                placeholder="e.g.  king@example.com"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example3c"
                                            >
                                                Your Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0">
                                            <span style={{ fontsize: "0.8em", color: "red" }}>
                                                {signUpForm.touched.password &&
                                                    signUpForm.errors.password}
                                            </span>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={signUpForm.handleChange}
                                                value={signUpForm.values.password}
                                                className="form-control"
                                                placeholder="e.g. pasword234"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example4c"
                                            >
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="password"
                                                id="form3Example4cd"
                                                className="form-control"
                                                placeholder="e.g. pasword234"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example4cd"
                                            >
                                                Repeat your password
                                            </label>
                                        </div>
                                    </div>
                                    

                                    <div className="form-check d-flex  mb-5">
                                        <input
                                            className="form-check-input me-2 "
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3c"
                                        />
                                        <label className="form-check-label">
                                            I agree all statements in{" "}
                                            <Link to="/Sign">Terms of service</Link>
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-center align-content-center  mb-3 mb-lg-4">
                                        <button
                                            disabled={signUpForm.isSubmitting}
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100"
                                        >
                                            {signUpForm.isSubmitting ? (
                                                <>
                                                    <span
                                                        class="spinner-border spinner-border-sm"
                                                        aria-hidden="true"
                                                    ></span>
                                                    <span class="visually-hidden" role="status">
                                                        Loading...
                                                    </span>
                                                </>
                                            ) : (
                                                "Submit"
                                            )}
                                        </button>
                                    </div>
                                </form>

                                {/* form ending */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sign;
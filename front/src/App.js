import React from "react";

function App() {
  return (
    <>
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
      <section className="pe-0 pb-0 pt-0 mt-0 mb-0">
        <img
          className="img-fluid d-md-none"
          src="/assets/img/pexels-ivan-samkov-5799692.jpg"
        />
        <div
          data-bss-scroll-zoom={true}
          data-bss-scroll-zoom-speed={1}
          style={{
            backgroundImage:
              'url("/assets/img/pexels-ivan-samkov-5799692.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center px-5 hero-content py-5 ps-5 mt-5 mb-5">
            <h1
              className="display-1 fw-bold text-center mt-5 pe-5 mb-5 pt-0 ps-5 ms-5 me-0"
              data-aos="fade"
            >
              Welcome to Diet tracker!!
            </h1>
            <p className="lead fw-semibold text-center mb-5 mt-5">
              "Track your way to your healthier you with our intuitive diet
              tracker.... "
            </p>
            <button
              className="btn btn-primary my-3 pt-4 ms-5 pb-4 mt-5 me-5 mb-5"
              data-bss-hover-animate="flash"
              type="button"
              style={{
                background: "rgba(5,58,26,0.72)",
                borderRadius: "53px",
                transform:
                  "perspective(0px) rotate(0deg) scale(1.35) skew(0deg)",
                transformStyle: "preserve-3d",
                borderColor: "rgb(0,0,0)",
                borderBottomColor: "rgb(1,1,1)",
                borderLeftColor: "rgb(0,0,0)",
              }}
            >
              Create your account
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row me-lg-0 px-lg-5 my-lg-0 py-lg-0 pb-lg-5 mb-lg-2">
            <div className="col-md-12 my-5">
              <p className="fs-3 fw-semibold text-center pt-4">
                "Unlock your full potential , One Calorie at a time "
              </p>
              <h1 className="display-3 fw-bolder text-center pt-2 pb-0 my-2">
                Calories
              </h1>
              <p className="fs-4 fw-normal text-center py-2 my-3 mx-4">
                On average, a rough estimate is that you might burn about 100
                calories for every mile you run or walk.&nbsp;
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-11">
              <div
                className="card card-big small-card-sm"
                style={{ overflow: "hidden" }}
              >
                <img
                  className="card-img w-100 d-block"
                  src="/assets/img/pexels-tim-samuel-6697380.jpg"
                  width="694"
                  height="1041"
                />
                <div
                  className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small"
                  style={{ width: "100%" }}
                >
                  <h1 className="fw-bolder">Calorie Tracker !!!</h1>
                  <p
                    className="fw-bold text-start pt-0 pb-0 mx-0 my-0 me-0 ps-0 ms-0"
                    style={{
                      borderLeftColor: "var(--bs-emphasis-color)",
                      color: "var(--bs-emphasis-color)",
                    }}
                  >
                    <br />
                    <strong>"Calorie is the unit of our daily energy"</strong>
                    <br />
                    <br />
                  </p>
                  <button
                    className="btn btn-primary mt-sm-auto mt-md-auto mt-lg-auto pb-2 mx-0 mt-2"
                    type="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Calorie Tracker&nbsp;&nbsp;
                    <i
                      className="fas fa-arrow-circle-right"
                      data-bss-hover-animate="shake"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4 mt-4">
              <div
                className="card card-big small-card-sm"
                style={{ overflow: "hidden" }}
              >
                <img
                  className="card-img w-100 d-block"
                  src="/assets/img/pexels-any-lane-5946083.jpg"
                />
                <div
                  className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small"
                  style={{ width: "100%" }}
                >
                  <h1 className="fw-bolder">Daily Meal !!!</h1>
                  <p
                    className="fw-bold text-start pt-0 pb-0 mx-0 my-0 me-0 ps-0 ms-0"
                    style={{
                      borderLeftColor: "var(--bs-emphasis-color)",
                      color: "var(--bs-emphasis-color)",
                    }}
                  >
                    <br />
                    <strong>
                      "Start your day with a healthy and well-planned meal"
                    </strong>
                    <br />
                    <br />
                  </p>
                  <button
                    className="btn btn-primary mt-sm-auto mt-md-auto mt-lg-auto pb-2 mx-0 mt-2"
                    type="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Meal Planner&nbsp;&nbsp;
                    <i
                      className="fas fa-arrow-circle-right"
                      data-bss-hover-animate="shake"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 mb-lg-5">
            <div className="col-md-6">
              <div className="card" style={{ overflow: "hidden" }}>
                <img
                  className="img-fluid card-img w-100 d-block"
                  src="/assets/img/pexels-karolina-grabowska-4498482.jpg"
                />
                <div className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small">
                  <h1 className="fw-bolder">Activity Tracker</h1>
                  <p
                    className="fw-bold pt-0 pb-0 mx-0 my-0"
                    style={{
                      borderLeftColor: "var(--bs-emphasis-color)",
                      color: "var(--bs-emphasis-color)",
                    }}
                  >
                    <br />
                    <strong>
                      "Doing daily activities maintain our health and keep us
                      fit"
                    </strong>
                    <br />
                    <br />
                  </p>
                  <button
                    className="btn btn-primary mt-sm-auto mt-md-auto mt-lg-auto mt-0 pb-2 mx-0"
                    type="button"
                    style={{
                      color: "var(--bs-body-color)",
                      fontWeight: "bold",
                    }}
                  >
                    Activity Tracker&nbsp; &nbsp;
                    <i
                      className="fas fa-arrow-circle-right"
                      data-bss-hover-animate="shake"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-lg-5">
              <div className="card" style={{ overflow: "hidden" }}>
                <img
                  className="img-fluid card-img w-100 d-block"
                  src="/assets/img/pexels-mart-production-8217434.jpg"
                />
                <div className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small">
                  <h1 className="fw-bolder">Water tracker</h1>
                  <p
                    className="fw-bold pt-0 pb-0 mx-0 my-0"
                    style={{
                      borderLeftColor: "var(--bs-emphasis-color)",
                      color: "var(--bs-body-bg)",
                    }}
                  >
                    <br />
                    <strong>
                      "You are not a Camel. So be hydrated and be healthy"
                    </strong>
                    <br />
                    <br />
                  </p>
                  <button
                    className="btn btn-primary mt-sm-auto mt-md-auto mt-lg-auto pb-2 my-2 mx-2"
                    type="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Water Tracker&nbsp; &nbsp;
                    <i
                      className="fas fa-arrow-circle-right"
                      data-bss-hover-animate="shake"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-start text-white bg-dark d-flex d-xxl-flex flex-row align-items-xxl-center">
        <div className="container py-4 py-lg-5 my-lg-0">
          <h2 className="fw-bold text-center text-muted mb-5">
            Choose your plan
          </h2>
          <div className="row gx-4 gy-4 row-cols-1 row-cols-md-4 d-flex d-xxl-flex flex-row justify-content-center align-items-xxl-center my-5">
            <div className="col">
              <div className="card text-dark pricing-card">
                <div
                  className="card-body p-4 px-3 px-lg-4 card"
                  style={{maxHeight: "352px",height: "233.4px"}}
                >
                  <h4 className="fs-3 fw-bold card-title">Plan 1</h4>
                  <h6 className="card-subtitle mb-2">Free</h6>
                  <p className="text-muted card-text pricing-description">
                    In this we provide the demo version of our services. We
                    offer 7 days free services.
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn border rounded-circle border-0"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right-short fs-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-dark pricing-card">
                <div className="card-body p-4 px-3 px-lg-4">
                  <h4 className="fs-3 fw-bold card-title">Plan 2</h4>
                  <h6 className="card-subtitle mb-2">
                    <span style={{color: "rgb(32, 33, 36)"}}>Rs-2.99k/month</span>
                  </h6>
                  <p className="text-muted card-text pricing-description">
                    Pellentesque fringilla hendrerit, blandit donec rutrum
                    curabitur praesent quisque. Rutrum tortor a, odio aenean
                    sociosqu venenatis. Velit senectus est.
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn border rounded-circle border-0"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right-short fs-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-dark pricing-card">
                <div className="card-body p-4 px-3 px-lg-4">
                  <h4 className="fs-3 fw-bold card-title">Plan 3</h4>
                  <h6 className="card-subtitle mb-2">
                    <span style={{color: "rgb(32, 33, 36)"}}>£6.99/month</span>
                  </h6>
                  <p className="text-muted card-text pricing-description">
                    Etiam donec aenean, aliquet eget aptent. Taciti auctor elit
                    commodo, blandit aliquet rhoncus quam. Luctus fermentum
                    habitasse malesuada, odio ante.
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn border rounded-circle border-0"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right-short fs-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col text-center">
              <p className="fs-5 fw-bold text-muted">
                What are you waiting for?
              </p>
              <h3 className="display-4 fw-bold mb-5">
                Diet Tracker is the new path to the healthy you!!!
              </h3>
              <button className="btn bg-white" type="button">
                Join our community
              </button>
            </div>
          </div>
          <div className="row row-cols-2 justify-content-start">
            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">Services</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="link-light" href="#">
                    Web design
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Development
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">About</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="link-light" href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Legacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">Help Center</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="link-light" href="#">
                    Support portal
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Help &amp; Docs
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">Careers</h3>
              <ul className="list-unstyled">
                <li>
                  <button
                    className="link-button"
                    href="#"
                  >
                    Job openings
                  </button>
                </li>
                <li>
                  <button
                    className="link-button" href="#"
                   
                  >
                    Employee success
                  </button>
                </li>
                <li>
                  <button
                    className="link-button"
                   href="#"
                  >
                    Benefits
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center pt-3">
            <p className="mb-0">Copyright © 2023Brand</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-facebook"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </li>
              <li className="list-inline-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-twitter"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </li>
              <li className="list-inline-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-instagram"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

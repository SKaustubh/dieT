import React from "react";

function App() {
  return (
    <>
        <nav className="navbar navbar-expand-md sticky-top bg-dark-subtle py-3" data-bs-theme="dark" style={{ boxShadow: '0px 0px', borderBottomWidth: '122px', borderBottomColor: 'rgb(160,208,255)', borderLeftColor: 'transparent', background: 'transparent' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span data-bss-parallax-bg="true" style={{ backgroundImage: 'url("/assets/img/pexels-ivan-samkov-5799692.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}>DT</span>
        </a>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon me-xxl-0 ms-0"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link active" data-bss-hover-animate="pulse" href="#Personal">Personal</a></li>
            <li className="nav-item"><a className="nav-link active" data-bss-hover-animate="pulse" href="#Business">Business</a></li>
            <li className="nav-item"><a className="nav-link active" data-bss-hover-animate="pulse" href="#Community">Community</a></li>
          </ul>
          <button className="btn btn-primary me-3" data-bss-hover-animate="pulse" type="button" style={{ marginRight: '10px', color: 'rgb(255, 249, 249)', background: 'var(--bs-gray-800)', borderRadius: '25px', borderTopRightRadius: '158px', borderBottomLeftRadius: '142px', '--bs-body-color': '#040404', borderWidth: '0.8px', borderColor: 'rgb(255, 255, 255)' }}>Login</button>
          <button className="btn btn-primary ms-0 me-4" data-bss-hover-animate="pulse" type="button" style={{ marginLeft: '-2px', marginRight: '12px', borderTopLeftRadius: '94px', borderColor: 'var(--bs-navbar-brand-color)', background: 'var(--bs-secondary-border-subtle)', borderBottomRightRadius: '90px' }}>SignUp</button>
        </div>
      </div>
    </nav>
      <section className="pe-0 pb-0 pt-0 mt-0 mb-0">
        <img
          className="img-fluid d-md-none"
          src="/assets/img/pexels-ivan-samkov-5799692.jpg"
          alt="Header "
        />
        <div
          data-bss-scroll-zoom="true"
          data-bss-scroll-zoom-speed="1"
          style={{
            backgroundImage: `url('/assets/img/pexels-ivan-samkov-5799692.jpg')`,
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
                "Unlock your full potential, One Calorie at a time "
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
                  alt="Calorie Tracker"
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
                  src="/assets/img/pexels-mikhail-nilov-6908095.jpg"
                  width="496"
                  height="744"
                  alt="Nutrition"
                />
                <div
                  className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small"
                  style={{ width: "100%" }}
                >
                  <h1 className="fw-bolder">Nutrition</h1>
                  <p
                    className="fw-bold text-start pt-0 pb-0 mx-0 my-0 me-0 ps-0 ms-0"
                    style={{
                      color: "var(--bs-emphasis-color)",
                      borderColor: "var(--bs-emphasis-color)",
                    }}
                  >
                    <br />
                    <strong>
                      "Count the calorie you need to improve your diet"
                    </strong>
                    <br />
                    <br />
                  </p>
                  <button
                    className="btn btn-primary mt-sm-auto mt-md-auto mt-lg-auto pb-2 mx-0 mt-2"
                    type="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Nutrition&nbsp;&nbsp;
                    <i
                      className="fas fa-arrow-circle-right"
                      data-bss-hover-animate="shake"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-11">
              <div
                className="card card-big small-card-sm"
                style={{ overflow: "hidden" }}
              >
                <img
                  className="card-img w-100 d-block"
                  src="/assets/img/pexels-polina-tankilevitch-6985279.jpg"
                  width="1224"
                  height="1224"
                  alt="Meal Plans"
                />
                <div
                  className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small"
                  style={{ width: "100%" }}
                >
                  <h1 className="fw-bolder">Meal Plans</h1>
                  <p
                    className="fw-bold text-start pt-0 pb-0 mx-0 my-0 me-0 ps-0 ms-0"
                    style={{
                      borderColor: "var(--bs-emphasis-color)",
                      color: "var(--bs-emphasis-color)",
                    }}
                  >
                    <br />
                    <strong>
                      "Get personalized meal plans for a healthy lifestyle"
                    </strong>
                    <br />
                    <br />
                  </p>
                  <button
                    className="btn btn-primary mt-sm-auto mt-md-auto mt-lg-auto pb-2 mx-0 mt-2"
                    type="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Meal Plans&nbsp;&nbsp;
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
      <footer className="py-4">
        <div className="container">
          <div className="row me-md-0 mt-md-4 px-md-5 pt-md-2">
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
              <a
                className="d-md-none"
                href="/"
                style={{
                  borderRadius: "102px",
                  borderStyle: "hidden",
                  backgroundImage: "url('/assets/img/Group%201%20(3).jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></a>
              <a className="d-none d-md-flex" href="/">
                <img
                  className="rounded-circle img-fluid d-flex w-100"
                  src="/assets/img/Group%201%20(3).jpg"
                  width="116"
                  height="116"
                  alt="Brand"
                />
              </a>
              <div>
                <h1 className="h3 fw-bold" data-aos="slide-up">
                  Diet Tracker
                </h1>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 d-flex flex-column align-items-lg-center mt-5 mt-md-0">
              <h5 className="mb-3 mt-4 mt-lg-5">Explore</h5>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="Personal">
                    Personal
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Community">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column mt-5 mt-lg-0">
              <h5 className="mb-3">Follow Us</h5>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fab fa-facebook fa-lg me-2"></i>Facebook
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fab fa-twitter fa-lg me-2"></i>Twitter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fab fa-instagram fa-lg me-2"></i>Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 mt-4 mt-md-0">
              <h5 className="mb-3">Plans</h5>
              <button className="btn btn-primary" type="button">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

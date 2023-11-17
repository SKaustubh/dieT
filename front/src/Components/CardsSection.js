import React from 'react'

function CardsSection() {
  return (
    <>
        
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
        <div className="col-xxl-12">
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
              className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small bigDiv"
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
              className="card-img-overlay d-flex flex-column align-items-start px-5 py-5 ms-0 div-small bigDiv"
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
  </>
  )
}

export default CardsSection
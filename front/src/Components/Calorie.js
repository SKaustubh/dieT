import React, { useState, useEffect } from 'react'

const Calorie = () => {


    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/api/data');
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setApiData(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);





    return (
        <section
            className="text-center d-flex align-items-xxl-center"
            data-bss-scroll-zoom="true"
            data-bss-scroll-zoom-speed="1"
            style={{
                background: 'url("/assets/img/pexels-ekaterina-bolovtsova-6193131.jpg")',
                backgroundSize: 'cover',
            }}
        >
            <div className="container py-lg-5 my-lg-5 px-lg-5">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="card m-auto" style={{ maxWidth: '850px' }}>
                                    <div className="card-body">
                                        <form className="d-flex align-items-center">
                                            <i
                                                className="fas fa-search d-none d-sm-block h4 text-body m-0"
                                                style={{
                                                    fontSize: '26px',
                                                    paddingLeft: '10px',
                                                    paddingRight: '10px',
                                                }}
                                            ></i>
                                            <input
                                                className="form-control form-control-lg flex-shrink-1 form-control-borderless"
                                                type="search"
                                                placeholder="Search topics or keywords"
                                                name="searchbar"
                                                style={{
                                                    marginLeft: '9px',
                                                    marginRight: '17px',
                                                }}
                                            />
                                            <button
                                                className="btn btn-success btn-lg"
                                                type="submit"
                                                style={{
                                                    marginLeft: '-7px',
                                                    marginRight: '-7px',
                                                    paddingLeft: '17px',
                                                    paddingRight: '17px',
                                                }}
                                            >
                                                Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4 col-xxl-5">
                        <div>
                            <h1
                                style={{
                                    fontSize: '60px',
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    color: 'var(--bs-emphasis-color)',
                                }}
                            >
                                Nutritional Values
                            </h1>
                            <h1
                                style={{
                                    fontSize: '33px',
                                    textAlign: 'left',
                                    fontStyle: 'italic',
                                    fontWeight: 'bold',
                                    background: 'var(--bs-body-bg)',
                                }}
                            >
                                Serving Size per 100/grams
                            </h1>
                        </div>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Calories:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Serving_size_g:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Fat_total_g:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Protien_g:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Sodium_mg:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Potassium_mg:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Cholesterol_mg:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Carbohydrate_total_g:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">fiber_g:</li>
                        </ul>
                        <ul
                            className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                            style={{
                                borderTopStyle: 'none',
                                borderRightStyle: 'none',
                                borderBottomStyle: 'solid',
                                borderLeftStyle: 'none',
                            }}
                        >
                            <li className="list-inline-item">Sugar_g:</li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-xl-4 col-xxl-6">
                        <h1
                            style={{
                                fontSize: '47px',
                                textAlign: 'left',
                                fontWeight: 'bold',
                                color: 'var(--bs-body-color)',
                                fontStyle: 'italic',
                                borderBottomColor: 'var(--bs-body-bg)',
                                position: 'sticky',
                                display: 'inline',
                            }}
                            className="my-lg-0 py-lg-1 pt-lg-5 pb-lg-5 me-lg-0 pe-lg-5"
                        >
                            To Burn 100 calories you will Have To
                        </h1>
                        <div
                            className="text-start d-flex d-sm-flex d-xxl-flex flex-row flex-shrink-1 justify-content-start align-content-around align-self-start align-items-xxl-center ms-lg-0 pe-lg-5 icon_di"
                        >
                            <div>
                                <img
                                    className="img-fluid"
                                    src="/assets/img/running.png"
                                    width="199"
                                    height="199"
                                    alt="running"
                                />
                            </div>
                            <div className="inside_icon_di">
                                <h1
                                    style={{
                                        color: 'var(--bs-emphasis-color)',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Jog
                                </h1>
                                <p className="ms-lg-0">
                                    you will have to do jog for&nbsp;<span
                                        style={{
                                            color: 'var(--bs-body-color)',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        10 minutes
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                        <div
                            className="text-start d-flex d-sm-flex d-xxl-flex flex-row flex-shrink-1 justify-content-start align-content-around align-self-start align-items-xxl-center ms-lg-0 pe-lg-5 icon_di mt-lg-0 pt-lg-5"
                        >
                            <div>
                                <img
                                    className="img-fluid"
                                    src="/assets/img/yoga-pose.png"
                                    width="199"
                                    height="199"
                                    alt="yoga pose"
                                />
                            </div>
                            <div className="inside_icon_di">
                                <h1
                                    style={{
                                        color: 'var(--bs-emphasis-color)',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Power Yoga
                                </h1>
                                <p className="ms-lg-0">
                                    you will have to Power yoga for&nbsp;<span
                                        style={{
                                            color: 'var(--bs-body-color)',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        10 minutes
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                        <div
                            className="text-start d-flex d-sm-flex d-xxl-flex flex-row flex-shrink-1 justify-content-start align-content-around align-self-start align-items-xxl-center ms-lg-0 pe-lg-5 icon_di mt-lg-0 pt-lg-5"
                        >
                            <div>
                                <img
                                    className="img-fluid"
                                    src="/assets/img/strength.png"
                                    width="199"
                                    height="199"
                                    alt="strength"
                                />
                            </div>
                            <div className="inside_icon_di">
                                <h1
                                    style={{
                                        color: 'var(--bs-emphasis-color)',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Gym Workout
                                </h1>
                                <p className="ms-lg-0">
                                    you will have to lift weight for&nbsp;<span
                                        style={{
                                            color: 'var(--bs-body-color)',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        10 minutes
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                        <div
                            className="text-start d-flex d-sm-flex d-xxl-flex flex-row flex-shrink-1 justify-content-start align-content-around align-self-start align-items-xxl-center ms-lg-0 pe-lg-5 icon_di mt-lg-0 pt-lg-5"
                        >
                            <div>
                                <img
                                    className="img-fluid"
                                    src="/assets/img/walking.png"
                                    width="199"
                                    height="199"
                                    alt="walking"
                                />
                            </div>
                            <div className="inside_icon_di">
                                <h1
                                    style={{
                                        color: 'var(--bs-emphasis-color)',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Brisk Walk
                                </h1>
                                <p className="ms-lg-0">
                                    you will have to jog for&nbsp;<span
                                        style={{
                                            color: 'var(--bs-body-color)',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        10 minutes
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Calorie
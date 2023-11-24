import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from 'chart.js/auto';


const Calorie = () => {


    const [query, setQuery] = useState('');
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const apiUrl = 'https://api.api-ninjas.com/v1/nutrition?query=';
        const apiKey = '6OCvMgrbijtvEPGpuN+eHQ==qiCbcLxJFLawzmGd';

        try {
            const response = await axios.get(apiUrl + query, {
                headers: { 'X-Api-Key': apiKey },
            });

            setApiData(response.data);

            console.log(response.data);
            setError(null);
        } catch (err) {
            setError('Oops! There was an error');
            console.error(err);
        }
    };

    useEffect(() => {
        if (apiData) {
            const ctx = document.getElementById('myChart');

            if (ctx) {
                const myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['carbohydrates', 'Cholesterol', 'Saturated fat', 'Total Fat', 'Fiber Content', 'Potassium', 'Protein', 'Sodium', 'Sugar'],
                        datasets: [{
                            label: `Nutritional values of ${apiData[0].name}`,
                            data: [
                                apiData[0].carbohydrates_total_g,
                                apiData[0].cholesterol_mg,
                                apiData[0].fat_saturated_g,
                                apiData[0].fat_saturated_g,
                                apiData[0].fat_total_g,
                                apiData[0].potassium_mg,
                                apiData[0].protein_g,
                                apiData[0].sodium_mg,
                                apiData[0].sugar_g,
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

                // Cleanup the chart on component unmount
                return () => myChart.destroy();
            }
        }
    }, [apiData]);



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
                                        {/* form starts here */}
                                        <form className="d-flex align-items-center" method="POST" onSubmit={handleFormSubmit}>
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
                                                type="text"
                                                placeholder="Search topics or keywords"
                                                name="searchbar"
                                                value={query}
                                                onChange={handleQueryChange}
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
                                        {/* forms ends here */}
                                        {apiData && (
                                            apiData === 'oops! There was an error' ? (
                                                <div className="alert alert-warning">
                                                    Oh no! Something went wrong. Please try again sometime.
                                                </div>
                                            ) : (
                                                <div>
                                                    <h1>
                                                        {apiData[0].name} has a total of <strong>{apiData[0].calories} Calories</strong>
                                                        {apiData[0].calories > 200 && <img src="/assets/img/shocked.png" alt="Shocked" className="img-responsive" />}
                                                    </h1>

                                                    {apiData[0].sodium_mg > 1000 && (
                                                        <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                                                            <div>
                                                                This food contains a high amount of sodium. High Sodium causes severe dehydration and water retention.
                                                            </div>
                                                        </div>
                                                    )}

                                                    {apiData[0].sugar_g > 100 && (
                                                        <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                                                            <div>
                                                                This food contains a high amount of sugar. Sugar causes insulin spikes and is a major cause of obesity.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        )}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {apiData && apiData.length > 0 ? (
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
                            {apiData && apiData.length > 0 ? (
                                <>

                                    <ul
                                        className="list-inline font-monospace text-uppercase fs-3 fw-semibold text-start"
                                        style={{
                                            borderTopStyle: 'none',
                                            borderRightStyle: 'none',
                                            borderBottomStyle: 'solid',
                                            borderLeftStyle: 'none',
                                        }}
                                    >

                                        <li>
                                            carbohydrates:
                                            <span className="float-end">{apiData[0].carbohydrates_total_g}</span>
                                        </li>

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

                                        <li>Cholesterol: <span className="float-end">{apiData[0].cholesterol_mg}</span></li>

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

                                        <li>Saturated fat: <span className="float-end">{apiData[0].fat_saturated_g}</span></li>

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

                                        <li>Total Fat: <span className="float-end">{apiData[0].fat_total_g}</span></li>

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

                                        <li >
                                            Fiber content:
                                            <span className="float-end">{apiData[0].fiber_g}</span>
                                        </li>

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

                                        <li >Potassium :<span className="float-end">{apiData[0].potassium_mg}</span></li>

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

                                        <li>Protein: <span className="float-end">{apiData[0].protein_g}</span></li>

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

                                        <li>Sodium:<span className="float-end">{apiData[0].sodium_mg}</span></li>
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
                                        <li>Sugar: <span className="float-end">{apiData[0].sugar_g}</span></li>

                                    </ul>


                                </>
                            ) : (
                                <h1
                                    style={{
                                        fontSize: '33px',
                                        textAlign: 'left',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        background: 'var(--bs-body-bg)',
                                    }}
                                >
                                    No Data Found
                                </h1>
                            )}
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
                                To Burn {apiData[0].calories} calories you will Have To
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
                                            {(apiData[0].calories / 378 * 60).toFixed(0)} minutes
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
                                            {(apiData.calories / 223 * 60).toFixed(0)}  minutes
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
                                            {(apiData.calories / 483 * 60).toFixed(0)} minutes
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
                                            {(apiData[0].calories / 294 * 60).toFixed(0)} minutes
                                        </span>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <canvas id="myChart" width="400" height="400"></canvas>
                        </div>
                    </div>
                ) : (
                    <h1
                        style={{
                            fontSize: '33px',
                            textAlign: 'left',
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            background: 'var(--bs-body-bg)',
                        }}
                    >
                        No Data Found
                    </h1>
                )}
            </div>
        </section>
    )
}

export default Calorie
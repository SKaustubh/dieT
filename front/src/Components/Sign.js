import React from 'react'

function Sign() {
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
                                <form className="text-center my-lg-0 py-lg-0" method="post">
                                    <div className="text-start d-xxl-flex justify-content-center align-items-end align-items-xxl-center mb-3"><input className="form-control-plaintext align-self-center me-lg-0" type="text" value="Name" readonly="" style={{
                                        width: '181.8px',
                                        height: '34.6px',
                                        fontSize: '23px',
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                    }} />
                                        <div className="text-start d-xxl-flex"><input className="form-control" type="text" name="Name" placeholder="e.g it's Kashish" required="" minlength="0-5" maxlength="20" /></div>
                                    </div>
                                    <div className="text-start d-xxl-flex justify-content-center align-items-end align-items-xxl-center mb-3"><input className="form-control-plaintext align-self-center me-lg-0" type="text" value="Email" readonly=""
                                        style={{
                                            width: '181.8px',
                                            height: '34.6px',
                                            fontSize: '23px',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }} />
                                        <div className="text-start d-xxl-flex"><input className="form-control" type="email" name="Email" placeholder="kashish@tuiabes.87.com" required="" minlength="5" inputmode="email" autocomplete="on" /></div>
                                    </div>
                                    <div className="text-start d-xxl-flex justify-content-center align-items-end align-items-xxl-center mb-3"><input className="form-control-plaintext align-self-center me-lg-0" type="text" value="Password" readonly=""
                                        style={{
                                            width: '181.8px',
                                            height: '34.6px',
                                            fontSize: '23px',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }} />
                                        <div className="text-start d-xxl-flex"><input className="form-control" type="password" name="password" placeholder="your password" autocomplete="off" minlength="5" maxlength="15" required="" /></div>
                                    </div>
                                    <div className="text-start d-xxl-flex justify-content-center align-items-end align-items-xxl-center mb-3"><input className="form-control-plaintext align-self-center me-lg-0" type="text" value="Phone Number" readonly=""
                                        style={{
                                            width: '181.8px',
                                            height: '34.6px',
                                            fontSize: '23px',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }} />
                                        <div className="text-start d-xxl-flex"><input className="form-control" type="tel" name="mobile number" placeholder="your mobile number" minlength="10" /></div>
                                    </div>
                                    <div className="text-start d-xxl-flex justify-content-center align-items-end align-items-xxl-center mb-3"><input className="form-control-plaintext align-self-center me-lg-0" type="text" value="Address" readonly=""
                                        style={{
                                            width: '181.8px',
                                            height: '34.6px',
                                            fontSize: '23px',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }} />
                                        <div className="text-start d-xxl-flex"><input className="form-control" type="text" name="Address" placeholder="Address" required="" minlength="0-5" maxlength="20" /></div>
                                    </div>
                                    <div className="text-start d-flex d-xxl-flex justify-content-center align-items-end justify-content-xxl-start align-items-xxl-center mb-3"><input className="form-control-plaintext align-self-center me-lg-0" type="text" value="Gender" readonly=""
                                        style={{
                                            width: '181.8px',
                                            height: '34.6px',
                                            fontSize: '23px',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                        }} />
                                        <div className="text-start d-xxl-flex">
                                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" /><label className="form-check-label me-lg-3" for="formCheck-1">Male</label></div>
                                            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-2" /><label className="form-check-label" for="formCheck-2">Female</label></div>
                                        </div>
                                    </div>
                                    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Register</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sign
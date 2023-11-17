import React from 'react'

function Login() {
  return (
    <section data-bss-scroll-zoom="true" data-bss-scroll-zoom-speed="1" className="position-relative py-4 py-xl-5" style={{background: 'url("/assets/img/pexels-vanessa-loring-5966431.jpg")'}}>
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
                            <form className="text-center" method="post">
                                <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="e.g. kaustubh2@gh1m39.yahoo.in" inputmode="email" minlength="5" required="" /></div>
                                <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" minlength="5" maxlength="12" required="" autofocus="" /></div>
                                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Login</button></div>
                                <p className="fw-semibold text-muted">Forgot your password?</p>
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
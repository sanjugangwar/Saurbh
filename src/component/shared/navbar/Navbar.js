import React, { useEffect } from 'react'

const Navbar = () => {

    useEffect(() => {

    }, [localStorage.getItem('auth')])

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" style={{ backgroundColor: "#e6d0e6" }}>
                <div className="container-fluid ms-5">
                    <a className="navbar-brand text-primary fw-bold fs-2 ps-5" href="#"> <i class="text-danger bi bi-balloon-heart-fill"></i> MonoLife
                    
                    <span className='text-danger'>InSurance</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-around ms-5" id="navbarSupportedContent">
                       
                            
                                <div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-3 ps-5">
                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/admin">Home</a>
                                        </li>
                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/service">Our Services</a>
                                        </li>

                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/about">About Us</a>
                                        </li>
                                        <li className="nav-item ps-5">
                                            <a className="nav-link text-dark" href="/contact">Contact us</a>
                                        </li>

                                    </ul>

                                </div>
                               
                            
                                   
                        
                        <div className='d-flex '>
                            {
                                localStorage.getItem('auth') == null ? <a className='btn btn-outline-primary px-3 fw-bold' href='/login'>Login</a> :
                                    <a className='btn btn-outline-primary px-3 fw-bold' href='/logout' onClick={
                                        (e) => {
                                            localStorage.clear();
                                        }
                                    }>Logout</a>
                            }
                        </div>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar
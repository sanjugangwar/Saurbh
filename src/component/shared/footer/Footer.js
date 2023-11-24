import React from 'react'

const Footer = () => {
    return (
        <div >
            <footer className="text-center text-lg-start">
              
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                 
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    
                </section>
              
               
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                       
                        <div className="row mt-3">
                          
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                               
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>MonoLifeInSurance
                                </h6>
                                <p>
                                "Guardians of Your Peace, Shielding Your Tomorrow."
                                </p>
                            </div>
                          

                           
                            
                            
                            <div className="col-md-5 col-lg-2 col-xl-2 mx-auto mb-4">
                               
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Plans</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About Us</a>
                                </p>
                                
                            </div>
                           
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                             
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Gurgaon</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    mono@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                       
                        </div>
                     
                    </div>
                </section>
             
                <div className="text-center p-4 text-dangerfs-3" style={{backgroundColor: "#ebf4fd"}}>
                    2023 © MonoLifeInSurance
                    {/* <a className="text-reset fw-bold" href="/"> MonoSurance</a> */}
                </div>
             
            </footer>
           
        </div>
    )
}

export default Footer
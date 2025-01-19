import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container mt-2 ">
                <div className="card bg-primary-subtle">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="card ">
                                    <div className="card-body text-center bg-secondary text-light">
                                        <h4><i class="fa-solid fa-map-location-dot"></i> Map</h4>
                                    </div>
                                    <div className="card-body bg-secondary-subtle">
                                        <div className="mapouter" style={{ position: "relative", textAlign: "right", width: "400px", height: "300px" }}>
                                            <div className="gmap_canvas" style={{ overflow: "hidden", background: "none!important", width: "400px", height: "300px" }}>
                                                <iframe
                                                    className="gmap_iframe"
                                                    frameBorder="0"
                                                    scrolling="no"
                                                    marginHeight="0"
                                                    marginWidth="0"
                                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Vel Typewriting Institute 370, Main Rd, Tittakudi, Tamil Nadu 606106&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                                    style={{ width: "500px", height: "400px" }}
                                                    title="Google Map"
                                                ></iframe>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body text-center bg-secondary text-light">
                                        <h4><i class="fa-solid fa-location-dot"></i> Address</h4>
                                    </div>
                                    <div className="card-body text-center fs-4 bg-secondary-subtle">
                                        370, Main Rd, Tittakudi,<br />
                                        Tamil Nadu 606106
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body text-cneter bg-secondary text-light">
                                        <h4>Contact</h4>
                                    </div>
                                    <div className="card-body bg-secondary-subtle">
                                    <i class="fa-solid fa-phone fs-4 "> </i> <span className='fs-4'>8667660688</span>
                                    </div>
                                    <div className="card-body bg-secondary-subtle">
                                    <i class="fa-regular fa-envelope fs-4"></i>
                                    </div>
                                    <div className="card-body bg-secondary-subtle">
                                    <i class="fa-brands fa-whatsapp fs-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
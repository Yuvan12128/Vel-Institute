import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="container mt-2">
                    <div className="card bg-primary-subtle">
                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col">
                                    <h2>Contact Us</h2><hr />
                                    <div className="row">
                                        <div className="col">
                                            <h4>Sir Name </h4>
                                            <p>Vel Type Writing Instutition</p>
                                            <p>Address</p>

                                        </div>
                                        <div className="col">
                                            <p>Our Techncal Support is Available by phone or e-mail from 7 AM to 8 PM.</p>
                                            <i class="fa-solid fa-phone"></i> 8667660688
                                            <br />

                                            <i class="fa-regular fa-envelope"></i>
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

export default ContactUs
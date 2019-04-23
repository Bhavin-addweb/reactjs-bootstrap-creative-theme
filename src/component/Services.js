import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faLaptopCode, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'

const Services = ({ myRef }) => {
    return (
        <section ref={myRef} className="page-section" id="services">
            <div className="container">
                <h2 className="text-center mt-0">At Your Service</h2>
                <hr className="divider my-4" />
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FontAwesomeIcon icon={faGem} size="4x" className="text-primary mb-4" />
                            <h3 className="h4 mb-2">Sturdy Themes</h3>
                            <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FontAwesomeIcon icon={faLaptopCode} size="4x" className="text-primary mb-4" />
                            <h3 className="h4 mb-2">Up to Date</h3>
                            <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FontAwesomeIcon icon={faGlobe} size="4x" className="text-primary mb-4" />
                            <h3 className="h4 mb-2">Ready to Publish</h3>
                            <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FontAwesomeIcon icon={faHeart} size="4x" className="text-primary mb-4" />
                            <h3 className="h4 mb-2">Made with Love</h3>
                            <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
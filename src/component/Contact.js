import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ myRef }) => {
    return (
        <section ref={myRef} className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider my-4" />
                        <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center">
                        <FontAwesomeIcon icon={faPhone} size="3x" className="text-primary mb-3 text-muted" />
                        <div>+1 (202) 555-0149</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-primary mb-3 text-muted" />
                        <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
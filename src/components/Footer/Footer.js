import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../images/Medicare-eye-clinic-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="ft-img mb-4">
              <img className="h-25" src={img} alt="" />
            </div>
                <hr/>
            <Container>
                <Row>
                    <Col>
                         <div className="mt-4">
                            <h2 className="mb-4">Contact Us</h2>
                            <h5 className="mt-2">Visit us anytime</h5>
                            <p><i class="fas fa-map-marker-alt ft-icon"></i>  Level-4, 34, Awal Centre, Banani,</p>
                            <p>Dhaka, Bangladesh</p>

                            <h5 className="mt-4">Call Us</h5>
                            <p className=""><i class="fas fa-phone-alt ft-icon"></i> +1800-208-6835</p>

                            <h5 className="mt-2">Send us an email</h5>
                            <p className="ml-2"><i class="fas fa-envelope ft-icon"></i>  Official: abc@gmail.com</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                             <h2 className="m-4">About Us</h2>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#home">Our Services</a></li>
                                <li><a href="#home">Appointment</a></li>
                                <li><a href="#home">Location</a></li>
                                <li><a href="#home">Blog</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                    <div className="mt-4 footer-right">
                        <h2 className="mb-4">Social Network</h2>
                            <h5 className="mt-2">Facebook</h5>
                            <p><i class="fab fa-facebook ft-icon"></i>www.facebook.com/medicarehgf</p>

                            <h5 className="mt-2">Twitter</h5>
                            <p className=""><i class="fab fa-twitter ft-icon"></i>#WeCare</p>

                            <h5 className="mt-2">Instagram</h5>
                            <p className="ml-2"><i class="fab fa-instagram ft-icon"></i>www.instagram.com/medicarebvd</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
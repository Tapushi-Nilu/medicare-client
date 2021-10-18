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
                            <p><i class="fas fa-map-marker-alt"></i>  Level-4, 34, Awal Centre, Banani,</p>
                            <p>Dhaka, Bangladesh</p>

                            <h5 className="mt-4">Call Us</h5>
                            <p className=""><i class="fas fa-phone-alt"></i> +1800-208-6835</p>

                            <h5 className="mt-2">Send us an email</h5>
                            <p className="ml-2"><i class="fas fa-envelope"></i>  Official: abc@gmail.com</p>
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
                    <Col><div className="mt-4">
                        <h2 className="mb-4">Facebook</h2>
                            <h5 className="mt-2">Visit us anytime</h5>
                            <p><i class="fab fa-facebook"></i>  Level-4, 34, Awal Centre, Banani,</p>
                            <p>Dhaka, Bangladesh</p>

                            <h5 className="mt-4">Twitter</h5>
                            <p className=""><i class="fab fa-twitter"></i> +1800-208-6835</p>

                            <h5 className="mt-2">Instagram</h5>
                            <p className="ml-2"><i class="fab fa-instagram"></i>  Official: abc@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
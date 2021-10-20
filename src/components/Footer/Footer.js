import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../images/Medicare-eye-clinic-logo.png'
import './Footer.css'

const Footer = () => {
    return (
      <>
        <div className="footer">
            <div className="ft-img mb-4">
              <img className="h-25" src={img} alt="" />
            </div>
                <hr/>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                         <div className="mt-4">
                            <h2 className="mb-5">Contact Us</h2>
                             
                            <div className="footer-lt">
                                <i class="fas fa-map-marker-alt ft-icon"></i>
                                <div className="ft-t">
                                <h5 className="mt-2">Visit us anytime</h5>
                                <p>Level-4, 34, Awal Centre, Banani,<br/></p>
                                </div>
                            </div>

                            <div className="footer-lt">
                                 <i class="fas fa-phone-alt ft-icon mt-2"></i>
                                <div className="ft-t">
                                <h5 className="mt-4">Call Us</h5>
                                <p className=""> +1800-208-6835</p>
                                </div>
                            </div>


                            <div className="footer-lt">
                              <i class="fas fa-envelope ft-icon"></i> 
                                <div className="ft-t">
                                <h5 className="mt-2">Send us an email</h5>
                                <p className="ml-2"> Official: abc@gmail.com</p>
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div>
                        <h2 className="m-4 mb-5">About Us</h2>   
                        <ul className="footer-md">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#home">Our Services</a></li>
                            <li><a href="#home">Appointment</a></li>
                            <li><a href="#home">Location</a></li>
                            <li><a href="#home">Blog</a></li>
                        </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                    <div className="mt-4 footer-right">
                        <h2 className="mb-5">Social Network</h2>


                            <div className="footer-lt">
                            <i class="fab fa-facebook ft-icon"></i>
                                <div className="ft-t">
                                <h5 className="mt-2">Facebook</h5>
                                <p>www.facebook.com/medicarehgf</p>
                                </div>
                            </div>

                            <div className="footer-lt">
                            <i class="fab fa-twitter ft-icon"></i>
                                <div className="ft-t">
                                <h5 className="mt-4">Twitter</h5>
                                <p className=""> #WeCare</p>
                                </div>
                            </div>


                            <div className="footer-lt">
                            <i class="fab fa-instagram ft-icon"></i> 
                                <div className="ft-t">
                                <h5 className="mt-2">Instagram</h5>
                                <p className="ml-2"> www.instagram.com/medicarebvd</p>
                                </div>
                            </div>   
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
                   <div className="text-center p-3 bg-dark text-white">Copyright by 2018. All rights reserved.</div>
      
      </>
    );
};

export default Footer;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Servicemain from '../Servicemain/Servicemain';
import './Home.css'

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
      
      <div className="home-p">
      <Container>
                <Row>
                    <Col>
                        <div className="d-flex item">
                            <h2>01.</h2>
                            <div>
                                <h4>Cornea Services</h4>
                                <p>Visual acuity test sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                             </div>   
                        </div>
                    </Col>
                    <Col>
                    
                    <div className="d-flex item">
                            <h2>02.</h2>
                            <div>
                                <h4>Retina Services</h4>
                                <p>Non-contact Tonometer & Tonopen test adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                             </div>   
                        </div>
                    </Col>
                    <Col>
                    <div className="d-flex item">
                            <h2>03.</h2>
                            <div>
                                <h4>Glaucoma Services</h4>
                                <p>Retinoscopy & Refraction amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                             </div>   
                        </div>
                    </Col>
                </Row>
            </Container>
      </div>
            <Servicemain></Servicemain>
        </div>
    );
};

export default Home;
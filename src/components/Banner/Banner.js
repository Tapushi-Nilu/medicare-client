import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import img1 from '../images/slider.jpg';
import img2 from '../images/slider3.jpg';
import img3 from '../images/slider5.jpg'

const Banner = () => {
    return (

           <Container fluid className="main-banner">
                <Row>
                    <Col className="m-0 p-0">
                        <div className="banner-left">
                            <h1><span className="later">O</span>ptometrist & Eye Care Specialist Services</h1>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy proposition.</p>
                            <Link to='/contact'><button className="banner-btn">Contact Us</button></Link>
                        </div>
                    </Col>

                    <Col className="m-0 p-0">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 s-img"
                                src={img1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 s-img"
                                src={img2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 s-img"
                                src={img3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container> 
        
    );
};

export default Banner;
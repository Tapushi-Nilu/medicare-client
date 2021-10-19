import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../images/img-03.jpg';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact-top text-center">
                <h6>GET IN TOUCH</h6>
                <h1>WE ARE OPEN TO ALL <span className="t-bold">SUGGESTIONS <br/> 
                FROM OUR AUDIENCE.</span></h1>
                <p>Come and visit our quarters or simply send us an email anytime you want consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            
            <div className="">
             <Container>
                <Row>
                    <Col>
                        <div className="d-flex item-c">
                            <h2><i className="fas fa-headphones-alt"></i></h2>
                            <div>
                                <h4>Phone</h4>
                                <p>Phone 01: + 1800 562 2487 <br/>Phone 02: + 3215 546 8975</p>
                             </div>   
                        </div>
                    </Col>
                    <Col>
                    
                    <div className="d-flex item-c">
                            <h2><i className="fas fa-map-marker-alt"></i></h2>
                            <div>
                                <h4>Address</h4>
                                <p>351 Montreal Ave, Staten <br/> Island, NY 10306</p>
                             </div>   
                        </div>
                    </Col>
                    <Col>
                    <div className="d-flex item-c">
                            <h2><i class="far fa-envelope-open"></i></h2>
                            <div>
                                <h4>Email</h4>
                                <p>info-example@optico.com <br/>
support@optico.com</p>
                             </div>   
                        </div>
                    </Col>
                </Row>
            </Container>
      </div>    


            <div>
            <Container className="contact-bt">
                <Row>
                    <Col sm={5}>
                        <img src={img} alt="" />                       
                    </Col>
                    <Col sm={7}>                       
                        <div className="py-5">
                            <div className="contact-details">
                                <h5>Please call <span className="num-c">+ 1800383 88 90</span> if urgent.</h5>
                                <p>your personal case manager will ensure that you receive the best possible care</p>
                            </div>
                            <form className="py-3">
                            <div className="from-bt">
                            <input type="text" placeholder="Name SurName" />
                             <input type="email" placeholder="Email" />
                            </div>

                             <br/>
                             <div className="from-bt">
                             <input type="text" placeholder="Phone" />
                             <input type="text" placeholder="Appointment Time" />
                             </div>
                            </form>
                            <button className="fm-btn">Make Appointment</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
};

export default Contact;
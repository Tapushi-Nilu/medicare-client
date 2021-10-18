import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const {id, name, img, decs} = props.service;

    return (
        <div className="service">
            <Col>
                <Card>
                    <Card.Img className="w-100" variant="top" src={img} />
                    <Card.Body className="c-body">
                        <Card.Title className="my-3">{name}</Card.Title>
                        <Card.Text className="c-des">
                        <p>{decs}</p>
                        </Card.Text>

                       <div className="cart-ft">
                           <ul className="c-icon">
                               <li><i class="fab fa-facebook"></i></li>
                               <li><i class="fab fa-twitter"></i></li>
                               <li><i class="fab fa-instagram"></i></li>
                           </ul>
                            <Link to={`/booking/${id}`}><button className="btn-s">Read More <i class="fa fa-arrow-circle-right mx-2"></i></button></Link>
                       </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
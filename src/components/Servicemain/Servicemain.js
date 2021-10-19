import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Servicemain = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data=> setServices(data))
    }, []);
    return (
        <div className="my-5">
            
            <div className="text-center services-title">
                <p>Your vision is our vision</p>
                <h1>A wide range of <br/> <span className="text-b">Optometry services</span></h1>
            </div>


                <Container>
                        <Row md={3} className="g-4">
                            {
                                services.map( service => <Service
                                     key={service.id} 
                                     service={service}
                                     ></Service>)
                            }
                        </Row>
                </Container>
        </div>
    );
};

export default Servicemain;
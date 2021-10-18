import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data=> setServices(data))
    }, []);


    return (
        <>
           <div className="main-container">

                <div className="text-center services-title">
                    <p>Your vision is our vision</p>
                    <h1>A wide range of <br/> <span className="text-b">Optometry services</span></h1>
                </div>


                <Container>
                        <Row md={3} className="g-4">
                            {
                                services.map( service => <Service service={service}></Service>)
                            }
                        </Row>
                    </Container>
           </div>
        </>
    );
};

export default Services;
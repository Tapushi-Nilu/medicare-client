
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
    const [userDetails, setUserDetails] = useState([]);
    console.log(typeof serviceId);

    useEffect( () =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data=> setUserDetails(data))

    }, [])

    const search = userDetails.find(details => details.id === parseInt(serviceId))
    console.log(search);
    return (
        <div>
           <Card className="w-50 mx-auto my-5" style={{ width: '18rem', border:'1px solid #bbb' }}>
                <Card.Img variant="top" src={search?.img} />
                <Card.Body>
                    <Card.Title>{search?.name}</Card.Title>
                    <Card.Text>
                    {search?.decs}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;
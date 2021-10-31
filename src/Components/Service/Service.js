import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";


const Service = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(
            () => {
                setLoading(false)
            }, 5000)
    }, [])
    const { _id, img, name, price, duration } = props.service;
    return (
        <div>

            {
                loading ?

                    <ClipLoader
                        size={30}
                        color={'#F37A24'}
                        loading={loading}
                    />

                    :

                    <Container className="my-2">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <div className="fw-bold">price: {price}</div>
                                        <div className="fw-bold">Duration: {duration}</div>

                                    </div>

                                    <Link to={`/booking/${_id}`}>
                                        <Button variant="dark">Book Now</Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>

            }





        </div>
    );
};

export default Service;
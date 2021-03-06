import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageAll.css'


const ManageAll = (props) => {
    const {_id, img, name, price, duration } = props.bookedService;
    return (
        <div>
            
            <br /><hr />
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
                                
                            </Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default ManageAll;
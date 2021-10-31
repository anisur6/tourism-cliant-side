import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from './../../logo.png'


const Footer = () => {
    return (
        <div>
            <Container fluid>
                <Row className="footer">

                    <Col sm={6}>
                        <div>
                            <img
                                src={logo}
                                width="250"
                                height="120"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <h4>A way For something new</h4>
                            <p>Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences.</p>
                        </div>
                    </Col>

                    <Col sm={3}>
                        <div>
                            <h4 className="brand">About</h4>
                            <ul>
                                <li>About Travelicious</li>
                                <li>Our Guides</li>
                                <li>Tour prices</li>
                                <li>FAQs</li>
                                <li>Contact us</li>
                                <li>Location</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>

                    </Col>


                    <Col sm={3}>
                        <div>
                            <h4 className="brand">Our Newsletter</h4>
                            <p>Subscribe to our newsletter and get exlusive first minute offers straight into your inbox.</p>
                            <hr />
                            <div>
                                <input className="w-100 m-2 p-2" type="text" name="" placeholder="Enter Your Email" id="" /><br />

                                <button className="m-2 p-2 bg-info w-100 text-dark fw-bold border-0">SUBSCRIBE</button>
                            </div>
                        </div>
                    </Col>
                    <hr />

                    <h5 className="footer-end">Copyright © from 2021-2022 all right reservs</h5>
                </Row>


            </Container>
        </div>
    );
};

export default Footer;
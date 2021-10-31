import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './About.css'


const About = () => {
    return (
        <div>
            <Container>
                <div>
                    <h2 className="h2 my-5">About Our <span className="bg-dark text-info">TRAVELICIUS</span></h2>


                    <Row>
                        <Col sm={6}>
                            <div className="about-info">
                                <h2 className="h2">Our <span className=" bg-dark text info p-1">Mission</span></h2> <br /> <hr />
                                <h4>Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust strategic web-readiness.</h4>
                                <br /><hr />
                                <h6>
                                    Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence. Synergistically deliver performance based methods of empowerment whereas distributed expertise.
                                </h6>
                                <h6>
                                    Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors. Rapaciously utilize enterprise experiences via 24/7 markets.
                                </h6>
                            </div>
                        </Col>


                        <Col sm={6}>

                            <img className="about-img mt-5" src="https://i.ibb.co/ynrnb8g/simg1.jpg" alt="" />

                        </Col>
                    </Row>


                </div>
            </Container>




            {/* team members detail  */}
            <Container className="story">

                <Row>
                    <Col sm={6}>


                        <img className="about-img2 mt-5" src="https://i.ibb.co/ynrnb8g/simg1.jpg" alt="" />

                    </Col>


                    <Col sm={6}>

                        <div className="about-info">
                            <h2 className="h2">Travelicious <span className=" bg-dark text info p-1">Story</span></h2> <br /> <hr />
                            <h5>Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences.</h5>
                            <hr />
                            <h6>
                                Quickly aggregate B2B users and worldwide potentialities. Progressively plagiarize resource-leveling e-commerce through resource-leveling core competencies. Dramatically mesh low-risk high-yield alignments before transparent e-tailers.
                            </h6>

                            <h6>
                                Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through interoperable services.
                            </h6>
                        </div>

                    </Col>
                </Row>



            </Container>
        </div>


    );
};

export default About;
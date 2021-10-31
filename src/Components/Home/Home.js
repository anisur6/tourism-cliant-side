import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Home.css'
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Container fluid className="home">
                <Row>
                    <Col>
                        <div>
                            <h2 className="h2">DISCOVER NEW &
                                <span> FELL THE NEW</span></h2>
                            <h4 className="text-light h4">“Every moment and every event of every man’s life on earth plants something in his soul”</h4>
                            <p className="p text-light">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.</p>
                            <Button size="lg" className="btn" variant="dark">Discover Belgrade</Button>
                            <Button size="lg" className="btn" variant="info">Book Your Trip</Button>
                        </div>
                    </Col>



                </Row>


            </Container>

            <Container className="homecourse">
                <h2 className="h2 my-3">FIND YOUR <span className="bg-dark px-3">TOUR</span></h2>
                <h5>GREAT PLACES TO VISIT</h5>
                <p>Compellingly embrace empowered e-business after user friendly intellectual capital.</p>
                <hr />
                <Services></Services>
            </Container>




            <Container className="banner-home">
                <Row>
                    <Col>
                        <h5>YOUR KIND OF HOLIDAY</h5>
                        <h2 className="h2 my-3"><span className="px-3 bg-dark">Your world,</span> your way</h2>
                        <p>Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.</p>
                        <hr />
                    </Col>

                    <Row className="my-5">

                        <Col md={3}>
                            <div>
                                <img src="https://i.ibb.co/9s3r8xK/hiking.png" alt="" />
                                <p>ONE WITH NATURE</p><hr />
                                <h5 className="bg-info w-50 mx-auto p-1">Hiking</h5>
                            </div>
                        </Col>
                        <Col md={3}><div>
                            <img src="https://i.ibb.co/W5TcYN4/mountain.png" alt="" />
                            <p>ONE WITH NATURE</p><hr />
                            <h5 className="bg-info w-50 mx-auto p-1">Mountain</h5>
                        </div></Col>
                        <Col md={3}><div>
                            <img src="https://i.ibb.co/hDrj0Km/fly.png" alt="" />
                            <p>ONE WITH NATURE</p><hr />
                            <h5 className="bg-info w-50 mx-auto p-1">Flying</h5>
                        </div></Col>
                        <Col md={3}><div>
                            <img src="https://i.ibb.co/P4MWndf/pyramids.png" alt="" />
                            <p>ONE WITH NATURE</p><hr />
                            <h5 className="bg-info w-50 mx-auto p-1">Pyramid</h5>
                        </div></Col>
                    </Row>
                    <div>
                        <button className="btn btn-dark text-info p-2 fw-bolder fs-4 my-3"><i class="fas fa-search"></i> FIND THE PERFECT TOUR</button>
                    </div>
                </Row>
            </Container>



            {/* contact component  */}
            <div>
                <Container className="my-5">
                    <Contact></Contact>
                </Container>
            </div>


            <Container fluid className="footerImg p-0">
                <img src="https://i.ibb.co/7nYsn1T/mountain.jpg" alt="" />
            </Container>
        </div>
    );
};

export default Home;
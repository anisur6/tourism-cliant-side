import React from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <Container>
                <h2 className="h2 my-5">Latest <span className="bg-dark p-1 text-info">BLOGS</span></h2><hr />





                <Row>
                    {/* left bar */}
                    <Col md={8} className="border-end border-3 ">
                        <Col>
                            {/* card 1 */}
                            <Card className="my-5">
                                <Card.Img variant="top" src="https://i.ibb.co/wgWthZs/post-paris-05.jpg" />
                                <Card.Body className="blogBody">
                                    <h3>Visit Paris</h3>
                                    <Card.Text>
                                        Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.
                                    </Card.Text>
                                    <Button variant="info">Read More <i class="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>

                            {/* card 2*/}
                            <Card className="my-5">
                                <Card.Img variant="top" src="https://i.ibb.co/s1vm7DW/post-taiwan-04.jpg" />
                                <Card.Body className="blogBody">
                                    <h3>Beautiful Taiwan</h3>
                                    <Card.Text>
                                        Taiwan, 180km east of China, is known for modern cities, traditional Chinese temples, hot springs resorts and dramatic mountainous terrain.
                                    </Card.Text>
                                    <Button variant="info">Read More <i class="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>



                    </Col>



                    {/* right bar */}
                    <Col md={4}>
                        <Col className="mt-5">

                            <InputGroup className="mb-3">
                                <FormControl className="border-3 border-info"
                                    placeholder="Looking For..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className="bg-dark text-info fw-bold " variant="info" id="button-addon2">
                                    <i class="fas fa-search"></i>
                                </Button>
                            </InputGroup>
                            <br />
                            <hr />
                        </Col>

                        <h5>RECENT POSTS</h5><hr />

                        <Col>
                            <Row className="border-1 border">
                                <Col md={5}><img src="https://i.ibb.co/g78whKy/post-01-160x160.jpg" alt="" /></Col>
                                <Col md={7}>
                                    <p>AUGUST 18, 2018</p>
                                    <h6 className="fw-bold">Visit Paris</h6>
                                </Col>
                            </Row>


                            <br />
                            
                                <Row className="border-1 border">
                                    <Col md={5}><img src="https://i.ibb.co/4Mnd5LL/post-02-160x160.jpg" alt="" /></Col>
                                    <Col md={7}>
                                        <p>AUGUST 18, 2018</p>
                                        <h6 className="fw-bold">Visit Paris</h6>
                                    </Col>
                                </Row>
                            

                            <br />
                            
                                <Row className="border-1 border">
                                    <Col md={5}><img src="https://i.ibb.co/g78whKy/post-01-160x160.jpg" alt="" /></Col>
                                    <Col md={7}>
                                        <p>AUGUST 16, 2020</p>
                                        <h6 className="fw-bold">Beautiful Thaiwan</h6>
                                    </Col>
                                </Row>
                            
                        </Col>







                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Blogs;
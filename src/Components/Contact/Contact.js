import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'
import sideImg from './../../contact.png'


const Contact = () => {
  return (
    <div>
      <Container className="contactBase">
        <div className="my-5">
          <h1 className="header h2">Get in Touch with in  <span className="bg-dark text-info p-1">one click... !!</span> </h1>
          <hr />
          <br />

          <Row md={2} sm={1} xs={1}>
            <Col className="contact">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control className="border-3 border-info" type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Massage</Form.Label>
                  <Form.Control className="border-3 border-info " as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="info" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>


            <Col className="sideImg">

              <img className="about-img" src={sideImg} alt="" />

            </Col>
          </Row>


        </div>
      </Container>




    </div>
  );
};

export default Contact;
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


function ContactBody() {
  return (
    <Container className=" my-5" >
      <h2 className=" mb-5">Contáctanos</h2>
      <Row>
        <Col md={6} >
          <h4>Información de contacto</h4>
          <p>Teléfono: +56 (9) 5442 3947</p>
          <p>Email: contacto@mitsudomoe.com</p>
          <h4>¡Si tienes dudas escríbenos un mensaje!</h4>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label></Form.Label>
              <Form.Control className="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group controlId="formMensaje">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                placeholder="Ingrese su mensaje"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="contact-button">
              Enviar
            </Button>
          </Form>
        </Col>

      </Row>
    </Container>
  );
}

export default ContactBody;
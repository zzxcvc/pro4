import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import menuData from '../models/Menu';

function CartaBody() {
  return (
    <Container className="mt-51">
      <h2 className="text-center mb-5">Nuestro Menú</h2>
      <p className="text-center mb-5">
Con una visión moderna y una propuesta creativa de la cocina Japonesa, Mitsudomoe nace en el Sur de Chile en el año 2019 para degustar los paladares mas exigentes y variados de la zona entregando exquitos platos preparados con productos frescos de la más alta calidad. En Mitsudomoe lo importante es el cliente.</p>
      <Row xs={1} sm={2} md={3} className="justify-content-center">
        {menuData.map((item, index) => (
          <Col key={index} className="menu-box mb-5">
            <Card className="h-100">
              <Card.Img variant="top" src={item.Image} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.ingredientes.join(", ")}</Card.Text>
                <Card.Text>${item.precio.toFixed(3)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CartaBody;
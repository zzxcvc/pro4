import React from "react";
import { Row, Col } from "react-bootstrap";
import ImageSlider from "../components/Slider";
import { GrMapLocation, GrContactInfo } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";

function InicioBody() {
  return (
    <section>
      <Row className="inicio-container">
        <Col className="slider-container">
          <ImageSlider className="slider" />
        </Col>

        <Col className="texto-container">
          <Row>
            <Col>
              <h2 className="h2-incio">Mitsudomoe Restorant</h2>
              <br></br>
              <p className="p-inicio2">
              私たちは、最高品質の商品とサービスを提供する日本料理店の一つであることを誇りに思っています。日本出身のシェフによる上質な料理を提供し、三ツ星レストランでの体験がユニークで思い出深いものになることを願っています。

              <br></br>
              <br></br>

            Nos encontramos orgullosos de ser uno de los restaurantes de comida japonesa con la mayor calidad de nuestros productos y de atención. Ofrecemos platos de calidad, cocinados por nuestros chef originarios de Japón, esperamos que tu experiencia en Mitsudomoe Restaurante sea única y memorable.
              </p>
            </Col>
          </Row>

          <Row>
            <Col className="icono-container">
              <p className="p-inicio">Menú</p>
              <a href="/carta">
              <BiFoodMenu className="icono-inicio"/>
              </a>
            </Col>
            <Col className="icono-container">
              <p className="p-inicio">Ubicación</p>
              <a href="/ubicacion">
              <GrMapLocation className="icono-inicio"/>
              </a>
            </Col>
            <Col className="icono-container">
              <p className="p-inicio">Contacto</p>
              <a href="/contacto">
              <GrContactInfo className="icono-inicio"/>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default InicioBody;

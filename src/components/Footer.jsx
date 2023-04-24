import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { BsWhatsapp, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";
import Logo from "../assets/logo/p1.jpg"

function Footer() {
    return (
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="redes-container d-flex justify-content-center p-4 border-bottom">
          <div>
            <a href="">
              <BsFacebook className="logo-redes" />
            </a>
            <a href="">
              <BsWhatsapp className="logo-redes" />
            </a>
            <a href="">
              <BsInstagram className="logo-redes" />
            </a>
            <a href="">
              <BsGoogle className="logo-redes" />
            </a>
          </div>
        </section>

        <section className="input-container">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="sub-text pt-2">
                  <strong>¡Suscríbete para recibir ofertas!</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label=" "
                  placeholder="Email"
                  className="mb-4"
                  labelClass="active"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline type="submit" className="sub-button mb-4">
                  Suscríbete
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <MDBIcon icon="gem" className="me-3" />
                <img
                  src={Logo}
                  width="30"
                  height="30"
                  className="logo-header d-inline-block align-top"
                  alt="Logo"
                />
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4"> Seguridad Sanitaria</h6>
                <p>
                  <MDBIcon color="secondary" icon="fish" className="" />
                  Priorisamos la maxima seguridad sanitaria en nuestros productos. El equipo de Mitsudomoe cumple con todas las normas de sanidad para entregar la mejor calidad a nuestros clientes.
                </p>
                
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Productos Frescos</h6>
                <p>
                  <MDBIcon color="secondary" icon="fish" className="" />
                  Nuestros productos son cuidadosamente selccionados trabjando con proveedores locales para ofrecer siempre los mejores productos a nuestros clientes
                </p>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="tfooter"
          style={{   color: "white" }}
        >
          Cristian Alejandro Arjona© 2022 Bootcamp UDD - Desarrollo Web | Esta página es ficticia y fue creada con fines académicos.
        </div>
      </MDBFooter>
    );
  }
  
  export default Footer;
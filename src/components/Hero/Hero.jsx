import React from "react";
import "./hero.css";
import { Container, Row, Col } from "reactstrap";
import slider1 from "../../img/hero/hero.jpg";

const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">
                Study at RITT,
                <br /> A holistic, and conducive environment
                <br /> for learning.
              </h2>
              <p className="mb-4">
                RITT offers certificates and diploma courses in theology.
                <br /> It also offers short courses intended to improve the
                capacity of church workers.
                <br /> RITT primarily serves the RCEA. While its main aim is to
                serve the members of RCEA, <br />
                RITT also exists to provide this education to members of other
                Christian churches.
              </p>
              <div className="search">
                <input type="text" placeholder="Search RITT" />
              </div>
              <div className="btn-success">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__image">
            <img src={slider1} alt="" className="w-100" />
            </div>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

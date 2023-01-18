import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutimg from "../../img/hero/about.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutimg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Reformed Institute for Theological Training (RITT) was founded
                in 1969 by the Reformed Church of East Africa (RCEA) to provide
                theological training to evangelists who were to play a leading
                role in the ministry of RCEA. Today, its mission fits into the
                broader vision of RCEA and it is to equip servants of God for
                Biblically grounded holistic ministry and service.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp
                        start={0}
                        end={2}
                        duration={2}
                        suffix="thousand"
                      />
                    </span>

                    <p className="counter__title">Graduands</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={3} duration={2} />
                    </span>

                    <p className="counter__title">Courses</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp
                        start={0}
                        end={5}
                        duration={2}
                        suffix=" hundred"
                      />
                    </span>

                    <p className="counter__title">Students</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2} duration={2} />
                    </span>

                    <p className="counter__title">Faculties</p>
                  </div>
                  <p>
                    The college provides training on diploma level and also
                    trains evangelists. The practical training takes one year.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

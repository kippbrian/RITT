import React from "react";
import { Container, Row, Col } from "reactstrap";

import farming from "../../img/hero/farming.svg";
import dairy from "../../img/hero/dairy.svg";
import outreach from "../../img/hero/outreach.svg";
import counselling from "../../img/hero/counseling.svg";
import FreeCourseCard from "./OtherCard";

import "./other.css";

const freeCourseData = [
  {
    id: "01",
    title: "farming services",
    imgUrl: farming,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "dairy services",
    imgUrl: dairy,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "community outreach services",
    imgUrl: outreach,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "counselling",
    imgUrl: counselling,
    students: 5.3,
    rating: 1.7,
  },
];

const Otherservices = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mt-5 " >
            <h2 className="fw-bold">Other services we offer</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Otherservices;
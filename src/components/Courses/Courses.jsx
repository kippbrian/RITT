import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../img/course/course-1.jpg";
import courseImg2 from "../../img/course/course-2.jpg";
import courseImg3 from "../../img/course/course-3.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Theology",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Christian Education",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Evangelism",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50 mt-50">
                <h2>Our Popular Courses</h2>
                <p>
                  RITT is positioning itself to be a center of excellence in
                  theological and Christian education by the year 2010. This
                  RITT strategy is a response to the changing requirement of
                  church servants today and a corresponding information
                  technology revolution in the environment within which it
                  serves.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;

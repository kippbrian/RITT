import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../img/hero/choose.jpg";
import "./choose.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                RITT has repackaged its most significant deliverables under the
                following seven key result areas: forming a faculty of Theology
                and Christian Education, building on staff and students gifts
                and talents (capacity building), constructing and equipping a
                resource center, encouraging congregational based Bible learning
                (inclusive of TEE), and continuous education, developing the
                RITT farm, enhancing students' evangelism and community service,
                and building on a friendly, effective, open, and welcoming
                administration.
                <br />
                <span className="mt-5">
                Therefore, this dual strategy seeks to put in place mechanisms
                for sustainability while enhancing the capacity of al its
                primary actors (students, staff, board members, and RCEA
                leadership) and all its secondary actors (RCEA congregations,
                other Christian churches and local and overseas partners).
                </span>
               
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;

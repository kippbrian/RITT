import React from "react";
import "./testimonials.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import user1 from '../../img/hero/user1.svg';
import user2 from '../../img/hero/user2.svg';

import img from "../../img/testimonial/testi-b2.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div class="container mt-5 mb-5">
        <div class="row g-2">
          <div class="col-md-4">
            <div class="card p-3 text-center px-4">
              <div class="user-image">
                <img
                  src={user1}
                  class="rounded-circle"
                  width="80"
                />
              </div>

              <div class="user-content">
                <h5 class="mb-0">Brian Kiprop</h5>
                <span>Christian worker</span>
                <p>
                  I got the most out of my time at RITT. the environment and th
                  professionalism there was of impeccable quality
                </p>
              </div>

              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3 text-center px-4">
              <div class="user-image">
                <img
                  src={user2}
                  class="rounded-circle"
                  width="80"
                />
              </div>

              <div class="user-content">
                <h5 class="mb-0">Beatrice Chepkoech</h5>
                <span>Pastor</span>
                <p>
                  RITT equipped me with the necessary skills i needed to perfrm
                  Gods work
                </p>
              </div>

              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3 text-center px-4">
              <div class="user-image">
                <img
                  src={user2}
                  class="rounded-circle"
                  width="80"
                />
              </div>

              <div class="user-content">
                <h5 class="mb-0">Milkah Kabun</h5>
                <span>Evangelist</span>
                <p>
                  Going for my studies in RITT was smooth and was one of the
                  best decisions i ever made
                </p>
              </div>

              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

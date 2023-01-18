import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Partners from '../components/Partners/Partners';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import ChooseUs from '../components/ChooseUs/Choose';
import Otherservices from '../components/OtherServices/Other';
import Testimonials from '../components/Testimonials/Testimonials';
import Newsletter from '../components/Newsletter/NewsLetter';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero/>
      <Partners />
      <About />
      <Courses />
      <ChooseUs />
      <Otherservices/>
      <Testimonials/>
      <Newsletter />
      <Footer />

    </Fragment>
  )
}

export default Home
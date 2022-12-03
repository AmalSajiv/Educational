import React, { Fragment } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Company from "../components/Company";
import AboutUs from "../components/AboutUs"
import Courses from "../components/Courses"
import ChooseUs from "../components/ChooseUs";
import Features from "../components/Features";
import FreeCourse from "../components/FreeCourse";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonial />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
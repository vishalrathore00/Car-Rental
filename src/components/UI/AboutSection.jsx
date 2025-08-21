import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>


              <p className="section__description">
  We are committed to making car rentals simple, affordable, and reliable. 
  Whether you need a car for daily commuting, a family trip, or a business 
  meeting, our wide range of well-maintained vehicles ensures the right ride 
  for every occasion. With transparent pricing, flexible booking, and 
  round-the-clock support, we aim to deliver a safe and stress-free driving 
  experience for all our customers.
</p>

<div className="about__section-item d-flex align-items-center">
  <p className="section__description d-flex align-items-center gap-2">
    <i class="ri-checkbox-circle-line"></i> Wide range of cars for every need
  </p>

  <p className="section__description d-flex align-items-center gap-2">
    <i class="ri-checkbox-circle-line"></i> Affordable and transparent pricing
  </p>
</div>

<div className="about__section-item d-flex align-items-center">
  <p className="section__description d-flex align-items-center gap-2">
    <i class="ri-checkbox-circle-line"></i> 24/7 customer assistance
  </p>

  <p className="section__description d-flex align-items-center gap-2">
    <i class="ri-checkbox-circle-line"></i> Well-maintained and safe vehicles
  </p>
</div>




            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

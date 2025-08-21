import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>

      
      <div className="testimonial py-4 px-3">
  <p className="section__description">
    Booking a car was so quick and hassle-free! The vehicle was in perfect 
    condition and the support team guided me throughout the process. Easily 
    the best rental service I’ve tried so far.
  </p>

  <div className="mt-3 d-flex align-items-center gap-4">
    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
    <div>
      <h6 className="mb-0 mt-3">Rahul Sharma</h6>
      <p className="section__description">Customer</p>
    </div>
  </div>
</div>

<div className="testimonial py-4 px-3">
  <p className="section__description">
    I needed a car at the last minute for a weekend trip, and DriveEasy 
    delivered beyond expectations. Clean cars, transparent pricing, and no 
    hidden charges — highly recommended!
  </p>

  <div className="mt-3 d-flex align-items-center gap-4">
    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
    <div>
      <h6 className="mb-0 mt-3">Ananya Verma</h6>
      <p className="section__description">Customer</p>
    </div>
  </div>
</div>

<div className="testimonial py-4 px-3">
  <p className="section__description">
    The booking process was simple, and the car was delivered right on time. 
    Customer support was just a call away, which made the whole experience 
    stress-free. Definitely renting again.
  </p>

  <div className="mt-3 d-flex align-items-center gap-4">
    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
    <div>
      <h6 className="mb-0 mt-3">Arjun Mehta</h6>
      <p className="section__description">Customer</p>
    </div>
  </div>
</div>

<div className="testimonial py-4 px-3">
  <p className="section__description">
    I was impressed with how professional the team was. The car was well 
    maintained and fuel-efficient, making my business trip smooth and 
    affordable. Excellent service overall!
  </p>

  <div className="mt-3 d-flex align-items-center gap-4">
    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
    <div>
      <h6 className="mb-0 mt-3">Simran Kaur</h6>
      <p className="section__description">Customer</p>
    </div>
  </div>
</div>




    </Slider>
  );
};

export default Testimonial;

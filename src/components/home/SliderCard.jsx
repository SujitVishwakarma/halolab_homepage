import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import founderImg from '../../assets/founder.png';

const testimonials = [
  {
    rating: "5.0",
    review:
      "The client has learned to trust Halo Lab, thanks to their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project system.",
    position: "Co-Founder at Kinetik",
  },
  {
    rating: "5.0",
    review:
      "The client is proud of Halo Lab's work, which their customers have praised. They lead a communicative process to enable the team to reach out to them at any time. The client also praises their designs and suggestions, which help improve their services.",
    name: "Dimitri Lubaschevski",
    position: "CEO, DAS24 Services",
  },
  {
    rating: "5.0",
    review:
      "Their skills were awesome! They took what I said and made it better. The designs ended up being loved by internal stakeholders and customers alike. The specialists maintained excellent project management skills throughout the entire process.",
    name: "Farah Allen",
    position: "Founder & CEO at ____",
  },
];

const SliderCard = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    centerMode: true, 
    centerPadding: "0", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false, 
        },
      },
    ],
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="text-white py-10 flex flex-col md:flex-row">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
            <img
              src={founderImg}
              alt="Main Person"
              className="rounded-md w-40 h-54 object-cover mb-4"
              style={{ width: '14rem' }}
            />
            <div className="text-5xl font-bold">4.9</div>
            <p className="mt-4 text-center">
              Clutch average based on 70+ reviews. <br /> All chances are you’ll be impressed too.
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-gray-800 p-2 rounded-full mr-2"
                onClick={previousSlide}
              >
                <FaChevronLeft />
              </button>
              <button
                className="bg-gray-800 p-2 rounded-full ml-2"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Right Side (Slider) */}
          <div className="w-full md:w-2/3">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 mx-2 flex flex-col justify-between gap-4"
                  style={{ height: "320px" }}
                >
                  <div className="flex flex-col h-full ">
                    <div className="text-xl font-bold mb-4">
                      {testimonial.rating} ⭐⭐⭐⭐⭐
                    </div>
                    <p className="flex-grow overflow-hidden text-ellipsis">
                      {testimonial.review}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                      <FaUser className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name || "Anonymous"}</div>
                      <div className="text-sm text-gray-300">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;

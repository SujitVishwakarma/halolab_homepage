import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import circle from '../../assets/circle.png';

const testimonials = [
    {
        src: circle, 
        text: "Working with Halo Lab means boosting your business through cutting-edge technologies.",
    },
    {
        src: circle,
        text: "Halo Lab's team has helped our clients secure new successful investment deals.",
    },
    {
        src: circle,
        text: "With our exceptional approach to every project, we bring the dream projects of our clients to life.",
    },
    {
        src: circle,
        text: "We aim to provide the perfect digital solutions for your business, making the process friendly and chill.",
    },
];

const Benefits = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="bg-gradient-to-r from-orange-300 to-[#ba761e] py-10">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-white mb-10">OUR BENEFITS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card with automatic slider */}
                    <div className="bg-white p-6 rounded-lg shadow-lg relative" style={{ height: '370px', borderRadius: "0 90px 5px 0" }}>
                        <Slider {...settings}>
                            {testimonials.map((item, index) => (
                                <div key={index} className="h-full flex flex-col items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt="Testimonial"
                                        className="mb-10 rounded-full w-20 h-20 object-cover"
                                    />
                                    <p className="text-black text-center text-lg mt-3">{item.text}</p>
                                </div>
                            ))}
                        </Slider>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                            <div className="h-full bg-purple-600 loader"></div>
                        </div>
                    </div>

                    {/* Other Benefit Cards */}
                    <div className="border border-white text-white p-6 rounded-lg shadow-lg h-75 " style={{ borderRadius: "0 40px 0 0" }}>
                        <h3 className="text-4xl font-bold">$370M</h3>
                        <p className="mt-10 font-bold text-2xl">Total funding</p>
                        <p className="mt-2">
                            Hard work and dedication of the Halo Lab team help our clients secure new successful investment deals.
                        </p>
                    </div>

                    <div className="border border-white text-white p-6 rounded-lg shadow-lg h-75" style={{ borderRadius: "0 40px 0 0" }}>
                        <h3 className="text-4xl font-bold">350+</h3>
                        <h2 className="mt-10 font-bold text-2xl">Completed projects</h2>
                        <p className="mt-3">
                            With our exceptional approach to every project, we bring the dream projects of our clients to life.
                        </p>
                    </div>

                    <div className="border border-white text-white p-6 rounded-lg shadow-lg h-75" style={{ borderRadius: "0 40px 0 0" }}>
                        <div class="flex-col gap-4 w-full flex">
                            <div
                                class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                            >
                                <div
                                    class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                                ></div>
                            </div>
                        </div>

                        <h3 className="text-4xl font-bold">Positive vibes</h3>
                        <p className="mt-4">
                            We aim to provide the perfect digital solutions for your business, making this process friendly and chill.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;

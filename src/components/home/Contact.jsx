import React from 'react';
import { FaUser } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        text: "Their skills were awesome! They took what I said and made it better. The designs ended up being loved by internal stakeholders and customers alike.",
        name: "Farah Allen",
        title: "Founder & CEO at ____",
    },
    {
        text: "They delivered excellent results, ensuring all requirements were met and deadlines were adhered to. The team was very communicative and professional.",
        name: "John Doe",
        title: "CTO at Example Inc.",
    },
    {
        text: "Working with them was a pleasure. The project was delivered on time and within budget. Their creativity and expertise were top-notch.",
        name: "Jane Smith",
        title: "Product Manager at XYZ Corp.",
    },
    {
        text: "I was impressed with the quality of their work. They exceeded our expectations and delivered a product that was both functional and aesthetically pleasing.",
        name: "Michael Johnson",
        title: "CEO at ABC Solutions",
    },
];

const Contact = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
    };

    return (
        <div className="container mx-auto px-6 py-8" id="contact">
            <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg p-6 shadow-sm">
                {/* Left Side - Contact Form */}
                <div className="w-full md:w-7/10 mb-8 md:mb-0 md:mr-4">
                    <div className="bg-gray-100 rounded-lg p-2 shadow-sm">
                        <h1 className="text-black font-bold text-4xl">Ready to discuss <br /> your project with us?</h1>
                        <div className="mt-4">
                            <label className="text-black" htmlFor="name">Full Name</label>
                            <input placeholder="Enter your full name" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" id="name" />
                        </div>

                        <div className="mt-4 flex flex-row space-x-2">
                            <div className="flex-1">
                                <label className="text-black" htmlFor="phone">Phone No.</label>
                                <input placeholder="Enter your phone number" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="phone" type="text" />
                            </div>

                            <div className="flex-1">
                                <label className="text-black" htmlFor="email">Email</label>
                                <input placeholder="Enter your email address" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="email" type="text" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="text-black" htmlFor="project">Add Project</label>
                            <textarea placeholder="Add the description of project" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 h-28" id="project"></textarea>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                            <p className='text-black text-sm'>
                                By sending this form I confirm that <br /> I have read and accept the <a href='#' className='underline'>Privacy Policy</a>
                            </p>
                            <button className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                                    Send Message
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Testimonial Card */}
                <div className="md:w-80">
                    <div className="bg-slate-200 p-2 shadow-sm testinomail-container" style={{ borderRadius: "20px 60px 20px 20px" }}>
                        <div className="max-w-lg mx-auto ">
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index}>
                                        <div className="p-4 text-black rounded-lg flex flex-col justify-between gap-4" style={{ height: "400px" }}>
                                            <div className="text-2xl font-bold mb-4">Our clients say</div>
                                            <div className="bg-white h-1"></div>
                                            <p className="flex-grow overflow-hidden text-ellipsis">
                                                {testimonial.text}
                                            </p>
                                            <div className="mt-2 flex items-center">
                                                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                                                    <FaUser className="text-white text-2xl" />
                                                </div>
                                                <div>
                                                    <div className="font-bold">{testimonial.name}</div>
                                                    <div className="text-sm text-gray-600">{testimonial.title}</div>
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
        </div>
    );
};

export default Contact;

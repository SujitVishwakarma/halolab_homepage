import React, { useState } from 'react';
import { FaDribbble, FaInstagram, FaBehance, FaLinkedin, FaGithub, FaNpm, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaPlusCircle } from "react-icons/fa";

const categories = [
    {
        title: 'Design',
        items: [
            'Web Design',
            'Mobile App Design',
            'E-Commerce Web Design',
            'Saas Website Design',
            'Healthcare Web Design',
            'UI/UX Design',
            'Branding for Startups',
            'Responsive Web Design',
            'Landing Website Design',
        ],
    },
    {
        title: 'Development',
        items: [
            'Back-end Development',
            'Front-end Development',
            'Prismic CMS Development',
            'Vue JS Development',
            'CMS Development',
            'Node JS Development',
            'Web Development',
            'Software Product Development',
            'Next JS Development',
            'Webflow Development',
            'React JS Development',
            'Sanity Development',
        ],
    },
    {
        title: 'Marketing',
        items: [
            'Search Engine Optimisation',
            'Pitch Deck Design',
            'Technical Audit',
            'Social Media Design',
            'Technical SEO',
            'SEO Audit',
            'Content Marketing',
            'Conversion Rate Optimization',
            'Local SEO',
        ],
    },
];



const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <footer className="bg-[#0E0E25] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
                    {/* Left Section */}
                    <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-bold">Subscribe to our newsletter to stay in touch with the latest.</h2>
                        <div className="flex items-center border border-gray-500 pb-2 rounded-lg">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent flex-1 p-1 focus:outline-none text-white placeholder-gray-400"
                            />
                            <button className="text-xl text-white ml-4 px-2">
                                <FiMail />
                            </button>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Follow us here:</h3>
                            <div className="flex space-x-4 mt-2">
                                <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-orange-500 cursor-pointer">
                                    <FaDribbble className="text-gray-600 hover:text-orange-500" />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-orange-500 cursor-pointer">
                                    <FaInstagram className="text-gray-600 hover:text-orange-500" />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-orange-500 cursor-pointer">
                                    <FaBehance className="text-gray-600 hover:text-orange-500" />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-orange-500 cursor-pointer">
                                    <FaLinkedin className="text-gray-600 hover:text-orange-500" />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-orange-500 cursor-pointer">
                                    <FaGithub className="text-gray-600 hover:text-orange-500" />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-orange-500 cursor-pointer">
                                    <FaNpm className="text-gray-600 hover:text-orange-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="flex-1  lg:ml-16 space-y-2">
                        <h3 className="font-semibold">Our Services + </h3>
                        <ul className="space-y-2">
                            <li>Projects</li>
                            <li>Our Process</li>
                            <li>Open Source</li>
                            <li>Referral Program</li>
                            <li>Contacts</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 space-y-4">
                        <div>
                            <h3 className="font-semibold">Drop us a line</h3>
                            <p>sujitv257@.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Call us</h3>
                            <p><FaWhatsapp className="inline mr-2 text-green-500" /> +1 (213) 337-8573</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12  pt-8 ">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <p className='text-xs'>REVIEWED ON ⭐⭐⭐⭐⭐</p>
                            <h2>Clutch</h2>
                        </button>
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <h2 className='text-blue-500'>GoodFirms</h2>
                            <p className='text-xs'>Top Web Developer</p>
                        </button>
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <h2 className='text-white'>Design<span className='text-blue-600'>Rush</span></h2>
                            <p className='text-xs'>Winner 2023-2024</p>
                        </button>
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <p className='text-xs'>Team worldwide</p>
                            <h2 className='text-pink-500'>Dribble</h2>
                        </button>
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <p className='text-xs'>Partner</p>
                            <h2 className='text-white'>WebFlow</h2>
                        </button>
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <p className='text-xs'>Partner</p>
                            <h2 className='text-white'>Prismic</h2>
                        </button>
                        <button class="bg-gray-750 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-170 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <p className='text-xs'>Partner</p>
                            <h2 className='text-orange-400'>SANITY</h2>
                        </button>
                    </div>
                </div>
                <div className='bg-gray-400 h-0.5 mt-6'></div>
                {/* Show All Services Section */}
                <div className="mt-6">
                    <div onClick={toggleDropdown} className='flex justify-between items-center cursor-pointer'>
                        <h1>Show all Services</h1>
                        <span className='text-white rounded-full font-bold cursor-pointer'>
                            <FaPlusCircle />
                        </span>
                    </div>
                    
                    {isDropdownOpen && (
                        <div className="bg-gray-900 text-white p-8 space-y-12 mt-2 w-full">
                            {categories.map((category, index) => (
                                <div key={index} className="mb-12">
                                    <h2 className="md:text-lg text-sm font-bold mb-4">{category.title}</h2>
                                    <div className="flex flex-wrap justify-between">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="w-full sm:w-1/2 lg:w-1/3 mb-4 hover:underline hover:text-purple-600">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Bottom Divider */}
                <div className='bg-gray-400 h-0.5 mt-6'></div>
                {/* Copy right part  */}
                <div className="mt-8 flex justify-between items-center text-gray-500">
                    <p>© Sujit Vishwakarma. All rights reserved</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">Manage cookies</a>
                        <a href="#" className="hover:underline">Terms and Conditions</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

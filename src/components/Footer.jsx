import React from 'react';
import { FaDribbble, FaInstagram, FaBehance, FaLinkedin, FaGithub, FaNpm, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
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
                <div className="mt-12 border-b border-gray-700 pt-8 ">
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

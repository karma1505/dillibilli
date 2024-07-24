"use client";
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div>
            <footer id='footer' style={{ backgroundColor: '#38322f' }} className="w-full shadow p-4 text-center mt-auto z-50 font-montserrat">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    {/* Logo Section */}
                    <div className="mb-6">
                        <a href="/" className="inline-block">
                            <div className="relative w-40 h-40 mx-auto">
                                <Image className="object-cover" src="/logo.png" fill alt="Logo" />
                            </div>
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex justify-center space-x-6 mb-6 text-lg text-white dark:text-gray-400">
                        <li className="flex-1 text-center">
                            <a href="https://www.makemytrip.com/hotels/dilli_villa_3bhk_swimming_pool_jacuzzi_and_home_theatre-details-kasauli.html" className="hover:underline">Book</a>
                        </li>
                        <li className="flex-1 text-center">
                            <a href="#Room" className="hover:underline">Rooms</a>
                        </li>
                        <li className="flex-1 text-center">
                            <a href="#Map" className="hover:underline">Maps</a>
                        </li>
                        <li className="flex-1 text-center">
                            <a href="tel:+911234567890" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>

                    {/* Contact Information */}
                    <div className="mb-2 mt-6">
                        <a href="tel:+911234567890" className="block text-sm text-white sm:text-center dark:text-white hover:underline">+91 1234567890</a>
                        <a href="mailto:info@dillihouse.com" className="block text-sm text-white sm:text-center dark:text-white hover:underline">info@dillihouse.com</a>
                        <span className="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="/" className="hover:underline">Dilli House</a> All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

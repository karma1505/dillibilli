import React from 'react'

function Footer() {
    return (
        <div>


            <footer id='footer' className="bg-amber-500 rounded-lg w-full shadow dark:bg-gray-900 p-4 text-center mt-auto z-50 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="/logo.svg" className="h-20 lg:h-36" alt=" Logo" />
                            {/* <span className="self-center lg:text-xl text-black font-semibold whitespace-nowrap dark:text-white">Dilli-House</span> */}
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-bold text-black  sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://www.makemytrip.com/hotels/dilli_villa_3bhk_swimming_pool_jacuzzi_and_home_theatre-details-kasauli.html" className="hover:underline lg:text-xl me-4 md:me-6">Book</a>
                            </li>
                            <li>
                                <a href="#Room" className="hover:underline lg:text-xl me-4 md:me-6">Rooms</a>
                            </li>
                            <li>
                                <a href="#Map" className="hover:underline lg:text-xl me-4 md:me-6">Maps</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline lg:text-xl ">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-amber-500 border-2 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Dilli House</a> All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}

export default Footer

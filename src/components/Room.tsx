'use client';
{/* <div className="max-w-3xl w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-500 flex flex-row items-center">
                    <div className="p-5 flex-1">
                        <Link href="/silver">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Silver Room</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">The chic Silver Bedroom boasts elegant grey and black decor, a turquoise recliner, panoramic valley and pool views, and a teak study table, perfect for writers and poets seeking ultimate comfort.</p>
                        <Link href="/silver" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-500 dark:focus:ring-amber-600">
                            Explore
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                    <Link href="/silver">
                        <img className="rounded-r-lg w-1/2" src="/silver.jpg" alt="Silver Room" />
                    </Link>
                </div>

                <div className="max-w-3xl w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-500 flex flex-row items-center">
                    <div className="p-5 flex-1">
                        <Link href="/bronze">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bronze Room</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">The ground-floor Bronze Bedroom is a private party pad with stunning valley views. Adjacent Drawing Room is perfect for socializing. Features a cozy sofa-cum-bed for late-night hangouts or pajama parties.</p>
                        <Link href="/bronze" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-500 dark:focus:ring-amber-600">
                            Explore
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                    <Link href="/bronze">
                        <img className="rounded-r-lg w-1/2" src="/bronze.jpg" alt="Bronze Room" />
                    </Link>
                </div> */};




import React from 'react';
import Link from 'next/link';

function Room() {
    return (
        <div id='Room'>
            <div className="m-20">
                <h1 className="text-black text-3xl lg:text-5xl font-extrabold flex justify-center">Rooms</h1>
            </div>
            <div className='flex flex-col items-center py-10 mt-10 space-y-8'>
                <Link
                    href="/golden"
                    className="relative flex mx-6 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[900px] lg:h-[400px]  md:mx-4 sm:mx-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div className="relative z-10 lg:-ml-28 lg:mr-10 p-4 md:p-0">
                        <img
                            className=" object-cover rounded-lg h-full w-full -mt-8 md:h-auto md:w-72 lg:w-[500px]  md:rounded-lg  shadow-lg"
                            src="/golden.jpg"
                            alt="Golden Room"
                        />
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Golden Room</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Enjoy the Golden Bedroom's plush interiors and stunning Himalayan views. Sunbathe in winter, relax in the en suite jacuzzi, and revel in your private, jungle-surrounded villa for a luxurious retreat.
                        </p>
                    </div>
                </Link>

                <Link
                    href="/silver"
                    className="relative mx-6 flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[900px] lg:h-[400px]  md:mx-4 sm:mx-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Silver Room</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            The chic Silver Bedroom boasts elegant grey and black decor, a turquoise recliner, panoramic valley and pool views, and a teak study table, perfect for writers and poets seeking ultimate comfort.
                        </p>
                    </div>
                    <div className="relative z-10 lg:-mr-28 lg:ml-10 p-4 md:p-0">
                        <img
                            className="object-cover rounded-lg h-full w-full -mt-8 md:h-auto md:w-72 lg:w-[500px] md:rounded-lg shadow-lg"
                            src="/silver.jpg"
                            alt="Silver Room"
                        />
                    </div>
                </Link>

                <Link
                    href="/bronze"
                    className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[900px] lg:h-[400px] mx-6 md:mx-4 sm:mx-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div className="relative z-10 lg:-ml-28 lg:mr-10 p-4 md:p-0">
                        <img
                            className="object-cover rounded-lg h-full w-full -mt-8 md:h-auto md:w-72 lg:w-[500px] md:rounded-lg shadow-lg"
                            src="/bronze.jpg"
                            alt="Bronze Room"
                        />
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bronze Room</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            The ground-floor Bronze Bedroom is a private party pad with stunning valley views. Adjacent Drawing Room is perfect for socializing. Features a cozy sofa-cum-bed for late-night hangouts or pajama parties.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Room;

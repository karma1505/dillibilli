"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function Room() {
    return (
        <div id='Room'>
            <div className="m-20">
                <h1 className="text-black text-3xl lg:text-6xl  flex justify-center">Our Rooms</h1>
            </div>
            <div className='flex flex-col items-center py-10 mt-10 space-y-8'>
                <Link

                    href="/golden"
                    className="relative flex mx-6 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[900px] lg:h-[400px]  md:mx-4 sm:mx-2 hover:bg-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div className="relative z-10 lg:-ml-28 lg:mr-10 p-4 md:p-0">
                        <Image
                            className=" object-cover rounded-lg h-full w-full -mt-8 md:h-auto md:w-72 lg:w-[500px]  md:rounded-lg  shadow-lg"
                            src="/golden.png"
                            alt="Golden Room"
                            width={1180}
                            height={667}
                        />
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            The <span className="text-golden" style={{ color: '#FFD700' }}>Golden</span> Room
                        </h5>
                        <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
                            Enjoy the Golden Bedroom&apos;s plush interiors and private pool. Sunbathe in winter, relax in the en suite jacuzzi, and revel in your private, jungle-surrounded villa for a luxurious retreat.
                        </p>
                    </div>
                </Link>

                <Link
                    href="/silver"
                    className="relative mx-6 flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[900px] lg:h-[400px]  md:mx-4 sm:mx-2 hover:bg-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            The <span className="text-gray-500 " >Silver</span> Room
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            The chic Silver Bedroom boasts elegant grey and black decor, a turquoise recliner, panoramic valley and pool views, and a teak study table, perfect for writers and poets seeking ultimate comfort.
                        </p>
                    </div>
                    <div className="relative z-10 lg:-mr-28 lg:ml-10 p-4 md:p-0">
                        <Image
                            className="object-cover rounded-lg h-full w-full -mt-8 md:h-auto md:w-72 lg:w-[500px] md:rounded-lg shadow-lg"
                            src="/silver.png"
                            alt="Silver Room"
                            width={1180}
                            height={667}
                        />
                    </div>
                </Link>

                <Link
                    href="/bronze"
                    className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[900px] lg:h-[400px] mx-6 md:mx-4 sm:mx-2 hover:bg-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div className="relative z-10 lg:-ml-28 lg:mr-10 p-4 md:p-0">
                        <Image
                            className="object-cover rounded-lg h-full w-full -mt-8 md:h-auto md:w-72 lg:w-[500px] md:rounded-lg shadow-lg"
                            src="/bronze.png"
                            alt="Bronze Room"
                            width={1180}
                            height={667}
                        />
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            The <span className="text-bronze" style={{ color: '#CD7F32' }}>Bronze</span> Room
                        </h5>
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

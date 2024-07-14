'use client';

import Footer from "@/components/Footer";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";


function GoldenRoom() {
    return (

        <div className="h-screen py-10 p-4 w-full">
            <div className=" ">
                <h1 className=" m-20  text-black dark:text-white text-3xl lg:text-5xl font-extrabold  flex justify-center">Golden Room</h1>
                <p className="m-20 sm:m-1 text-sm md:text-xl lg:text-2xl font-semibold mb-6 text-center">Enjoy the Golden Bedroom's plush interiors and stunning Himalayan views. Sunbathe in winter, relax in the en suite jacuzzi, and revel in your private, jungle-surrounded villa for a luxurious retreat.</p>
            </div>
            <LayoutGrid cards={cards} />

            <div>
                <h1 className=" m-20  text-black dark:text-white text-3xl lg:text-5xl font-extrabold  flex justify-center">More In The Golden Bedroom</h1>


                <ol className="items-center justify-between m-20 lg:m-40 sm:flex">
                    <li className="relative flex  mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#3d75e6" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1" /></svg>
                            </div>

                        </div>
                        <div className="mt-3 m-4 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Free Wifi</h3>
                        </div>
                    </li>
                    <li className="relative flex mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#3d75e6" d="M2 19v-2h20v2zm1-3v-1q0-3.2 1.963-5.65T10 6.25V6q0-.825.588-1.412T12 4t1.413.588T14 6v.25q3.1.65 5.05 3.1T21 15v1z" /></svg>
                            </div>

                        </div>
                        <div className="mt-3 m-4 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">24/7 Room Service
                            </h3>


                        </div>
                    </li>
                    <li className="relative flex mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#3d75e6" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2z" /></svg>
                            </div>

                        </div>
                        <div className="mt-3 m-4 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flat-screen TV
                            </h3>


                        </div>
                    </li>
                    <li className="relative flex mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="#3d75e6" d="M8.691 10.142V8.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.641a3.99 3.99 0 0 0-2.957 3.272a.507.507 0 0 0 .5.586h6.922a.507.507 0 0 0 .5-.586a3.99 3.99 0 0 0-2.965-3.271m4.639-3.863l-2.5-5A.5.5 0 0 0 10.383 1H4.999a.5.5 0 0 0-.446.276l-2.5 5A.5.5 0 0 0 2.497 7h8.194v1.5a.5.5 0 0 0 1 0V7h1.194a.5.5 0 0 0 .445-.721" /></svg>
                            </div>

                        </div>
                        <div className="mt-3 m-4 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Italian Leather Furniture</h3>


                        </div>
                    </li>
                    <li className="relative flex mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#3d75e6" d="M2 19v-2h20v2zm1-3v-1q0-3.2 1.963-5.65T10 6.25V6q0-.825.588-1.412T12 4t1.413.588T14 6v.25q3.1.65 5.05 3.1T21 15v1z" /></svg>
                            </div>

                        </div>
                        <div className="mt-3 m-4 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Daily House Service</h3>
                        </div>
                    </li>
                </ol>


            </div>
            <Footer />
        </div>

    );
};

export default GoldenRoom;


const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House above the clouds</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It's a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};

const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Greens all over</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature's beauty. It's the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Rivers are serene</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It's the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
// const SkeletonFive = () => {
//     return (
//         <div>
//             <p className="font-bold text-4xl text-white">House in the woods</p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A serene and tranquil retreat, this house in the woods offers a peaceful
//                 escape from the hustle and bustle of city life.
//             </p>
//         </div>
//     );
// };

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: "/golden.JPG",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1 col ",
        thumbnail: "/goldenjacuzzi.JPG"
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: "/goldenpool.JPG"
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail: "/golden2.JPG"
    },
    // {
    //     id: 5,
    //     content: <SkeletonFive />,
    //     className: "col-span-1 md:col-span-2",
    //     thumbnail: "/golden2.JPG"
    // },
];


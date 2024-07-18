import Link from 'next/link';
import React from 'react';

function Travel() {
    return (
        <div>
            <div className="m-20">
                <h1 className="text-black text-3xl lg:text-5xl flex justify-center">Travel Convenience</h1>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <div className="border-1 shadow-xl border-gray-100 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 h-64">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block -mt-16" viewBox="0 0 24 24"><path fill="black" d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0" /></svg>
                            <h4 className="title-font font-medium text-3xl text-gray-900">Airport</h4>
                            <ul className="leading-relaxed list-none">
                                <li>47 km away from Shimla Airport</li>
                                <li>58 km away from Chandigarh Airport</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <div className="border-1 shadow-xl border-gray-100 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 h-64">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block -mt-16" viewBox="0 0 24 24"><path fill="black" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z" /></svg>
                            <h4 className="title-font font-medium text-3xl text-gray-900">By Car</h4>
                            <ul className="leading-relaxed list-none">
                                <li>5 hours from Delhi NCR</li>
                                <li>2 hours away from Shimla</li>
                                <li>2 hours from Chail</li>
                                <li>1 hour from Chandigarh</li>
                                <li>30 minutes from Kasauli</li>
                                <li>30 minutes from Solan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <div className="border-1 shadow-xl border-gray-100 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 h-64">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block -mt-16" viewBox="0 0 24 24"><path fill="black" d="M4 15.5V6q0-1.325.688-2.113t1.812-1.2t2.563-.55T12 2q1.65 0 3.113.138t2.55.55t1.712 1.2T20 6v9.5q0 1.475-1.012 2.488T16.5 19l1.5 1.5v.5h-2l-2-2h-4l-2 2H6v-.5L7.5 19q-1.475 0-2.488-1.012T4 15.5M6 10h5V7H6zm7 0h5V7h-5zm-4.5 6q.65 0 1.075-.425T10 14.5t-.425-1.075T8.5 13t-1.075.425T7 14.5t.425 1.075T8.5 16m7 0q.65 0 1.075-.425T17 14.5t-.425-1.075T15.5 13t-1.075.425T14 14.5t.425 1.075T15.5 16" /></svg>
                            <h4 className="title-font font-medium text-3xl text-gray-900">By Rail</h4>
                            <ul className="leading-relaxed list-none">
                                <li>Near the Kalka-Shimla Toy Train Station Of Dharampur</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <div className="border-1 shadow-xl border-gray-100 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 h-64">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block -mt-16" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19L8 5m8 0l4 14M12 8V6m0 7v-2m0 7v-2" /></svg>
                            <h4 className="title-font font-medium text-3xl text-gray-900">Connectivity</h4>
                            <ul className="leading-relaxed list-none">
                                <li>Well connected with the Chandigarh-Shimla 4 lane highway</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;

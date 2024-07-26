"use client";
import * as HeroIconsOutline from '@heroicons/react/outline';
import { useState } from 'react';
import Image from 'next/image';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';

const Rooms = [
    { name: 'Golden', description: 'Luxurious Golden Interiors, Forest Views, Jacuzzi.', href: '/golden' },
    { name: 'Silver', description: 'Chic Silver Bedroom, Luxurious Vibe, Stunning Views', href: '/silver' },
    { name: 'Bronze', description: 'Private Ground Floor Room With Valley Views & Sofa-cum-Bed', href: '/bronze' },
];

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <nav aria-label="Global" className="mx-auto w-full flex max-w-full items-center justify-between px-5 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image alt="Logo" src="/logo.svg" width={80} height={80} className="h-20 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <HeroIconsOutline.MenuIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="/" className="text-md font-semibold leading-6 text-gray-900">
                        Home
                    </a>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
                            Our Rooms
                            <HeroIconsOutline.ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all"
                        >
                            <div className="p-4">
                                {Rooms.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            {/* Icon placeholder */}
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#Map" className="text-md font-semibold leading-6 text-gray-900">
                        Map
                    </a>
                    <a href="#footer" className="text-md font-semibold leading-6 text-gray-900">
                        Contact Us
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="https://www.airbnb.co.in/rooms/1197554341027638787?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-08-01&check_out=2024-08-06&source_impression_id=p3_1721998398_P3eamoWQmSbugMxr&previous_page_section_name=1000&federated_search_id=ddbf2a4a-cc90-40c3-8a6e-baccf821fbe5" className="text-md font-semibold leading-6 text-gray-900">
                        <button style={{ backgroundColor: '#38322f' }} className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-[#38322f] focus:outline-none focus:border-[#38322f] focus:shadow-outline-[#38322f] active:bg-[#38322f] transition ease-in-out duration-150">
                            Book Now
                        </button>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 md:max-w-md md:ring-1 md:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image alt="Logo" src="/logo.svg" width={64} height={64} className="h-16 py-0 w-auto" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <HeroIconsOutline.XIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Rooms
                                        <HeroIconsOutline.ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...Rooms].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <a
                                    href="#Map"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Map
                                </a>
                                <a
                                    href="#Footer"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact Us
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="https://www.airbnb.co.in/rooms/1197554341027638787?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-08-01&check_out=2024-08-06&source_impression_id=p3_1721998398_P3eamoWQmSbugMxr&previous_page_section_name=1000&federated_search_id=ddbf2a4a-cc90-40c3-8a6e-baccf821fbe5"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <button style={{ backgroundColor: '#38322f' }} className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-[#38322f] focus:outline-none focus:border-[#38322f] focus:shadow-outline-[#38322f] active:bg-[#38322f] transition ease-in-out duration-150">
                                        Book Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

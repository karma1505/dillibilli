"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Review() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

            <div className="m-20"><h1 className="text-black text-3xl lg:text-6xl ">What Our Guests Say</h1></div>
            <InfiniteMovingCards
                className=""
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "A luxury home away from home with imported furniture and a private pool. The caretaker was always available and helpful.",
        name: "Pranav Misra",
        title: "★★★★★",
    },
    {
        quote:
            "Great food, super clean rooms, and a homely atmosphere. Enjoyed the stay to the fullest.",
        name: "Anil Kumar",
        title: "★★★★★",
    },
    {
        quote:
            "Beautiful property with good food and excellent service. Highly recommended!",
        name: "Natasha Choudhary",
        title: "★★★★★",
    },
    {
        quote:
            "Lovely property with a beautiful view. Some areas could use a bit of maintenance.",
        name: "Ekta Narula",
        title: "★★★★☆",
    },
    {
        quote:
            "Comfortable rooms with a nice view. The food was good, but a bit pricey.",
        name: "Naman Jindal",
        title: "★★★★☆",
    },
    {
        quote:
            "Great for a peaceful getaway. The homemade food was delicious, though service could be faster.",
        name: "Saurabh Sharma",
        title: "★★★★☆",
    },
];


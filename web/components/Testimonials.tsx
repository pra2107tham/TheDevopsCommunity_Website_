"use client";

import Image from "next/image";
import { imgGroup4, imgFrame57 } from "../assets";

const testimonials = [
  {
    quote: `"I switched from QA to DevOps within 90 days. The trainers were brilliant and always available!"`,
    author: "Ravi, Now at Capgemini",
    initial: "R",
  },
  {
    quote: `"The hands-on labs and real projects made all the difference. I landed my first DevOps job at Infosys!"`,
    author: "Priya, Infosys",
    initial: "P",
  },
  {
    quote: `"Resume and LinkedIn help was a game changer. Got interview calls from 3 MNCs in a month."`,
    author: "Sandeep, TCS",
    initial: "S",
  },
  {
    quote: `"The community and mock interviews gave me the confidence to ace my Azure DevOps interview."`,
    author: "Anjali, Cognizant",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-stretch relative shrink-0 w-full max-w-[850px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="glass-card glass-card-blur-md glass-card-opacity-light flex flex-col h-auto md:h-[256px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full"
          >
            <div className="flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full z-10">
              <div className="flex flex-col gap-[15px] items-center relative shrink-0 w-full">
                <div className="flex gap-[20px] items-center relative shrink-0 w-full justify-between">
                  <div className="overflow-clip relative shrink-0 size-[50px]">
                    <div className="absolute inset-[15.32%_2.5%]">
                      <Image src={imgGroup4} alt="" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="h-[16.353px] relative shrink-0 w-[105.613px]">
                    <Image src={imgFrame57} alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex flex-col items-center relative shrink-0 w-full">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[14px] md:text-[16px] w-full text-center">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center justify-center relative shrink-0">
                <div className="relative rounded-[50px] shrink-0 size-[57px] bg-[#66707d] flex items-center justify-center">
                  <span className="font-sans font-semibold text-white text-[24px]">
                    {testimonial.initial}
                  </span>
                </div>
                <p className="font-sans font-semibold leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[16px] md:text-[18px]">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


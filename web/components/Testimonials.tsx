"use client";

import Image from "next/image";
import { imgGroup4, imgFrame57, imgCustomerPhoto1 } from "../assets";

const testimonials = [
  {
    quote: `"I switched from QA to DevOps within 90 days. The trainers were brilliant and always available!"`,
    author: "Ravi, Now at Capgemini",
    fontSize: "text-[18px] md:text-[21px]",
  },
  {
    quote: `"The hands-on labs and real projects made all the difference. I landed my first DevOps job at Infosys!"`,
    author: "Priya, Infosys",
    fontSize: "text-[18px] md:text-[24px]",
  },
  {
    quote: `"Resume and LinkedIn help was a game changer. Got interview calls from 3 MNCs in a month."`,
    author: "Sandeep, TCS",
    fontSize: "text-[18px] md:text-[21px]",
  },
  {
    quote: `"The community and mock interviews gave me the confidence to ace my Azure DevOps interview."`,
    author: "Anjali, Cognizant",
    fontSize: "text-[18px] md:text-[21px]",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col md:flex-row gap-[20px] items-center relative shrink-0 w-full">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <div
            key={index}
            className="glass-card glass-card-blur-md glass-card-opacity-light flex flex-col h-auto md:h-[256px] items-center justify-center px-[10px] py-[12px] relative rounded-[10px] shrink-0 w-full md:w-[405px]"
          >
            <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full max-w-[353px] z-10">
              <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <div className="flex gap-[20px] md:gap-[186px] items-center relative shrink-0 w-full justify-between">
                  <div className="overflow-clip relative shrink-0 size-[50px]">
                    <div className="absolute inset-[15.32%_2.5%]">
                      <Image src={imgGroup4} alt="" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="h-[16.353px] relative shrink-0 w-[105.613px]">
                    <Image src={imgFrame57} alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[14px] md:text-[16px] w-full whitespace-pre-wrap">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center relative shrink-0">
                <div className="relative rounded-[50px] shrink-0 size-[57px]">
                  <Image
                    src={imgCustomerPhoto1}
                    alt={testimonial.author}
                    fill
                    className="object-cover rounded-[50px] pointer-events-none"
                  />
                </div>
                <p className={`font-sans font-semibold leading-normal not-italic relative shrink-0 text-[#2d2d2d] ${testimonial.fontSize}`}>
                  — {testimonial.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] items-start relative shrink-0 w-full">
        {testimonials.slice(2, 4).map((testimonial, index) => (
          <div
            key={index + 2}
            className="glass-card glass-card-blur-md glass-card-opacity-light flex flex-col h-auto md:h-[256px] items-center justify-center px-[10px] py-[12px] relative rounded-[10px] shrink-0 w-full md:w-[405px]"
          >
            <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full max-w-[353px] z-10">
              <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <div className="flex gap-[20px] md:gap-[186px] items-center relative shrink-0 w-full justify-between">
                  <div className="overflow-clip relative shrink-0 size-[50px]">
                    <div className="absolute inset-[15.32%_2.5%]">
                      <Image src={imgGroup4} alt="" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="h-[16.353px] relative shrink-0 w-[105.613px]">
                    <Image src={imgFrame57} alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[14px] md:text-[16px] w-full whitespace-pre-wrap">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center relative shrink-0">
                <div className="relative rounded-[50px] shrink-0 size-[57px]">
                  <Image
                    src={imgCustomerPhoto1}
                    alt={testimonial.author}
                    fill
                    className="object-cover rounded-[50px] pointer-events-none"
                  />
                </div>
                <p className={`font-sans font-semibold leading-normal not-italic relative shrink-0 text-[#2d2d2d] ${testimonial.fontSize}`}>
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


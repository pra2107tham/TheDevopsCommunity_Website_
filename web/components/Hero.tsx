"use client";

import Image from "next/image";
import Link from "next/link";
import { imgImage2, imgImage3, imgGroup3 } from "../assets";

export default function Hero() {
  return (
    <div className="absolute flex flex-col md:flex-row gap-[172px] h-auto md:h-[591px] items-center left-0 md:left-[59px] top-[159px] w-full md:w-[calc(100%-118px)] max-w-full md:max-w-none px-4 md:px-0">
      <div className="flex flex-col items-start relative shrink-0 w-full md:w-[642px]">
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-[15px] items-start leading-normal relative shrink-0 w-full">
              <h1 className="font-outfit font-semibold relative shrink-0 text-[#2d2d2d] text-[40px] md:text-[64px] w-full leading-tight">
                Master DevOps with Experts Who&apos;ve Done It for 10+ Years.
              </h1>
              <p className="font-sans font-medium not-italic relative shrink-0 text-[#1447e6] text-[18px] md:text-[20px] w-full">
                AWS DevOps, Azure DevOps, and Real-World Projects
              </p>
              <p className="font-sans font-normal not-italic relative shrink-0 text-[#2d2d2d] text-[16px] md:text-[20px] w-full md:w-[574px]">
                Taught by engineers with 10+ years of hands-on experience from top tech companies.
              </p>
            </div>
            <div className="flex flex-wrap gap-[20px] items-center relative shrink-0">
              <div className="glass-card glass-card-blur-lg glass-card-opacity-medium flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0 w-auto md:w-[172px]">
                <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10">
                  2000+ Learners
                </p>
              </div>
              <div className="glass-card glass-card-blur-lg glass-card-opacity-light flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0 w-auto md:w-[223px]">
                <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10">
                  Project-Based Learning
                </p>
              </div>
              <div className="glass-card glass-card-blur-lg glass-card-opacity-light flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0 w-auto md:w-[140px]">
                <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10">
                  4+ Trainers
                </p>
              </div>
            </div>
          </div>
          <Link href="/courses">
            <div className="bg-[#66707d] flex h-[52px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shadow-[-1px_-1px_11.9px_0px_rgba(255,255,255,0.5)] shrink-0 w-auto md:w-[181px] hover:bg-[#5a626d] transition-colors cursor-pointer">
              <p className="font-sans font-semibold leading-normal not-italic relative shrink-0 text-[14px] md:text-[16px] text-white whitespace-nowrap">
                Browse Courses
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex glass-card glass-card-blur-lg glass-card-opacity-heavy flex-col gap-[20px] h-[620px] items-start p-[12px] relative rounded-[12px] shrink-0 w-[436px]">
        <div className="aspect-[680/461] relative rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
          <Image
            src={imgImage2}
            alt="DevOps Training"
            fill
            className="object-cover rounded-[20px] pointer-events-none"
          />
        </div>
        <div className="aspect-[436/312] relative rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
          <Image
            src={imgImage3}
            alt="DevOps Community"
            fill
            className="object-cover rounded-[20px] pointer-events-none"
          />
        </div>
        <div className="absolute h-[51px] left-[370px] top-[45px] w-[59px]">
          <Image src={imgGroup3} alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}


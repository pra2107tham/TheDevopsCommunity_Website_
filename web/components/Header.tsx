"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { imgShape1, imgFolder2, imgVector } from "../assets";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleCoursesClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const coursesSection = document.querySelector('section[id="courses"]');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="glass-card glass-card-blur-lg glass-card-opacity-heavy absolute flex flex-col h-[86px] items-center justify-center px-[12px] py-[6px] rounded-[50px] top-[25px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1328px] z-50">
      <div className="flex gap-[170px] items-center w-full justify-between max-lg:gap-8 max-md:flex-col max-md:gap-4">
        {/* Logo */}
        <Link href="/" className="flex gap-[14px] items-center">
          <div className="overflow-clip relative shrink-0 size-[63px]">
            <div className="absolute inset-[3.13%]">
              <div className="absolute inset-[-3.39%]">
                <Image src={imgShape1} alt="DevOps Community" fill sizes="63px" className="object-contain" />
              </div>
            </div>
            <div className="absolute contents inset-[32.03%_19.61%_31.48%_18.2%]">
              <div className="absolute inset-[32.03%_19.61%_31.48%_18.2%]">
                <Image src={imgFolder2} alt="" fill sizes="63px" className="object-contain" />
              </div>
            </div>
          </div>
          <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[20px] whitespace-nowrap">
            DevOps Community
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-[50px] items-center max-lg:gap-6">
          <Link 
            href="/courses" 
            onClick={handleCoursesClick}
            className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[20px] hover:text-[#1447e6] transition-colors cursor-pointer whitespace-nowrap"
          >
            Courses
          </Link>
          <Link 
            href="/webinars"
            className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[20px] hover:text-[#1447e6] transition-colors cursor-pointer whitespace-nowrap"
          >
            Webinars
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex gap-[13px] items-center font-sans font-normal leading-normal not-italic relative shrink-0 text-[#2d2d2d] text-[20px] hover:text-[#1447e6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Solutions
              <div className="flex h-[7.364px] items-center justify-center relative shrink-0 w-[12.728px]">
                <div className={`flex-none transition-transform ${isSolutionsOpen ? 'rotate-180' : 'rotate-90'}`}>
                  <div className="h-[12.728px] relative w-[7.364px]">
                    <Image src={imgVector} alt="" fill sizes="12.728px" className="object-contain" />
                  </div>
                </div>
              </div>
            </button>
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-2 glass-card glass-card-blur-md glass-card-opacity-medium rounded-[10px] p-4 min-w-[200px] z-50">
                <Link
                  href="/mock-interviews"
                  className="block font-sans font-normal text-[#2d2d2d] text-[18px] py-2 hover:text-[#1447e6] transition-colors"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Mock Interviews
                </Link>
                <Link
                  href="/blog"
                  className="block font-sans font-normal text-[#2d2d2d] text-[18px] py-2 hover:text-[#1447e6] transition-colors"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Blog
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Register for Webinar Button - Desktop */}
        <Link 
          href="/webinars/terraform-azure-5day"
          className="hidden md:block bg-[rgba(147,155,164,0.49)] flex h-[52px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0 hover:bg-[rgba(147,155,164,0.6)] transition-colors cursor-pointer"
        >
          <p className="font-sans font-semibold leading-normal not-italic relative shrink-0 text-[20px] text-[rgba(45,45,45,0.79)] whitespace-nowrap">
            Register For Webinar
          </p>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-[#2d2d2d]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-card glass-card-blur-md glass-card-opacity-heavy rounded-[20px] p-4 z-50">
          <div className="flex flex-col gap-4">
            <Link
              href="/courses"
              onClick={(e) => {
                handleCoursesClick(e);
                setIsMobileMenuOpen(false);
              }}
              className="font-sans font-normal text-[#2d2d2d] text-[18px] hover:text-[#1447e6] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/webinars"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans font-normal text-[#2d2d2d] text-[18px] hover:text-[#1447e6] transition-colors"
            >
              Webinars
            </Link>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center justify-between font-sans font-normal text-[#2d2d2d] text-[18px] hover:text-[#1447e6] transition-colors"
              >
                Solutions
                <div className={`transition-transform ${isSolutionsOpen ? 'rotate-180' : 'rotate-90'}`}>
                  <Image src={imgVector} alt="" width={12} height={7} className="object-contain" />
                </div>
              </button>
              {isSolutionsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/mock-interviews"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSolutionsOpen(false);
                    }}
                    className="font-sans font-normal text-[#2d2d2d] text-[16px] hover:text-[#1447e6] transition-colors"
                  >
                    Mock Interviews
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSolutionsOpen(false);
                    }}
                    className="font-sans font-normal text-[#2d2d2d] text-[16px] hover:text-[#1447e6] transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/webinars/terraform-azure-5day"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[rgba(147,155,164,0.49)] flex h-[52px] items-center justify-center px-[18px] py-[12px] rounded-[30px] hover:bg-[rgba(147,155,164,0.6)] transition-colors"
            >
              <p className="font-sans font-semibold text-[18px] text-[rgba(45,45,45,0.79)] whitespace-nowrap">
                Register For Webinar
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}


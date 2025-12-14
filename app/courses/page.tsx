"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaAws, FaAngleRight } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiNetflix } from "react-icons/si";
import Header from "@/web/components/Header";
import Footer from "@/web/components/Footer";
import { imgImage10 } from "@/web/assets";

const courses = [
  {
    id: "azure-devops",
    title: "Azure DevOps Course",
    description: "Master Azure, Azure DevOps and core DevOps tools: fundamentals, networking, compute, storage, databases, AKS, CI/CD (YAML), Terraform, Docker, Kubernetes, monitoring, security and a real capstone project.",
    icon: <VscAzure className="text-white w-8 h-8" />,
    iconBg: "bg-[#0078d4]",
    link: "/courses/azure-devops",
    tags: ["Azure", "Azure DevOps", "Terraform", "Docker", "Kubernetes"],
  },
  {
    id: "aws-devops",
    title: "AWS DevOps Certification Course",
    description: "Master DevOps principles and tools on the AWS cloud. From CI/CD pipelines to Infrastructure as Code, become a certified AWS DevOps Engineer.",
    icon: <FaAws className="text-white w-8 h-8" />,
    iconBg: "bg-[#ff9900]",
    link: "/courses/aws-devops",
    tags: ["AWS", "DevOps", "CI/CD", "Terraform", "Kubernetes"],
  },
  {
    id: "devsecops-netflix-project",
    title: "DevSecOps Project: Netflix-Clone on AWS",
    description: "Deploy a full-stack Netflix-clone on AWS with CI/CD, Security Automation, Monitoring & GitOps. Build production-grade DevSecOps pipelines with real-world hands-on experience.",
    icon: <SiNetflix className="text-white w-8 h-8" />,
    iconBg: "bg-[#e50914]",
    link: "/courses/devsecops-netflix-project",
    tags: ["DevSecOps", "AWS", "CI/CD", "Security", "GitOps"],
    isProject: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 90 },
  }),
};

export default function CoursesPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          src={imgImage10}
          alt="DevOps Community Background"
          fill
          className="object-cover object-center pointer-events-none"
          priority
          unoptimized
        />
      </div>
      {/* Fallback background color */}
      <div className="fixed inset-0 -z-20 bg-[#dee2e9]" />

      {/* Main Content Container with Header and Hero */}
      <div className="glass-card-main relative min-h-[700px] md:min-h-[800px] mx-auto my-[23px] rounded-[32px] w-[calc(100%-50px)] max-w-[1383.548px]">
        <div className="relative min-h-[700px] md:min-h-[800px] w-full z-10">
          <Header />
          {/* Courses Hero Section */}
          <div className="absolute flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-start left-0 md:left-[59px] top-[120px] md:top-[140px] w-full md:w-[calc(100%-118px)] max-w-full md:max-w-none px-4 md:px-0 md:pr-[59px] pb-0">
            {/* Left Content */}
            <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full md:w-[60%]">
              <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <h1 className="font-outfit font-semibold relative shrink-0 text-[#2d2d2d] text-[32px] md:text-[56px] w-full leading-tight">
                  DevOps Courses & Projects
                </h1>
                <p className="font-sans font-medium not-italic relative shrink-0 text-[#1447e6] text-[18px] md:text-[22px] w-full">
                  Master AWS DevOps, Azure DevOps, and Real-World DevSecOps Projects
                </p>
                <p className="font-sans font-normal not-italic relative shrink-0 text-[#2d2d2d] text-[16px] md:text-[18px] w-full leading-relaxed">
                  Accelerate your career with our industry-leading DevOps courses and hands-on projects. Learn from engineers with 10+ years of experience from top tech companies. Get hands-on experience with real-world projects that prepare you for DevOps roles at leading organizations.
                </p>
              </div>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-[15px] items-center relative shrink-0 w-full">
                <div className="glass-card glass-card-blur-lg glass-card-opacity-medium flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10 whitespace-nowrap">
                    Live Classes
                  </p>
                </div>
                <div className="glass-card glass-card-blur-lg glass-card-opacity-light flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10 whitespace-nowrap">
                    Hands-On Projects
                  </p>
                </div>
                <div className="glass-card glass-card-blur-lg glass-card-opacity-light flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10 whitespace-nowrap">
                    Expert Mentorship
                  </p>
                </div>
                <div className="glass-card glass-card-blur-lg glass-card-opacity-light flex h-[40px] items-center justify-center px-[18px] py-[12px] relative rounded-[30px] shrink-0">
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-[#1447e6] text-[14px] md:text-[16px] z-10 whitespace-nowrap">
                    Resume Support
                  </p>
                </div>
              </div>

              {/* Course Highlights */}
              <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-sans font-semibold text-[#2d2d2d] text-[16px] md:text-[18px]">
                  What You&apos;ll Learn:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] w-full">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0078d4] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px]">
                      <VscAzure className="text-white w-5 h-5" />
                    </div>
                    <p className="font-sans font-normal text-[#2d2d2d] text-[14px] md:text-[16px]">
                      Azure DevOps & Cloud Services
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#ff9900] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px]">
                      <FaAws className="text-white w-5 h-5" />
                    </div>
                    <p className="font-sans font-normal text-[#2d2d2d] text-[14px] md:text-[16px]">
                      AWS DevOps & CI/CD Pipelines
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e50914] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px]">
                      <SiNetflix className="text-white w-5 h-5" />
                    </div>
                    <p className="font-sans font-normal text-[#2d2d2d] text-[14px] md:text-[16px]">
                      Real-World DevSecOps Projects
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#66707d] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px]">
                      <FaAngleRight className="text-white w-5 h-5" />
                    </div>
                    <p className="font-sans font-normal text-[#2d2d2d] text-[14px] md:text-[16px]">
                      Docker, Kubernetes & Terraform
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats/Highlights */}
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full md:w-[38%] md:items-stretch">
              <div className="glass-card glass-card-blur-md glass-card-opacity-light flex flex-col gap-[24px] items-start px-[24px] py-[28px] relative rounded-[12px] shrink-0 w-full h-full">
                <p className="font-sans font-semibold text-[#2d2d2d] text-[18px] md:text-[20px] w-full">
                  Why Choose Our Courses?
                </p>
                <div className="flex flex-col gap-[18px] items-start w-full">
                  <div className="flex items-start gap-3 w-full">
                    <div className="bg-[#1447e6] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px] mt-0.5">
                      <span className="text-white text-[18px] font-bold">✓</span>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className="font-sans font-semibold text-[#2d2d2d] text-[14px] md:text-[16px]">
                        Industry-Relevant Curriculum
                      </p>
                      <p className="font-sans font-normal text-[#2d2d2d]/70 text-[12px] md:text-[14px] leading-relaxed">
                        Updated content aligned with current industry standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 w-full">
                    <div className="bg-[#1447e6] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px] mt-0.5">
                      <span className="text-white text-[18px] font-bold">✓</span>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className="font-sans font-semibold text-[#2d2d2d] text-[14px] md:text-[16px]">
                        Project-Based Learning
                      </p>
                      <p className="font-sans font-normal text-[#2d2d2d]/70 text-[12px] md:text-[14px] leading-relaxed">
                        Build real-world projects for your portfolio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 w-full">
                    <div className="bg-[#1447e6] flex items-center justify-center p-2 rounded-[8px] shrink-0 size-[36px] mt-0.5">
                      <span className="text-white text-[18px] font-bold">✓</span>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className="font-sans font-semibold text-[#2d2d2d] text-[14px] md:text-[16px]">
                        Lifetime Access
                      </p>
                      <p className="font-sans font-normal text-[#2d2d2d]/70 text-[12px] md:text-[14px] leading-relaxed">
                        Access course materials and updates forever
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Button */}
          <button
            onClick={() => {
              const coursesSection = document.getElementById('courses-section');
              if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <p className="font-sans font-normal text-[#2d2d2d]/60 text-[12px] whitespace-nowrap group-hover:text-[#1447e6] transition-colors">
              Explore Courses
            </p>
            <div className="animate-bounce">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#2d2d2d]/60 group-hover:text-[#1447e6] transition-colors"
              >
                <path 
                  d="M7 10L12 15L17 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Courses Content Section */}
      <div id="courses-section" className="relative w-full mt-[80px] md:mt-[120px]">
        <div className="relative flex flex-col gap-[60px] md:gap-[80px] items-center justify-center pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px] px-4 max-w-[1447.97px] mx-auto">
          {/* Courses Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] items-stretch w-full">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative group w-full"
                >
                  <div className={`${
                    course.isProject 
                      ? "glass-card-blue" 
                      : "glass-card glass-card-blur-md glass-card-opacity-light"
                  } flex flex-col h-full items-start px-[24px] py-[28px] relative rounded-[12px] shrink-0 w-full hover:scale-[1.02] transition-transform`}>
                    <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full z-10">
                      {/* Icon and Badge */}
                      <div className="flex items-center justify-between w-full">
                        <div className={`${course.iconBg} flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[60px] shadow-lg`}>
                          {course.icon}
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
                          course.isProject 
                            ? "bg-white/50 text-white" 
                            : "glass-card glass-card-blur-sm glass-card-opacity-medium text-[#2d2d2d]"
                        }`}>
                          {course.isProject ? 'Project' : 'Featured'}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className={`font-sans font-semibold leading-tight text-[20px] md:text-[24px] w-full ${
                        course.isProject ? "text-white" : "text-[#2d2d2d]"
                      }`}>
                        {course.title}
                      </h2>

                      {/* Description */}
                      <p className={`font-sans font-normal leading-relaxed text-[14px] md:text-[16px] w-full ${
                        course.isProject ? "text-white/90" : "text-[#2d2d2d]"
                      }`}>
                        {course.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 w-full">
                        {course.tags.map((tag, i) => (
                          <span 
                            key={tag} 
                            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                              course.isProject
                                ? "bg-white/30 text-white"
                                : "glass-card glass-card-blur-sm glass-card-opacity-light text-[#2d2d2d]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full mt-auto pt-4">
                        <div className={`text-xs font-semibold whitespace-nowrap ${
                          course.isProject ? "text-white/80" : "text-[#2d2d2d]/70"
                        }`}>
                          Starts weekly • Live doubt support
                        </div>
                        <Link href={course.link} className="w-full sm:w-auto">
                          <button className={`rounded-[30px] font-semibold py-3 px-5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap ${
                            course.isProject
                              ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                              : "bg-[#66707d] hover:bg-[#5a626d] text-white shadow-[-1px_-1px_11.9px_0px_rgba(255,255,255,0.5)]"
                          }`}>
                            <span className="whitespace-nowrap">View Details</span>
                            <FaAngleRight className="transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

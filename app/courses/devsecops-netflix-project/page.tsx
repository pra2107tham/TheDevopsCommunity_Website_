"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  FaShieldAlt, 
  FaDocker, 
  FaCloud, 
  FaCogs, 
  FaCode, 
  FaGitAlt, 
  FaChartLine,
  FaBell,
  FaAws,
  FaCheckCircle
} from "react-icons/fa";
import { SiNetflix, SiJenkins, SiPrometheus, SiGrafana, SiArgo } from "react-icons/si";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import RazorpayButton from "@/components/RazorpayButton/AWS_Course_RazorpayButton";
import { motion } from "motion/react";
import Header from "@/web/components/Header";
import Footer from "@/web/components/Footer";
import { imgImage10 } from "@/web/assets";

const modules = [
  {
    title: "DevSecOps Foundations",
    topics: [
      {
        icon: <FaShieldAlt className="text-blue-600" size={28} />,
        title: "Why DevSecOps Matters",
        desc: "Understanding how security fits into modern delivery pipelines and the shift-left security mindset with industry best practices.",
      },
      {
        icon: <FaShieldAlt className="text-green-600" size={28} />,
        title: "Security Best Practices",
        desc: "Learn industry-standard security practices and how to integrate them into your development workflow.",
      },
    ],
  },
  {
    title: "Containerization & Cloud Deployment",
    topics: [
      {
        icon: <FaDocker className="text-blue-400" size={28} />,
        title: "Dockerizing Netflix-Clone",
        desc: "Containerize the full-stack Netflix-clone application using Docker, creating optimized images for production deployment.",
      },
      {
        icon: <FaCloud className="text-orange-500" size={28} />,
        title: "AWS Deployment",
        desc: "Deploy to AWS using EC2 or EKS, managing cloud resources and understanding infrastructure essentials for production workloads.",
      },
    ],
  },
  {
    title: "CI/CD Pipeline Implementation",
    topics: [
      {
        icon: <SiJenkins className="text-red-500" size={28} />,
        title: "Build & Test Automation",
        desc: "Set up automated builds, testing, and container image creation using Jenkins or similar CI tools.",
      },
      {
        icon: <FaCogs className="text-blue-600" size={28} />,
        title: "Secure Pipeline Configuration",
        desc: "Securing credentials, handling private registries, and implementing secure deployment workflows.",
      },
    ],
  },
  {
    title: "Security Automation (Sec in DevSecOps)",
    topics: [
      {
        icon: <FaCode className="text-purple-600" size={28} />,
        title: "Static Code Analysis (SAST)",
        desc: "Implement automated static code analysis to catch security vulnerabilities early in the development cycle.",
      },
      {
        icon: <FaShieldAlt className="text-red-600" size={28} />,
        title: "Vulnerability Scanning",
        desc: "Dependency vulnerability scanning (SCA) and container image scanning for CVEs. Understanding security reports and fixing issues.",
      },
    ],
  },
  {
    title: "GitOps Deployment",
    topics: [
      {
        icon: <FaGitAlt className="text-orange-500" size={28} />,
        title: "Git as Source of Truth",
        desc: "Managing deployments declaratively using Git as the single source of truth for infrastructure and application code.",
      },
      {
        icon: <SiArgo className="text-blue-600" size={28} />,
        title: "ArgoCD Automation",
        desc: "Using ArgoCD (or similar tools) to automate deployment to Kubernetes, implementing GitOps workflows.",
      },
    ],
  },
  {
    title: "Monitoring & Observability",
    topics: [
      {
        icon: <SiPrometheus className="text-orange-600" size={28} />,
        title: "Prometheus Setup",
        desc: "Deploying Prometheus for metrics collection and understanding how to monitor application and system performance.",
      },
      {
        icon: <SiGrafana className="text-orange-500" size={28} />,
        title: "Grafana Dashboards",
        desc: "Creating comprehensive dashboards for application and system metrics, visualizing performance and health.",
      },
    ],
  },
  {
    title: "Notifications & Reporting",
    topics: [
      {
        icon: <FaBell className="text-yellow-500" size={28} />,
        title: "Alert Configuration",
        desc: "Setting up alerts for failures, performance issues, and resource spikes with automated notifications.",
      },
      {
        icon: <FaChartLine className="text-green-600" size={28} />,
        title: "Email & Slack Integration",
        desc: "Email and Slack notifications for pipeline status, with monitoring alerts integrated into real-time dashboards.",
      },
    ],
  },
  {
    title: "Production Deployment",
    topics: [
      {
        icon: <SiNetflix className="text-red-600" size={28} />,
        title: "Netflix-Clone Deployment",
        desc: "End-to-end production-style deployment of the Netflix-clone application using all learned DevSecOps practices.",
      },
      {
        icon: <FaAws className="text-orange-500" size={28} />,
        title: "AWS Production Setup",
        desc: "Complete AWS environment setup with production-grade configurations, security, and scalability considerations.",
      },
    ],
  },
];

const learningOutcomes = [
  "DevSecOps foundations and security-first mindset",
  "Containerization with Docker and cloud deployment",
  "CI/CD pipeline implementation with Jenkins",
  "Automated security scanning (SAST, SCA, container scanning)",
  "GitOps deployment with ArgoCD",
  "Monitoring with Prometheus and Grafana",
  "Production-grade deployment workflows",
  "End-to-end ownership of the full lifecycle"
];

const targetRoles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "SRE (Site Reliability Engineer)",
  "Platform Engineer",
  "DevSecOps Specialist"
];

function CurriculumCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="glass-card glass-card-blur-sm glass-card-opacity-light flex flex-col gap-4 items-start px-[20px] py-[24px] relative rounded-[12px] shrink-0 w-full hover:scale-[1.02] transition-transform">
      <div className="flex items-center gap-3 w-full">
        <div className="w-[48px] h-[48px] rounded-full bg-[#e50914]/10 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="font-outfit font-semibold text-[#2d2d2d] text-[16px] md:text-[18px] leading-tight flex-1">{title}</div>
      </div>
      <div className="font-sans font-normal text-[#2d2d2d] text-[14px] md:text-[15px] leading-relaxed w-full">{desc}</div>
    </div>
  );
}

export default function DevSecOpsNetflixProjectPage() {
  const [showSubheading, setShowSubheading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const headingWords = "DevSecOps Project: Netflix-Clone on AWS";
  const subheadingWords = "Deploy with CI/CD, Security, Monitoring & GitOps";
  const descriptionWords = "Build a production-grade DevSecOps pipeline deploying a full-stack Netflix-clone on AWS. Learn security automation, CI/CD, monitoring, and GitOps with real-world hands-on experience.";

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

      {/* Main Content Container with Header */}
      <div className="glass-card-main relative mx-auto my-[23px] rounded-[32px] w-[calc(100%-50px)] max-w-[1383.548px]">
        <div className="relative w-full z-10">
          <Header />
          
          {/* Hero Section */}
          <div className="relative w-full pt-[80px] md:pt-[80px] pb-[40px] md:pb-[50px] px-4 md:px-[59px]">
            <div className="flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-start">
              {/* Left side - Hero Content */}
              <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full md:w-[60%]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-1"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-[60px] h-[60px] rounded-full bg-[#e50914]/10 flex items-center justify-center"
                  >
                    <SiNetflix className="text-[#e50914]" size={40} />
                  </motion.div>
                  <div className="text-3xl lg:text-5xl lg:leading-tight font-outfit font-semibold text-[#2d2d2d]">
                    <TextGenerateEffect 
                      words={headingWords} 
                      onComplete={() => setShowSubheading(true)}
                    />
                  </div>
                </motion.div>
                {showSubheading && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl lg:text-2xl lg:leading-tight mt-2 font-sans font-medium text-[#1447e6] pl-1"
                  >
                    <TextGenerateEffect 
                      words={subheadingWords} 
                      onComplete={() => setShowDescription(true)}
                    />
                  </motion.div>
                )}
                {showDescription && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base lg:text-lg lg:leading-relaxed mt-3 font-sans font-normal text-[#2d2d2d] pl-1"
                  >
                    <TextGenerateEffect 
                      words={descriptionWords} 
                      onComplete={() => setShowContent(true)}
                    />
                  </motion.div>
                )}
                {/* Project badges */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mt-5 flex flex-wrap gap-3"
                >
                  <span className="glass-card glass-card-blur-lg glass-card-opacity-medium inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-sans font-semibold text-[#1447e6] whitespace-nowrap">
                    🎯 Hands-On Project
                  </span>
                  <span className="glass-card glass-card-blur-lg glass-card-opacity-light inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-sans font-semibold text-[#2d2d2d] whitespace-nowrap">
                    Production-Grade
                  </span>
                  <span className="glass-card glass-card-blur-lg glass-card-opacity-medium inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-sans font-semibold text-[#1447e6] whitespace-nowrap">
                    Job-Ready Skills
                  </span>
                  <span className="glass-card glass-card-blur-lg glass-card-opacity-light inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-sans font-semibold text-[#2d2d2d] whitespace-nowrap">
                    📅 13-14th December 2025
                  </span>
                  <span className="glass-card glass-card-blur-lg glass-card-opacity-medium inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-sans font-semibold text-[#1447e6] whitespace-nowrap">
                    ⏰ 9AM to 1PM IST
                  </span>
                </motion.div>
              </div>

              {/* Right side - Pricing Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[38%] relative"
              >
                <div className="glass-card glass-card-blur-sm glass-card-opacity-light relative rounded-[20px] p-6 md:p-8 overflow-hidden">
                  <div className="flex flex-col items-center text-center mb-6 relative z-10">
                    <div className="text-sm font-sans font-semibold text-[#2d2d2d]/70 mb-2">Project Price</div>
                    <div className="flex items-end justify-center gap-2 mb-4">
                      <span className="text-3xl md:text-4xl font-outfit font-extrabold text-[#2d2d2d]">₹1,499</span>
                    </div>
                    <div className="text-sm md:text-base font-sans font-normal text-[#2d2d2d] max-w-[686px] mb-4">
                      Total 7-8 Hours End-to-End Project
                    </div>
                    <div className="flex flex-col gap-2 mb-6 w-full max-w-[400px]">
                      <div className="glass-card glass-card-blur-lg glass-card-opacity-medium inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-sans font-semibold text-[#1447e6] whitespace-nowrap justify-center">
                        📅 13-14th December 2025
                      </div>
                      <div className="glass-card glass-card-blur-lg glass-card-opacity-medium inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-sans font-semibold text-[#1447e6] whitespace-nowrap justify-center">
                        ⏰ 9AM to 1PM IST
                      </div>
                    </div>
                    {/* Benefits bullets */}
                    <div className="flex flex-col gap-3 mb-6 text-sm font-sans font-normal text-[#2d2d2d] w-full">
                      <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1447e6]" /> Real-world Netflix-clone deployment</div>
                      <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1447e6]" /> Complete DevSecOps pipeline</div>
                      <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1447e6]" /> Security automation & monitoring</div>
                      <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1447e6]" /> GitOps & CI/CD implementation</div>
                      <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1447e6]" /> Lifetime access with recordings</div>
                    </div>
                    {/* Razorpay Button */}
                    <RazorpayButton
                      url="https://rzp.io/rzp/pSK4kUHK"
                      text="Enroll Now — ₹1,499"
                      color="#1447e6"
                      size="large"
                      className="w-full"
                    />
                    <div className="mt-3 text-[12px] font-sans text-[#2d2d2d]/50 text-center">Payments powered by Razorpay</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Outside Hero Container */}
      <div className="relative w-full mt-[80px] md:mt-[120px]">
        <div className="relative flex flex-col gap-[60px] md:gap-[80px] items-center justify-center pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px] px-4 max-w-[1447.97px] mx-auto">

          {/* Project Overview & What You'll Learn - Combined */}
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[1261px]"
            >
              <div className="glass-card glass-card-blur-sm glass-card-opacity-light p-6 md:p-8 rounded-[20px]">
                <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-4 text-[#2d2d2d]">Project Overview</h2>
                <p className="font-sans font-normal text-[#2d2d2d] leading-relaxed mb-4">
                  This project teaches learners how to build, secure, deploy, and monitor a full-stack Netflix-clone application on AWS using a production-grade DevSecOps pipeline. The focus is not just on application deployment, but on integrating security, observability, and automated delivery workflows that mirror real enterprise environments.
                </p>
                <p className="font-sans font-normal text-[#2d2d2d] leading-relaxed mb-6">
                  Learners implement the entire lifecycle — <strong>code → container → security scans → CI/CD → deployment → monitoring → GitOps</strong> — exactly how modern engineering teams operate.
                </p>
                
                <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-4 text-[#2d2d2d] mt-8">What You&apos;ll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#1447e6] mt-1 flex-shrink-0" size={20} />
                      <span className="font-sans font-normal text-[#2d2d2d]">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Modules */}
          {showContent && modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, type: "spring", stiffness: 90 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-[1261px]"
            >
              <div className="glass-card glass-card-blur-sm glass-card-opacity-light p-6 md:p-8 rounded-[20px]">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="glass-card glass-card-blur-lg glass-card-opacity-medium px-4 py-1.5 text-sm font-sans font-semibold rounded-full text-[#1447e6] whitespace-nowrap">
                    Module {i + 1}
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-outfit font-semibold mb-5 text-[#2d2d2d]">{mod.title}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mod.topics.map((topic) => (
                    <CurriculumCard key={topic.title} {...topic} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Why This Project Is Valuable */}
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-[1261px]"
            >
              <div className="glass-card glass-card-blur-sm glass-card-opacity-light p-6 md:p-8 rounded-[20px]">
                <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-4 text-[#2d2d2d]">Why This Project Is Valuable</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans font-semibold text-[#2d2d2d] mb-2">Industry-Level Practical Experience</h3>
                    <p className="font-sans font-normal text-[#2d2d2d]">Students don&apos;t just learn tools — they learn how modern engineering teams actually ship software in the real world.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#2d2d2d] mb-2">Security-First Delivery Approach</h3>
                    <p className="font-sans font-normal text-[#2d2d2d]">The project integrates automated security checks across the pipeline, teaching learners how to prevent vulnerabilities early.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#2d2d2d] mb-2">Cloud-Native Workflow Exposure</h3>
                    <p className="font-sans font-normal text-[#2d2d2d]">Students get hands-on experience with containers, orchestration, cloud infrastructure, monitoring, and GitOps.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#2d2d2d] mb-2">End-to-End Ownership</h3>
                    <p className="font-sans font-normal text-[#2d2d2d]">This project lets learners handle the full lifecycle: development → security → deployment → monitoring → scaling.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Target Roles */}
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-[1261px]"
            >
              <div className="glass-card glass-card-blur-sm glass-card-opacity-light p-6 md:p-8 rounded-[20px]">
                <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-4 text-[#2d2d2d]">Perfect For These Roles</h2>
                <p className="font-sans font-normal text-[#2d2d2d] mb-4">Completing this project demonstrates competency for roles such as:</p>
                <div className="flex flex-wrap gap-3">
                  {targetRoles.map((role, index) => (
                    <span key={index} className="glass-card glass-card-blur-lg glass-card-opacity-light px-4 py-2 rounded-full text-sm font-sans font-semibold text-[#2d2d2d] whitespace-nowrap">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-full mt-[80px] md:mt-[120px]">
        <div className="relative flex flex-col gap-[60px] md:gap-[80px] items-center justify-center pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px] px-4 max-w-[1447.97px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}


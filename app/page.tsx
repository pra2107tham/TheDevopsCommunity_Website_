import Image from "next/image";
import Header from "@/web/components/Header";
import Hero from "@/web/components/Hero";
import Companies from "@/web/components/Companies";
import Features from "@/web/components/Features";
import Testimonials from "@/web/components/Testimonials";
import FAQ from "@/web/components/FAQ";
import Footer from "@/web/components/Footer";
import { imgImage10 } from "@/web/assets";

export default function Home() {
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

      {/* Main Content Container */}
      <div className="glass-card-main relative min-h-[785.582px] mx-auto my-[23px] rounded-[32px] w-[calc(100%-50px)] max-w-[1383.548px]">
        <div className="relative min-h-[785.582px] w-full z-10">
          <Header />
          <Hero />
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="relative w-full mt-[120px]">
        <div className="relative flex flex-col gap-[80px] md:gap-[120px] items-center justify-center py-[60px] md:py-[129px] px-4 max-w-[1447.97px] mx-auto">
          <Companies />
          <Features />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
}

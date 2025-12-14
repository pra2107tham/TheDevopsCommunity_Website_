import Image from "next/image";
import { imgGroup, imgGroup1, imgGroup2 } from "../assets";

const features = [
  {
    title: "Real-world project-based learning",
    icon: imgGroup,
    isBlue: false,
  },
  {
    title: "Resume and LinkedIn optimization",
    icon: imgGroup1,
    isBlue: true,
  },
  {
    title: "Doubt support from expert engineers",
    icon: imgGroup2,
    isBlue: false,
  },
  {
    title: "Peer community + Mock interview help",
    icon: imgGroup,
    isBlue: false,
  },
  {
    title: "Lifetime access to training materials",
    icon: imgGroup1,
    isBlue: false,
  },
];

export default function Features() {
  return (
    <div className="flex flex-col gap-[39px] items-center relative shrink-0 w-full max-w-[1298px]">
      <p className="font-outfit font-semibold leading-normal min-w-full relative shrink-0 text-[#2d2d2d] text-[32px] md:text-[48px] text-center w-[min-content] whitespace-pre-wrap">
        DevOps That Gets You Hired
      </p>
      <div className="flex flex-col gap-[22px] items-center justify-between px-[14px] py-[12px] relative shrink-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] items-center relative shrink-0 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${
                feature.isBlue ? "glass-card-blue" : "glass-card glass-card-blur-md glass-card-opacity-light"
              } flex flex-col h-auto md:h-[255px] items-center justify-center px-[40px] md:px-[100px] py-[39px] relative rounded-[10px] shrink-0 w-full`}
            >
              <div className="flex flex-col gap-[30px] items-center relative shrink-0 w-full max-w-[312px] z-10">
                <div
                  className={`${
                    feature.isBlue ? "bg-[rgba(255,255,255,0.5)]" : "bg-[#66707d]"
                  } flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[75px]`}
                >
                  <div className="h-[61px] overflow-clip relative shrink-0 w-[60px]">
                    <div className="absolute inset-[6.27%_6.25%_6.26%_6.25%]">
                      <Image src={feature.icon} alt="" fill className="object-contain" />
                    </div>
                  </div>
                </div>
                <p
                  className={`font-sans font-semibold leading-normal min-w-full not-italic relative shrink-0 ${
                    feature.isBlue ? "text-white" : "text-[#2d2d2d]"
                  } text-[18px] md:text-[24px] text-center w-[min-content] whitespace-pre-wrap`}
                >
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


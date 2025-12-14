import Image from "next/image";
import {
  imgFrame,
  imgFrame1,
  imgFrame2,
  imgFrame3,
  imgFrame4,
  imgFrame5,
  imgFrame6,
  imgFrame7,
} from "../assets";

export default function Companies() {
  const companyLogos = [
    imgFrame,
    imgFrame1,
    imgFrame2,
    imgFrame3,
    imgFrame4,
    imgFrame5,
    imgFrame6,
    imgFrame7,
  ];

  return (
    <div className="flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <p className="font-outfit font-semibold leading-normal min-w-full relative shrink-0 text-[#2d2d2d] text-[32px] md:text-[52px] text-center w-[min-content]">
        Trusted by learners working at
      </p>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0 w-full">
        <div className="col-[1] flex flex-wrap gap-[20px] md:gap-[37.706px] h-auto md:h-[146.369px] items-center justify-center ml-0 mt-0 relative row-[1] w-full max-w-[1447.97px]">
          {companyLogos.map((logo, index) => (
            <div key={index} className="relative shrink-0 size-[80px] md:size-[127.369px]">
              <Image src={logo} alt={`Company logo ${index + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


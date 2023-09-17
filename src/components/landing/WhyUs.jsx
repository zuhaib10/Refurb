import React from "react";
import crown from "~/assets/crown.svg";
import apple from "~/assets/apple.svg";
import asus from "~/assets/asus.svg";
import mi from "~/assets/mi.svg";
import moto from "~/assets/moto.svg";
import nokia from "~/assets/nokia.svg";
import oppo from "~/assets/oppo.svg";
import realme from "~/assets/realme.svg";
import samsung from "~/assets/samsung.svg";
import vivo from "~/assets/vivo.svg";
import oneplus from "~/assets/oneplus.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WhyUs = () => {
  const details = ["Competitive Offers", "Effortless Process", "Environmentally Responsible", "Secure Transactions", "Local Pickup", "Skilled Assessment"];
  const brands = [
    {
      name: "samsung",
      image: samsung,
      size: 120,
    },
    {
      name: "vivo",
      image: vivo,
      size: 100,
    },
    {
      name: "apple",
      image: apple,
      size: 45,
    },
    {
      name: "mi",
      image: mi,
      size: 45,
    },
    {
      name: "oppo",
      image: oppo,
      size: 100,
    },
    {
      name: "realme",
      image: realme,
      size: 100,
    },
    {
      name: "oneplus",
      image: oneplus,
      size: 100,
    },

    {
      name: "moto",
      image: moto,
      size: 100,
    },
    {
      name: "nokia",
      image: nokia,
      size: 100,
    },
    {
      name: "asus",
      image: asus,
      size: 100,
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row items-center md:text-left text-center py-10 md:py-24">
          <div className="basis-3/6	">
            <h1 className="font-semibold text-xl md:text-2xl">Why Choose Us</h1>
            <h4 className="text-[#828282] text-sm md:text-lg py-4 md:pb-10 max-w-md">
              At our platform, we offer an unparalleled experience that sets us apart. We pride ourselves on providing top-notch service and convenience to our valued users.
            </h4>
            <div className="relative flex md:flex-col md:items-start justify-center gap-5 items-center mt-5 mb-10">
              <div className="flex items-center gap-5">
                <h5> Refurb Mobi</h5>
                <div className="w-40 rounded-full bg-gradient-to-r from-transparent via-lime-300 to-lime-800 h-8" />
              </div>
              <div className="flex items-center gap-5">
                <h5>Others</h5>
                <div className="w-32 rounded-full bg-gradient-to-r from-stone-100 via-neutral-300 to-neutral-800 h-8" />
              </div>
              <h6 className="text-[12px] -bottom-6 md:left-16 absolute">Based on Real time analysis</h6>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center flex-col">
                <div className="bg-slate-200 p-4 my-3 rounded-full">
                  <Image src={crown} alt="crown" width={35} height={35} />
                </div>
                <h6>{detail}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-[#000645]  rounded-lg flex flex-col md:flex-row items-center justify-between px-10 py-5 md:py-8">
          <h4 className="text-white text-center md:text-left pb-3 md:py-0 text-xl font-semibold">
            Join Us Today and Become A<br /> Valued Selling Partner!
          </h4>
          <button className="bg-white rounded-full px-5 py-2.5 flex items-center gap-3">
            Get Started <ArrowRight />
          </button>
        </div>
        <div>
          <h5 className="text-center text-md my-10">Try branding with us </h5>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {brands.map((brand, index) => (
              <Image key={index} src={brand.image} alt={brand.name} width={brand.size} height={brand.size} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

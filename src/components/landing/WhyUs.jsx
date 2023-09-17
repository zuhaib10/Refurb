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
    <section className="bg-white" role="region" aria-label="Why Choose Us Section">
      <div className="container mx-auto">
        <header className="flex justify-between flex-col lg:flex-row items-center lg:text-left text-center py-10 lg:py-24">
          <div className="basis-3/6">
            <h1 className="font-semibold text-2xl lg:text-3xl">Why Choose Us</h1>
            <p className="text-[#828282] text-sm lg:text-lg py-4 lg:pb-10 max-w-md">
              At our platform, we offer an unparalleled experience that sets us apart. We pride ourselves on providing top-notch service and convenience to our valued users.
            </p>
            <div className="relative flex flex-col lg:items-start justify-center gap-5 items-center mt-5 mb-10" aria-label="Comparative analysis">
              <div className="flex items-center gap-5">
                <span>Refurb Mobi</span>
                <div className="w-40 rounded-full bg-gradient-to-r from-transparent via-lime-300 to-lime-800 h-8" />
              </div>
              <div className="flex items-center gap-5">
                <span>Others</span>
                <div className="w-32 rounded-full bg-gradient-to-r from-stone-100 via-neutral-300 to-neutral-800 h-8" />
              </div>
              <p className="text-[12px] -bottom-6 lg:left-16 absolute">Based on Real-time analysis</p>
            </div>
          </div>
          <div className="lg:grid-cols-3 gap-2 text-center hidden lg:grid">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center flex-col">
                <div className="bg-slate-200 p-4 my-3 rounded-full">
                  <Image src={crown} alt="Recognition Badge" width={35} height={35} />
                </div>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </header>
        <div className="w-full bg-[#000645] rounded-lg flex flex-col lg:flex-row items-center justify-between px-10 py-5 lg:py-8" aria-label="Join us banner">
          <h2 className="text-white text-center lg:text-left pb-3 lg:py-0 text-xl font-semibold">
            Join Us Today and Become A<br /> Valued Selling Partner!
          </h2>
          <button className="bg-white rounded-full px-5 py-2.5 flex items-center gap-3" aria-label="Get Started Button">
            Get Started <ArrowRight />
          </button>
        </div>
        <div>
          <h3 className="text-center text-md my-10">Try branding with us</h3>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {brands.map((brand, index) => (
              <Image key={index} src={brand.image} alt={`Brand logo of ${brand.name}`} width={brand.size} height={brand.size} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

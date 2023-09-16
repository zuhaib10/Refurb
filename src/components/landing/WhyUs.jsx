import React from "react";
import crown from "/public/assets/crown.svg";
import Image from "next/image";

const WhyUs = () => {
  const details = ["Competitive Offers", "Effortless Process", "Environmentally Responsible", "Secure Transactions", "Local Pickup", "Skilled Assessment"];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h1>Why Choose Us</h1>
            <h4>At our platform, we offer an unparalleled experience that sets us apart. We pride ourselves on providing top-notch service and convenience to our valued users.</h4>
            <div className="flex items-center">
              <h5> Refurb Mobi</h5>
              <div className="w-40 rounded-full bg-gradient-to-r from-transparent via-lime-300 to-lime-800 h-10" />
            </div>
            <div className="flex items-center">
              <h5>Others</h5>
              <div className="w-32 rounded-full bg-gradient-to-r from-stone-100 via-neutral-300 to-neutral-800 h-10" />
            </div>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center flex-col">
                <div className="bg-slate-500 p-2 rounded-full">
                  <Image src={crown} alt="crown" width={50} height={50} />
                </div>
                <h6>{detail}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-[#000645] h-16 rounded-md"></div>
        <div>
          <h5 className="text-center">Try branding with us </h5>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

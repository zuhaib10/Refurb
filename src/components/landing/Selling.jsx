import React from "react";
import Image from "next/image";
import selling from "public/img/selling.png";

const Selling = () => {
  const details = [
    {
      heading: "Submit Device Details:",
      paragraph: "Fill out our simple form with your device's information, including model, condition, and any additional comments you may have.",
    },
    {
      heading: "Submit Device Details:",
      paragraph: "Fill out our simple form with your device's information, including model, condition, and any additional comments you may have.",
    },
    {
      heading: "Submit Device Details:",
      paragraph: "Fill out our simple form with your device's information, including model, condition, and any additional comments you may have.",
    },
  ];

  return (
    <section className="bg-white mx-auto py-10 lg:py-24" role="region" aria-label="Simple Selling Process">
      <div className="container mx-auto ">
        <div className="flex justify-between flex-col lg:flex-row text-center lg:text-left">
          <div className="relative lg:basis-6/12">
            <span className="absolute text-[7rem] lg:text-[11rem]  -top-14 lg:-top-16 left-[20%] lg:-left-5 font-outline-2 text-white z-0 font-semibold" aria-hidden="true">
              3
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold !leading-relaxed ml-3 relative z-10">
              Simple Selling <br /> Process
            </h2>
            <p className="text-[#828282] text-sm md:text-lg pb-4 mt-5 lg:mt-16 md:pb-10 relative z-10 max-w-lg">
              We&apos;ve designed our process with you in mind. Submitting your device details takes only a few minutes, and our intuitive interface ensures a hassle-free experience.
            </p>
          </div>
          <div className="lg:basis-6/12">
            <Image src={selling} alt="Illustration of the selling process" width={1000} height={1000} />
          </div>
        </div>
        <div className="lg:flex justify-between gap-10 hidden">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-3 border-r">
              <span className="w-10 h-10 border rounded-full p-4 flex items-center justify-center" aria-label={`Step ${index + 1}`}>
                {index + 1}
              </span>
              <div>
                <h3>{detail.heading}</h3>
                <p className="text-[#7E7E7E] mr-5">{detail.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selling;

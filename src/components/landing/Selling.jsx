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
    <div className="bg-white mx-auto">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <div>
            <h2>
              Simple Selling <br /> Process
            </h2>
            <p>We&apos;ve designed our process with you in mind. Submitting your device details takes only a few minutes, and our intuitive interface ensures a hassle-free experience.</p>
          </div>
          <div>
            <Image src={selling} alt="selling " width={1000} height={1000} />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          {details.map((detail, index) => (
            <div key={index}>
              <h3>{detail.heading}</h3>
              <p className="text-[#7E7E7E]">{detail.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selling;

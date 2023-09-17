import React from "react";
import { Star } from "lucide-react";
import nisha from "~/img/nisha.png";
import Image from "next/image";

const Customer = () => {
  return (
    <div className="bg-[#E2F0FE] py-10">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center text-center lg:text-left gap-5">
        <div className="lg:basis-6/12">
          <h2 className="bg-black p-1 text-sm rounded-full text-white uppercase w-32 mx-auto lg:mx-0 text-center" aria-label="Section Title: Why trust us">
            why trust us
          </h2>
          <h1 className="text-4xl font-bold pt-3 leading-normal">
            Hear From Our <br />
            Satisfied Customers
          </h1>
          <h4 className="text-[#828282] text-md lg:text-lg py-2 lg:pb-10 max-w-lg">Real Stories: How Our Service Delighted Customers and Simplified Their Device Selling Journey.</h4>
          <div className="flex justify-center lg:justify-start gap-5" aria-label="Customer feedback">
            <div className="flex flex-col" aria-labelledby="impressionTitle1">
              <h2 className="text-3xl font-black" id="impressionTitle1">
                100k
              </h2>
              <h6 className="text-[#828282] text-sm lg:text-lg py-1.5">Customer Impression</h6>
              <div className="flex gap-2">
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col" aria-labelledby="impressionTitle2">
              <h2 className="text-3xl font-bold" id="impressionTitle2">
                98%
              </h2>
              <h6 className="text-[#828282] text-sm lg:text-lg py-1.5">Customer Impression</h6>
              <div className="flex gap-2">
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
                <Star fill="#651FDE" className="text-[#651FDE] w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:basis-6/12">
          <h6 className="text-[#828282]" aria-label="Customer testimonial">
            An incredible platform! Selling my phone was a breeze. The form was easy to fill, and I received a great quote quickly. The pickup service was convenient, and the payment was secure and
            prompt. A trustworthy solution for selling used devices. Highly recommended!
          </h6>
          <div className="flex items-center gap-5 mt-10" aria-label="Customer details">
            <Image src={nisha} alt="Picture of Nisha Gupta" width={50}/>
            <div>
              <h4 className="text-md">Nisha Gupta</h4>
              <h6 className="text-[#828282] text-sm">Software Engineer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;

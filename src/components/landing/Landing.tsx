import Form from "@/components/form/Form";
import Image from "next/image";
import { FC } from "react";
import apple from "/public/assets/apple.svg";
import mi from "/public/assets/mi.svg";
import samsung from "/public/assets/samsung.svg";
import vivo from "/public/assets/vivo.svg";

interface Landing {}

const Landing: FC<Landing> = ({}) => {
  let brands = [
    {
      icon: apple,
      size: 45,
      name: "Apple",
    },
    {
      icon: mi,
      size: 46,
      name: "Xiaomi",
    },
    {
      icon: samsung,
      size: 120,
      name: "Samsung",
    },
    {
      icon: vivo,
      size: 100,
      name: "Vivo",
    },
  ];

  return (
    <main role="main" className="container m-auto grid  grid-cols-2 gap-x-10 items-center ">
      <div className="max-w-2xl pt-32 pb-32">
        <h1 className="text-[38px] font-bold leading-normal text-[#02213A]" >
          Get Instant Cash for Your Used Smartphones - <span className="text-[#86af44]">Easy <br /> Process!</span>
        </h1>
        <h2 className="text-[md] my-10 leading-normal">
          Secure Transactions and Hassle-Free Pickup
          <br /> Services Available!
        </h2>
        <div className="flex gap-10 items-center ">
          {brands.map((brand, index) => (
            <Image key={index} src={brand.icon} alt={`${brand.name} logo`} width={brand.size} />
          ))}
          <span className="text-md font-[400]">& more</span>
        </div>
      </div>
      <div className="basis-5/12 relative top-24 ml-auto w-[85%]">
        <Form />
      </div>
    </main>
  );
};

export default Landing;

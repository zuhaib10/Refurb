import { FC } from "react";
import Image from "next/image";
import apple from "/public/assets/apple.svg";
import mi from "/public/assets/mi.svg";
import vivo from "/public/assets/vivo.svg";
import samsung from "/public/assets/samsung.svg";
import Form from "@/components/form/Form";

interface Landing {}

const Landing: FC<Landing> = ({}) => {
  let brands = [
    {
      icon: apple,
      size: 70,
    },
    {
      icon: mi,
      size: 60,
    },
    {
      icon: samsung,
      size: 150,
    },
    {
      icon: vivo,
      size: 150,
    },
  ];
  return (
    <main className="container m-auto flex items-center h-5/6">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold leading-normal">
          Get Instant Cash for Your Used Smartphones - <span className="text-lime-500">Easy Process!</span>
        </h1>
        <h4 className="text-xl my-10 leading-normal">
          Secure Transactions and Hassle-Free Pickup
          <br /> Services Available!
        </h4>
        <div className="flex gap-10 items-center">
          {brands.map((brand, index) => (
            <Image key={index} src={brand.icon} alt="brand logo" width={brand.size} />
          ))}
          <span className="text-xl font-medium">& more</span>
        </div>
      </div>
      <div className="max-w-2xl">
        <Form />
      </div>
    </main>
  );
};

export default Landing;

import { FC } from "react";
import Image from "next/image";
import apple from "/public/assets/apple.svg";
import mi from "/public/assets/mi.svg";
import vivo from "/public/assets/vivo.svg";
import samsung from "/public/assets/samsung.svg";
import Form from "../form/form";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  let brands = [apple, mi, vivo, samsung];
  return (
    <main className="container m-auto flex items-center h-5/6">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Get Instant Cash for Your Used Smartphones - <span className="text-lime-500">Easy Process!</span>
        </h1>
        <h4 className="text-2xl my-10">Secure Transactions and Hassle-Free Pickup Services Available!</h4>
        <div className="flex gap-5 items-center">
          {brands.map((brand, index) => (
            <Image key={index} src={brand} alt="brand logo" width={100} />
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

export default Hero;

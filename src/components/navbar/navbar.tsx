import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import brand from "/public/assets/brand.svg";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  // let navLinks = [
  //   { name: "Home", url: "/" },
  //   { name: "Buy Phone", url: "/buy" },
  //   { name: "Sell Your phone", url: "/sell" },
  //   { name: "Be our partner", url: "/partner" },
  //   { name: "Blogs", url: "/blogs" },
  // ];
  return (
    <main className="container flex justify-between items-center  p-6 m-auto ">
      <div>
        <Link href="/">
          <Image src={brand} alt="company logo" width={80} />
        </Link>
      </div>
      {/* <div className="flex gap-12">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div> */}
      <div>
        <button className=" rounded-[4px] font-[400] capitalize bg-[#A0CD59]	 py-2 px-4 ">sell now</button>
      </div>
    </main>
  );
};

export default Navbar;

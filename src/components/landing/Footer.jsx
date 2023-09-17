import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E2F0FE]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-10 px-4 md:px-20">
        <nav aria-label="Footer Navigation" className="flex gap-10 md:gap-5 flex-col md:flex-row">
          <Link href="/">Contact Us</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms</Link>
        </nav>
        <h5 className="mt-10 md:mt-0">© 2023 - Refurb Mobi</h5>
      </div>
    </footer>
  );
};

export default Footer;

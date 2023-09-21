import Customer from "@/components/landing/Customer";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import Landing from "@/components/landing/Landing";
import Selling from "@/components/landing/Selling";
import WhyUs from "@/components/landing/WhyUs";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="grad ">
      <Navbar />
      <Landing />
      <Selling />
      <Customer />
      <WhyUs />
      <Faq />
      <Footer />
    </main>
  );
}

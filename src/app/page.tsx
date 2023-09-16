import Landing from "@/components/landing/Landing";
import Navbar from "@/components/navbar/navbar";
import Selling from "@/components/landing/Selling";
import Customer from "@/components/landing/Customer";
import WhyUs from "@/components/landing/WhyUs";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="grad">
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

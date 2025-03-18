import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSpec from "@/components/ProductSpec";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Vision />
      <ProductSpec/>
      <FAQSection/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

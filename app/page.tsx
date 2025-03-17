import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Vision from "@/components/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Vision/>
    </div>
  );
}

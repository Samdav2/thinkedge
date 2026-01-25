import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar isTransparent={true} />
      <Hero />
      <Services />
      <HowWeWork />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}

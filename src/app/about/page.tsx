import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import PricingSection from "@/components/about/PricingSection";
import VisibilitySupport from "@/components/about/VisibilitySupport";
import ContactSection from "@/components/about/ContactSection";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <AboutHero />
                <AboutContent />
                <PricingSection />
                <VisibilitySupport />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

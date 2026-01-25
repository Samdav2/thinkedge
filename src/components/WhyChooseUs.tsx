import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
    const benefits = [
        "Consultancy-first approach (we advise before we act)",
        "Business idea research and strategic guidance",
        "UK-focused service delivery",
        "Clear, professional communication",
        "Strong digital delivery through EdgeBrand",
        "Reliable operational cover through EdgeCover",
        "One trusted consultancy brand with clear service divisions",
    ];

    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl uppercase max-w-2xl">
                        Why Choose THINK EDGE CONSULTANCY ?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        We bring clarity, creativity, and consistency to your digital presence.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-blue-400/30 h-80 w-full">
                            <Image
                                src="/images/why-choose-us.jpg"
                                alt="Why Choose Think Edge Consultancy"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Benefits List Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group flex items-center bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="bg-brand-primary rounded-full p-1 mr-4 flex-shrink-0">
                                    <ArrowRight className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-base">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

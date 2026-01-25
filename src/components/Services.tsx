import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    const whatWeDoList = [
        "Business idea research and evaluation",
        "Market and competitor research",
        "Business structuring and service positioning",
        "Strategy and implementation planning",
        "Digital presentation aligned with business goals",
        "Operational support planning and delivery coordination, in collaboration with client organisations",
    ];

    const edgeBrandServices = [
        "Website design and redesign",
        "Business and corporate websites",
        "Landing pages for services and campaigns",
        "Logo design and brand identity",
        "Visual consistency and brand guidance",
        "Marketing and promotional graphics",
        "Website structure, layout, and content guidance",
    ];

    const edgeCoverServices = [
        "Non-regulated healthcare support staffing",
        "Support workers and HCAs (non-regulated roles)",
        "Domestic, cleaning, and kitchen staff",
        "Commercial and office cleaning services",
        "Temporary and ongoing operational cover",
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT WE DO SECTION */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl uppercase mb-6">
                            What We Do
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                            We help clients move from uncertainty to structure by providing consultancy support focused on guidance, clarity, and professional insight to support decision-making.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-brand-dark mb-6">Our consultancy support includes:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {whatWeDoList.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-blue-50 p-6 rounded-md border-l-4 border-brand-primary">
                            <p className="text-brand-dark font-medium text-lg mb-2">
                                If you need thinking, clarity, and direction — we consult.
                            </p>
                            <p className="text-brand-dark font-medium text-lg">
                                If you need execution — we deliver through our service divisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-px bg-gray-200 mb-24"></div>

                {/* OUR SERVICE DIVISIONS */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl uppercase mb-6">
                            Our Service Divisions
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600">
                            Think Edge Consultancy delivers services through two focused service arms, under one consultancy-led brand:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* EdgeBrand */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-100">
                            <div className="h-48 lg:h-64 relative">
                                <Image
                                    src="/images/service-design.jpg"
                                    alt="EdgeBrand - Branding & Digital Presence"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white text-3xl font-bold">🔹 EdgeBrand</h3>
                                        <p className="text-white/90 font-medium text-lg">Branding & Digital Presence</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    EdgeBrand is the branding and digital delivery arm of Think Edge Consultancy, helping businesses build a clear, professional, and credible public image.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                                    We don’t just design. We guide you on what to say, how to present it, and how to structure it — ensuring your brand supports your business goals.
                                </p>

                                <h4 className="font-bold text-brand-dark mb-4 uppercase text-sm tracking-wide">EdgeBrand services include:</h4>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {edgeBrandServices.map((service, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{service}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-yellow-50 p-4 rounded text-sm text-yellow-800 mb-8 border border-yellow-100">
                                    <strong>Note:</strong> EdgeBrand focuses on professional presentation and clarity. We do not guarantee marketing performance, traffic, or lead generation outcomes.
                                </div>

                                <p className="text-brand-dark font-bold mb-6 text-center italic">
                                    If your business needs to look professional, trusted, and ready — EdgeBrand delivers.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                    <Link href="#contact" className="flex-1 text-center bg-brand-primary text-white py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors text-sm uppercase">
                                        Request EdgeBrand Quote
                                    </Link>
                                    <Link href="https://wa.me/447448549211" className="flex-1 text-center border border-brand-primary text-brand-primary py-3 rounded-sm font-medium hover:bg-blue-50 transition-colors text-sm uppercase">
                                        Chat on WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* EdgeCover */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-100">
                            <div className="h-64 relative">
                                <Image
                                    src="/images/service-support.jpg"
                                    alt="EdgeCover - Staffing & Operational Cover"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white text-3xl font-bold">🔹 EdgeCover</h3>
                                        <p className="text-white/90 font-medium text-lg">Staffing & Operational Cover</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    EdgeCover is the staffing and operational cover arm of Think Edge Consultancy. We provide reliable, non-regulated staffing and operational support to help organisations maintain continuity.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                                    Our focus is on coordination, reliability, and professional delivery — supporting client teams without assuming operational control.
                                </p>

                                <h4 className="font-bold text-brand-dark mb-4 uppercase text-sm tracking-wide">EdgeCover services include:</h4>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {edgeCoverServices.map((service, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{service}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-red-50 p-4 rounded text-sm text-red-800 mb-8 border border-red-100">
                                    <strong>Important note:</strong> EdgeCover does not provide regulated care services and does not operate as a care provider. All regulated care services remain the responsibility of client organisations.
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                    <Link href="#contact" className="flex-1 text-center bg-brand-primary text-white py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors text-sm uppercase">
                                        Request EdgeCover Quote
                                    </Link>
                                    <Link href="#whatsapp" className="flex-1 text-center border border-brand-primary text-brand-primary py-3 rounded-sm font-medium hover:bg-blue-50 transition-colors text-sm uppercase">
                                        Chat on WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

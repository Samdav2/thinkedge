import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
    const consultationPoints = [
        "your requirements",
        "scope and complexity",
        "timelines",
        "level of support required",
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-2 uppercase">Pricing</h2>
                <h3 className="text-xl text-brand-primary font-bold mb-8">Consultancy-led, custom quotes only</h3>

                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
                    All work is priced following a short consultation to understand:
                </p>

                <ul className="inline-block text-left space-y-2 mb-12 mx-auto">
                    {consultationPoints.map((point, index) => (
                        <li key={index} className="flex items-center">
                            <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center mb-12">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 w-full max-w-lg shadow-sm">
                        <h4 className="text-lg font-bold text-brand-dark mb-6">We provide:</h4>
                        <div className="space-y-4 text-left">
                            <div className="flex items-center">
                                <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                                <span className="font-medium text-gray-800">Clear and transparent quotes</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                                <span className="font-medium text-gray-800">Flexible service options</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                                <span className="font-medium text-gray-800">No hidden fees</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="#contact" className="bg-brand-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors text-sm uppercase">
                        Request a Consultation
                    </Link>
                    <Link href="#whatsapp" className="bg-brand-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors text-sm uppercase">
                        Chat on WhatsApp
                    </Link>
                </div>
            </div>
        </section>
    );
}

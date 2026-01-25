import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutContent() {
    const clients = [
        "starting a new business idea",
        "refining their services",
        "seeking professional presentation",
        "needing reliable operational support",
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="relative h-[500px] w-full border-2 border-brand-primary p-2">
                        <div className="relative h-full w-full bg-gray-200 overflow-hidden">
                            <Image
                                src="/images/about-intro.jpg"
                                alt="Think Edge Consultancy - Professional"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-6 uppercase">
                            About Think Edge Consultancy
                        </h2>

                        <p className="text-xl font-medium text-brand-primary mb-6 leading-relaxed">
                            Think Edge Consultancy exists for one purpose:
                            <br />
                            to bring clarity, structure, and professional delivery to people and organisations seeking growth.
                        </p>

                        <p className="text-gray-600 mb-6 text-base leading-relaxed">
                            We work with clients who are:
                        </p>

                        <ul className="space-y-4 mb-8">
                            {clients.map((client, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{client}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-lg text-brand-dark font-bold italic border-l-4 border-brand-primary pl-4">
                            Our strength lies in combining consultancy thinking with practical execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import { Headphones, MessageSquare } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image and Info */}
                    <div className="flex justify-center lg:block">
                        <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-12 mt-12 h-[350px] sm:h-[450px] lg:h-auto">
                            {/* Floating Card - Left on Mobile */}
                            <div className="absolute top-[-5] left-0 z-20 bg-brand-primary text-white p-4 sm:p-6 rounded-2xl shadow-lg w-[160px] sm:w-[200px] lg:w-[220px] lg:-left-16 lg:-top-10">
                                <div className="flex justify-center mb-3 sm:mb-4">
                                    <div className="bg-white p-2 sm:p-3 rounded-full">
                                        <Headphones className="h-4 w-4 sm:h-6 sm:w-6 text-brand-primary" />
                                    </div>
                                </div>
                                <h3 className="text-center font-bold text-sm sm:text-lg mb-2">Chat With Live!</h3>
                                <p className="text-center text-[10px] sm:text-xs opacity-90 mb-3 sm:mb-4 leading-relaxed">
                                    Helping to improve user experience, build trust, and increase engagement & conversions.
                                </p>
                                <div className="text-center">
                                    <a href="https://wa.me/447448549211" className="inline-block bg-white text-brand-primary px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold hover:bg-gray-100 transition-colors">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Person Image - Right on Mobile */}
                            <div className="absolute right-[-10] bottom-0 h-[350px] sm:h-[500px] lg:h-[500px] w-[85%] lg:w-full lg:relative rounded-lg overflow-hidden lg:overflow-visible">
                                <Image
                                    src="/images/contact-person.png"
                                    alt="Contact Support"
                                    fill
                                    className="object-contain object-bottom lg:object-cover lg:object-top scale-x-[-1] lg:rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:pl-12">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-brand-dark mb-6 uppercase">
                                Work With Think Edge Consultancy
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                We work with UK-based individuals, startups, and organisations seeking:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700 font-medium">
                                    <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                                    business clarity and strategy
                                </li>
                                <li className="flex items-center text-gray-700 font-medium">
                                    <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                                    professional branding and digital presence
                                </li>
                                <li className="flex items-center text-gray-700 font-medium">
                                    <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                                    dependable staffing and operational cover
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <a href="#contact" className="bg-brand-primary text-white px-6 py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors text-sm uppercase">
                                    Request a Consultation
                                </a>
                                <a href="https://wa.me/447448549211" className="border border-brand-primary text-brand-primary px-6 py-3 rounded-sm font-medium hover:bg-blue-50 transition-colors text-sm uppercase">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-brand-dark mb-6">Contact Think Edge Consultancy</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder:text-gray-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder:text-gray-400"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Your Number"
                                        className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder:text-gray-400"
                                    />
                                </div>

                                <textarea
                                    placeholder="Enter Message"
                                    rows={4}
                                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none placeholder:text-gray-400"
                                ></textarea>

                                <button type="submit" className="bg-brand-dark text-white px-10 py-4 rounded-sm font-medium hover:bg-black transition-colors text-sm w-full shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="mt-12 border-t border-gray-100 pt-8">
                            <p className="text-gray-500 text-sm leading-relaxed italic">
                                "Think Edge Consultancy is a UK-based business consultancy specialising in idea research, strategic guidance, and professional delivery through EdgeBrand (branding & digital presence) and EdgeCover (staffing & operational cover)."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

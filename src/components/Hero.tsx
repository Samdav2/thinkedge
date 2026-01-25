import Image from "next/image";
import Link from "next/link";
import { Package, ClipboardCheck, Headphones } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row lg:items-center">
            {/* Desktop Background Image - Right Side */}
            <div className="absolute inset-0 z-0 hidden lg:block">
                <Image
                    src="/images/hero-team.jpg"
                    alt="Think Edge Consultancy Team"
                    fill
                    className="object-contain object-[120%_center]"
                    priority
                    quality={100}
                />
            </div>

            {/* White Slanted Overlay (Desktop) */}
            <div
                className="absolute inset-0 z-10 bg-white hidden lg:block"
                style={{ clipPath: "polygon(0 0, 45% 0, 55% 100%, 0% 100%)" }}
            ></div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 flex-grow lg:h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left flex flex-col justify-center pt-32 pb-8 lg:py-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark uppercase mb-6 leading-[1.1] tracking-tight">
                            Think Edge <br className="hidden sm:block" /> Consultancy
                        </h1>

                        <div className="text-lg sm:text-xl md:text-2xl text-brand-primary font-bold mb-8 uppercase tracking-wide">
                            Business & Idea Research • Strategy • Professional Delivery
                        </div>

                        {/* Mobile Image - Inserted Here */}
                        <div className="relative w-full h-[250px] sm:h-[350px] lg:hidden rounded-lg overflow-hidden mb-8 shadow-md">
                            <Image
                                src="/images/hero-team.jpg"
                                alt="Think Edge Consultancy Team"
                                fill
                                className="object-cover object-top"
                                priority
                                quality={100}
                            />
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Think Edge Consultancy is a UK-based business consultancy helping individuals and organisations turn ideas into clear plans, make informed decisions through research, and deliver results through professional service execution.
                        </p>

                        <div className="flex flex-col gap-3 mb-10 text-brand-dark font-bold text-lg sm:text-xl">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                                <span>Clarity first.</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                                <span>Strategy next.</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                                <span>Professional delivery.</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 w-full sm:w-auto">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-sm sm:text-base font-bold rounded-sm text-white bg-brand-primary hover:bg-blue-700 transition-colors uppercase tracking-wide shadow-md w-full sm:w-auto"
                            >
                                Request a Consultation
                            </Link>
                            <Link
                                href="https://wa.me/447448549211"
                                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-sm sm:text-base font-bold rounded-sm text-white bg-brand-primary hover:bg-blue-700 transition-colors uppercase tracking-wide shadow-md w-full sm:w-auto"
                            >
                                Chat on WhatsApp
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image Area (Desktop Badges) */}
                    <div className="relative h-full hidden lg:block">
                        {/* Floating Badges Positioned Relative to this column */}
                        {/* Professional delivery - Top Right */}
                        <div className="absolute top-[30%] right-[10%] bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-xl animate-fade-in-up">
                            <div className="bg-brand-primary p-1.5 rounded-full text-white">
                                <Package size={18} />
                            </div>
                            <span className="text-white font-medium text-sm tracking-wide">Professional delivery</span>
                        </div>

                        {/* Clear result - Bottom Right */}
                        <div className="absolute bottom-[20%] right-[5%] bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-xl animate-fade-in-up delay-200">
                            <div className="bg-brand-primary p-1.5 rounded-full text-white">
                                <ClipboardCheck size={18} />
                            </div>
                            <span className="text-white font-medium text-sm tracking-wide">Clear result</span>
                        </div>

                        {/* Practical support - Bottom Left (near the slant) */}
                        <div className="absolute bottom-[10%] left-[10%] bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-xl animate-fade-in-up delay-400">
                            <div className="bg-brand-primary p-1.5 rounded-full text-white">
                                <Headphones size={18} />
                            </div>
                            <span className="text-white font-medium text-sm tracking-wide">Practical support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";
import { Package, ClipboardCheck, Headphones, ArrowRight } from "lucide-react";

export default function Hero() {
    // Reusable Image Component to ensure consistency between Mobile and Desktop views
    const HeroImage = ({ className = "" }: { className?: string }) => (
        <div className={`relative flex justify-center items-center ${className}`}>
            {/* Background Shape behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] bg-gradient-to-tr from-white/5 to-white/0 rounded-[3rem] -rotate-6 z-0 border border-white/5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] bg-[#0F172A] rounded-[2.5rem] rotate-0 z-0"></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-brand-primary/20">
                <Image
                    src="/images/hero-team.jpg"
                    alt="Think Edge Consultancy Team"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />

                {/* Overlay Gradient on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Badges */}

            {/* Badge 1: Professional Delivery */}
            <div className="absolute top-[10%] right-[-10px] sm:right-[-20px] lg:right-[-40px] bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 shadow-xl z-20 animate-float">
                <div className="bg-brand-primary p-1.5 sm:p-2 rounded-lg text-white">
                    <Package size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                    <p className="text-white font-bold text-xs sm:text-sm">Professional</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">Delivery</p>
                </div>
            </div>

            {/* Badge 2: Reviews */}
            <div className="absolute bottom-[15%] right-[-10px] sm:right-[-20px] lg:right-[-30px] bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-3 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-xl z-20 animate-float-delayed">
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-400 border-2 border-[#0F172A]"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-[#0F172A]"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-primary border-2 border-[#0F172A] flex items-center justify-center text-[8px] sm:text-[10px] text-white font-bold">+5</div>
                </div>
                <div>
                    <div className="flex text-yellow-400 text-[10px] sm:text-xs">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <p className="text-gray-300 text-[10px] sm:text-xs font-medium">Trusted by many</p>
                </div>
            </div>

            {/* Badge 3: Clear Result (Bottom Left) */}
            <div className="absolute bottom-[5%] left-[-10px] sm:left-[20px] lg:left-[-20px] bg-[#1E293B] border border-white/10 p-3 sm:p-4 rounded-2xl flex flex-col gap-1 sm:gap-2 shadow-xl z-20 max-w-[140px] sm:max-w-[160px]">
                <div className="bg-brand-accent/20 w-fit p-1.5 sm:p-2 rounded-lg text-brand-accent">
                    <ClipboardCheck size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                    <p className="text-white font-bold text-xs sm:text-sm">Clear Result</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs leading-tight">We ensure your ideas turn into reality.</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative w-full min-h-[100dvh] bg-[#0F172A] overflow-hidden flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 lg:py-0">
            {/* Background Gradients/Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Decorative Curved Line (SVG) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M-100 450 C 200 450, 400 200, 720 450 C 1040 700, 1240 450, 1540 450" stroke="url(#gradient-line)" strokeWidth="2" strokeDasharray="10 10" />
                    <defs>
                        <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                            <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">

                    {/* Left Column: Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                        {/* Badge/Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-[#0F172A]"></div>
                                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-[#0F172A]"></div>
                            </div>
                            <span className="text-sm text-gray-300 font-medium">We design beautiful solutions</span>
                            <ArrowRight size={14} className="text-brand-accent" />
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                Think Edge <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                                    Consultancy
                                </span>
                            </h1>
                            <div className="h-1 w-24 bg-brand-primary rounded-full mx-auto lg:mx-0 mt-4"></div>
                        </div>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
                            Business & Idea Research • Strategy • Professional Delivery
                        </p>

                        {/* Mobile Image - Visible only on Mobile, inserted here as requested */}
                        <HeroImage className="lg:hidden w-full my-8 scale-90" />

                        <p className="text-base text-gray-500 max-w-lg leading-relaxed">
                            Helping individuals and organisations turn ideas into clear plans, make informed decisions through research, and deliver results.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <Link
                                href="#contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-brand-primary rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg shadow-blue-500/30 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                <span className="relative flex items-center gap-2">
                                    Request Consultation
                                </span>
                            </Link>

                            <Link
                                href="https://wa.me/447448549211"
                                className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
                            >
                                Chat on WhatsApp
                            </Link>
                        </div>

                        {/* Stats/Features (Optional - kept simple) */}
                        <div className="pt-8 flex items-center gap-8 text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                                Clarity First
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                                Strategy Next
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image & Shapes (Desktop Only) */}
                    <div className="hidden lg:flex justify-end items-center h-full">
                        <HeroImage />
                    </div>
                </div>
            </div>
        </section>
    );
}

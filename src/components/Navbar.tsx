"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
    isTransparent?: boolean;
}

export default function Navbar({ isTransparent = false }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${isTransparent ? "absolute w-full bg-transparent z-50" : "bg-brand-dark sticky top-0 z-50 shadow-sm"}`}>
            <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            {/* Placeholder for Logo */}
                            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-sm">
                                <span className="text-brand-dark font-bold text-xs">TE</span>
                            </div>
                            <span className="font-bold text-xl text-white tracking-wide">THINK EDGE</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={`${isTransparent ? "text-white hover:text-brand-primary" : "text-white hover:text-brand-primary"} font-bold transition-colors`}>Home</Link>
                        <Link href="#services" className={`${isTransparent ? "text-white hover:text-brand-primary" : "text-white hover:text-brand-primary"} font-bold transition-colors`}>Services</Link>
                        <Link href="/about" className={`${isTransparent ? "text-white hover:text-brand-primary" : "text-white hover:text-brand-primary"} font-bold transition-colors`}>About</Link>
                        <Link href="#pricing" className={`${isTransparent ? "text-white hover:text-brand-primary" : "text-white hover:text-brand-primary"} font-bold transition-colors`}>Pricing</Link>
                        <Link href="#contact" className={`${isTransparent ? "text-white hover:text-brand-primary" : "text-white hover:text-brand-primary"} font-bold transition-colors`}>Contact</Link>
                    </div>

                    <div className="hidden md:flex items-center">
                        <Link href="#contact" className="bg-brand-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-sm font-semibold transition-colors uppercase text-sm tracking-wider">
                            Request a Quote
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${isTransparent ? "text-white hover:text-brand-primary" : "text-white hover:text-brand-primary"} focus:outline-none`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-dark border-t border-white/10 absolute w-full">
                    <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:text-brand-primary hover:bg-white/5 rounded-md">Home</Link>
                        <Link href="#services" className="block px-3 py-2 text-base font-medium text-white hover:text-brand-primary hover:bg-white/5 rounded-md">Services</Link>
                        <Link href="/about" className="block px-3 py-2 text-base font-medium text-white hover:text-brand-primary hover:bg-white/5 rounded-md">About</Link>
                        <Link href="#pricing" className="block px-3 py-2 text-base font-medium text-white hover:text-brand-primary hover:bg-white/5 rounded-md">Pricing</Link>
                        <Link href="#contact" className="block px-3 py-2 text-base font-medium text-white hover:text-brand-primary hover:bg-white/5 rounded-md">Contact</Link>
                        <div className="mt-4">
                            <Link href="#contact" className="block w-full text-center bg-brand-primary text-white px-4 py-3 rounded-sm font-semibold uppercase">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

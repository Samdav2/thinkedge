import Link from "next/link";
import { Phone, Mail, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-b border-white/20 pb-2 inline-block">
                            About Us
                        </h3>
                        <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                            Think Edge Consultancy is a UK-based business consultancy delivering consultancy-led website and graphic design services alongside Edge Support Services for staffing and operational support.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-b border-white/20 pb-2 inline-block">
                            Quick Link
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-blue-100 hover:text-white transition-colors text-sm">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-blue-100 hover:text-white transition-colors text-sm">About Us</Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-blue-100 hover:text-white transition-colors text-sm">Service</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-blue-100 hover:text-white transition-colors text-sm">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legals */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-b border-white/20 pb-2 inline-block">
                            Legals
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-blue-100 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="text-blue-100 hover:text-white transition-colors text-sm">Cookie Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-blue-100 hover:text-white transition-colors text-sm">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-blue-100 hover:text-white transition-colors text-sm">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-6 border-b border-white/20 pb-2 inline-block">
                            Contact Us
                        </h3>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 mr-3 text-blue-200" />
                                    <span className="text-blue-100 text-sm">+44 7342957065</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3 text-blue-200" />
                                    <span className="text-blue-100 text-sm">info@thinkedgeconsultancy.com</span>
                                </div>
                                <div className="flex items-center">
                                    {/* WhatsApp Icon placeholder using Phone for now or custom SVG if needed, using Phone as generic */}
                                    <Phone className="h-5 w-5 mr-3 text-blue-200" />
                                    <span className="text-blue-100 text-sm">+447448549211</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-start">
                                {/* Logo Placeholder */}
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-sm">
                                        <span className="text-brand-dark font-bold text-xs">TE</span>
                                    </div>
                                    <span className="font-bold text-xl text-white tracking-wide">THINK EDGE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-sm text-blue-200 mb-4">
                        Think Edge Consultancy Ltd trading as EdgeBrand and EdgeCover.
                        <br />
                        Think Edge Consultancy Ltd provides business research and strategic guidance. We do not provide regulated legal, financial, or investment advice.
                    </p>
                    <p className="text-sm text-blue-200">
                        Copyright© 2025 Think Edge Consultancy. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

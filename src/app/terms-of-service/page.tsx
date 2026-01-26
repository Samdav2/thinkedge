import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-gray-800">
                <div className="mb-12 text-center">
                    <div className="flex justify-center mb-4">
                        <span className="text-4xl">📄</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">TERMS OF SERVICE</h1>
                    <h2 className="text-xl font-semibold text-gray-600">Think Edge Consultancy Ltd</h2>
                    <p className="text-sm text-gray-500 mt-2">Last updated: 16/1/2026</p>
                </div>

                <div className="space-y-8">
                    <section>
                        <p className="mb-4">
                            These Terms of Service (“Terms”) govern the use of services provided by Think Edge
                            Consultancy Ltd (“we”, “us”, “our”). By engaging our services, you agree to these
                            Terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">1. About Us</h3>
                        <ul className="list-none space-y-2">
                            <li><span className="font-semibold">Company name:</span> Think Edge Consultancy Ltd</li>
                            <li><span className="font-semibold">Business type:</span> UK business consultancy</li>
                            <li><span className="font-semibold">Services:</span> Website & graphic design services, consultancy-led services, and non-regulated staffing and operational support</li>
                            <li><span className="font-semibold">Contact email:</span> <a href="mailto:info@thinkedgeconsultancy.com" className="text-brand-primary hover:underline">info@thinkedgeconsultancy.com</a></li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">2. Scope of Services</h3>
                        <p className="mb-3">We provide services under two divisions:</p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">a) Website & Graphic Design</h4>
                            <p className="mb-2">Including (but not limited to):</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Website design and redesign</li>
                                <li>Graphic design and branding</li>
                                <li>Digital presentation support</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">b) Edge Support Services</h4>
                            <p className="mb-2">Including (but not limited to):</p>
                            <ul className="list-disc pl-5 space-y-1 mb-2">
                                <li>Non-regulated staffing support</li>
                                <li>Support workers and HCAs (non-regulated)</li>
                                <li>Domestic, cleaning, kitchen and operational staff</li>
                                <li>Commercial and office cleaning services</li>
                            </ul>
                            <p>All services are delivered in accordance with the agreed scope confirmed in writing.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">3. Consultancy-Led Delivery</h3>
                        <p>
                            Our services are delivered using a consultancy-led approach, meaning we assess
                            requirements, recommend appropriate solutions, and deliver agreed services. This does
                            not constitute regulated professional advice.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">4. Quotes, Pricing & Payment</h3>
                        <ul className="list-disc pl-5 space-y-1 mb-2">
                            <li>All services are provided on a custom-quote basis</li>
                            <li>Quotes are valid for a specified period as stated</li>
                            <li>Payment terms will be agreed before work begins</li>
                            <li>Late payments may result in suspension of services</li>
                        </ul>
                        <p>All prices are exclusive of VAT unless stated otherwise.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">5. Client Responsibilities</h3>
                        <p className="mb-2">Clients agree to:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-2">
                            <li>Provide accurate and complete information</li>
                            <li>Respond promptly to requests required for delivery</li>
                            <li>Ensure lawful use of any services or materials provided</li>
                        </ul>
                        <p>Delays caused by the client may affect timelines and delivery.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">6. Staffing & Support Services (Important)</h3>
                        <ul className="list-disc pl-5 space-y-1 mb-2">
                            <li>Think Edge Consultancy supplies non-regulated staff only</li>
                            <li>We do not provide regulated care services</li>
                        </ul>
                        <p className="mb-2">Clients retain responsibility for:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-2">
                            <li>Care delivery and supervision</li>
                            <li>Compliance with CQC or other regulatory requirements</li>
                            <li>Day-to-day management of supplied staff</li>
                        </ul>
                        <p>Staffing arrangements are governed by separate service agreements where applicable.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">7. Intellectual Property</h3>
                        <p className="mb-2">Unless otherwise agreed:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>All intellectual property created remains the property of Think Edge Consultancy until full payment is received</li>
                            <li>Upon payment, clients receive a licence to use delivered materials for agreed purposes</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">8. Confidentiality</h3>
                        <p>
                            Both parties agree to keep confidential any sensitive or proprietary information shared
                            during service delivery, unless disclosure is required by law.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">9. Limitation of Liability</h3>
                        <p className="mb-2">To the maximum extent permitted by law:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>We are not liable for indirect or consequential losses</li>
                            <li>Our liability is limited to the value of the services provided</li>
                            <li>We are not responsible for business decisions made by clients based on delivered services</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">10. Termination</h3>
                        <p>
                            Either party may terminate services by written notice in accordance with agreed terms.
                            Fees for work already completed remain payable.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">11. Governing Law</h3>
                        <p>
                            These Terms are governed by the laws of England and Wales, and any disputes shall be
                            subject to the exclusive jurisdiction of the English courts.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

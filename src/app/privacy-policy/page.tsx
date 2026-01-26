import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-gray-800">
                <div className="mb-12 text-center">
                    <div className="flex justify-center mb-4">
                        <span className="text-4xl">🔐</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">PRIVACY POLICY</h1>
                    <h2 className="text-xl font-semibold text-gray-600">Think Edge Consultancy Ltd</h2>
                    <p className="text-sm text-gray-500 mt-2">Last updated: 16/1/2026</p>
                </div>

                <div className="space-y-8">
                    <section>
                        <p className="mb-4">
                            Think Edge Consultancy Ltd is committed to protecting your privacy and personal data.
                            This Privacy Policy explains how we collect, use, store, and protect personal
                            information in accordance with the UK General Data Protection Regulation (UK GDPR)
                            and the Data Protection Act 2018.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">1. Who We Are</h3>
                        <ul className="list-none space-y-2">
                            <li><span className="font-semibold">Company name:</span> Think Edge Consultancy Ltd</li>
                            <li><span className="font-semibold">Business type:</span> UK business consultancy</li>
                            <li><span className="font-semibold">Services:</span> Website & graphic design, consultancy-led services, and non-regulated staffing and operational support</li>
                            <li><span className="font-semibold">Email:</span> [your business email]</li>
                            <li><span className="font-semibold">Website:</span> [your website URL]</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">2. Information We Collect</h3>
                        <p className="mb-3">We may collect and process the following personal data:</p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">a) Information you provide to us</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Business details</li>
                                <li>Enquiry details submitted via contact forms, email, or WhatsApp</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">b) Staffing-related information (Edge Support Services)</h4>
                            <p className="mb-2">Where applicable, we may collect:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>CVs and employment history</li>
                                <li>Contact details</li>
                                <li>Right-to-work information</li>
                                <li>DBS status (where required)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">c) Automatically collected information</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Pages visited</li>
                                <li>Website usage data (via analytics tools)</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">3. How We Use Your Information</h3>
                        <p className="mb-3">We use personal data to:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Respond to enquiries and requests</li>
                            <li>Provide our services</li>
                            <li>Prepare quotes and agreements</li>
                            <li>Manage staffing and operational support</li>
                            <li>Communicate with clients and workers</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal and regulatory obligations</li>
                        </ul>
                        <p className="font-medium">We do not sell or trade personal data.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">4. Lawful Basis for Processing</h3>
                        <p className="mb-3">We process personal data under the following lawful bases:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><span className="font-semibold">Consent</span> – where you have given clear permission</li>
                            <li><span className="font-semibold">Contract</span> – where processing is necessary to deliver services</li>
                            <li><span className="font-semibold">Legal obligation</span> – where required by law</li>
                            <li><span className="font-semibold">Legitimate interests</span> – to operate and improve our business fairly</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">5. Data Sharing</h3>
                        <p className="mb-3">We may share personal data only where necessary, including with:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Clients (for staffing coordination where applicable)</li>
                            <li>Professional advisers (accountants, insurers, legal advisers)</li>
                            <li>IT and website service providers</li>
                        </ul>
                        <p>All third parties are required to respect data confidentiality and security.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">6. Data Storage & Security</h3>
                        <p className="mb-2">We:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Store data securely</li>
                            <li>Restrict access to authorised persons only</li>
                            <li>Retain data only for as long as necessary</li>
                        </ul>
                        <p>Staffing records are retained in line with legal and contractual requirements.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">7. Your Data Protection Rights</h3>
                        <p className="mb-3">Under UK GDPR, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Access your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Restrict or object to processing</li>
                            <li>Request data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>To exercise your rights, contact us using the details above.</p>
                    </section>

                    <div className="border-t border-gray-200 my-8"></div>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">8. Cookies & Website Analytics</h3>
                        <p>Our website uses cookies and analytics tools.</p>
                        <p>Please see our Cookie Policy below for full details.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">9. Complaints</h3>
                        <p className="mb-2">If you have concerns about how we handle your data, you may contact us directly.</p>
                        <p>
                            You also have the right to complain to the Information Commissioner’s Office (ICO).<br />
                            Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">https://ico.org.uk</a>
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">10. Policy Updates</h3>
                        <p>We may update this Privacy Policy from time to time.</p>
                        <p>The latest version will always be available on our website.</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-gray-800">
                <div className="mb-12 text-center">
                    <div className="flex justify-center mb-4">
                        <span className="text-4xl">⚠</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">DISCLAIMER</h1>
                    <h2 className="text-xl font-semibold text-gray-600">Think Edge Consultancy Ltd</h2>
                </div>

                <div className="space-y-8">
                    <section>
                        <p className="mb-4">
                            The information and services provided by Think Edge Consultancy Ltd are offered on a
                            consultancy-led, non-regulated basis.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">1. No Regulated Care Services</h3>
                        <p className="mb-2">Think Edge Consultancy Ltd does not provide regulated care services and is not a care provider.</p>
                        <p className="mb-2">All regulated care services are delivered by client organisations, who retain full responsibility for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Care provision</li>
                            <li>Supervision</li>
                            <li>Compliance with regulatory bodies, including the Care Quality Commission (CQC)</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">2. No Professional or Legal Advice</h3>
                        <p className="mb-2">Any guidance, recommendations, or consultancy-led input provided:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-2">
                            <li>Does not constitute legal, medical, financial, or regulated professional advice</li>
                            <li>Is provided for general business and operational support purposes only</li>
                        </ul>
                        <p>Clients should seek appropriate professional advice where required.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">3. Website & Design Services</h3>
                        <p className="mb-2">While we aim to deliver professional and effective digital solutions:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>We do not guarantee specific commercial outcomes</li>
                            <li>Website performance depends on multiple external factors beyond our control</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">4. Staffing Disclaimer</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Supplied staff operate under the supervision of the client</li>
                            <li>Clients are responsible for workplace health and safety</li>
                            <li>Think Edge Consultancy is not liable for actions taken by staff outside agreed terms</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">5. Limitation of Responsibility</h3>
                        <p className="mb-2">Think Edge Consultancy Ltd shall not be held responsible for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Losses arising from misuse of services</li>
                            <li>Client decisions made based on provided information</li>
                            <li>Third-party platforms, hosting providers, or external systems</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">6. Updates</h3>
                        <p>
                            This Disclaimer may be updated from time to time. The latest version will be published
                            on our website.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

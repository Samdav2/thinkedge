import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-gray-800">
                <div className="mb-12 text-center">
                    <div className="flex justify-center mb-4">
                        <span className="text-4xl">🍪</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">COOKIE POLICY</h1>
                    <h2 className="text-xl font-semibold text-gray-600">Think Edge Consultancy Ltd</h2>
                    <p className="text-sm text-gray-500 mt-2">Last updated: 16/1/2026</p>
                </div>

                <div className="space-y-8">
                    <section>
                        <p className="mb-4">
                            This Cookie Policy explains how Think Edge Consultancy Ltd uses cookies and similar
                            technologies on our website.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">1. What Are Cookies?</h3>
                        <p>
                            Cookies are small text files stored on your device when you visit a website. They help
                            websites function properly and improve user experience.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">2. Types of Cookies We Use</h3>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">a) Strictly Necessary Cookies</h4>
                            <p className="mb-1">These cookies are essential for the website to function properly.</p>
                            <p>They cannot be switched off in our systems.</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">b) Analytics Cookies</h4>
                            <p className="mb-2">We use analytics tools (such as Google Analytics) to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-2">
                                <li>Understand how visitors use our website</li>
                                <li>Improve website performance and content</li>
                            </ul>
                            <p>These cookies collect information in an anonymised form.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">c) Functional Cookies</h4>
                            <p className="mb-2">These may remember:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Your preferences</li>
                                <li>Form inputs</li>
                                <li>Website settings</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">3. Managing Cookies</h3>
                        <p className="mb-3">
                            You can control or delete cookies through your browser settings.
                            Please note that disabling cookies may affect website functionality.
                        </p>
                        <p className="mb-2">Browser guidance:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Chrome</li>
                            <li>Safari</li>
                            <li>Firefox</li>
                            <li>Edge</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">4. Third-Party Cookies</h3>
                        <p>
                            Some cookies may be set by third-party services used on our website, such as analytics
                            or embedded content. We do not control these cookies directly.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">5. Updates to This Policy</h3>
                        <p>
                            We may update this Cookie Policy occasionally to reflect changes in technology or legal
                            requirements.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">6. Contact Us</h3>
                        <p className="mb-2">If you have any questions about our use of cookies, please contact us at:</p>
                        <p>Email: <a href="mailto:info@thinkedgeconsultancy.com" className="text-brand-primary hover:underline">info@thinkedgeconsultancy.com</a></p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

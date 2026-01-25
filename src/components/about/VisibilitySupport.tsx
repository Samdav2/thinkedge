import Image from "next/image";

export default function VisibilitySupport() {
    return (
        <section className="py-20 bg-brand-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-12 tracking-tight">
                    Visibility. Structure. Cover.
                </h2>

                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-xl md:text-2xl font-medium mb-8 text-blue-200">
                        UK organisations and founders need:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                            <p className="text-lg font-bold">Clear direction</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                            <p className="text-lg font-bold">Professional presentation</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                            <p className="text-lg font-bold">Reliable support to operate effectively</p>
                        </div>
                    </div>
                </div>

                <div className="relative py-8">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-brand-dark px-4 text-blue-200 text-lg italic">
                            The Solution
                        </span>
                    </div>
                </div>

                <p className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto leading-relaxed mt-8">
                    Think Edge Consultancy provides all three — delivered with clarity and professionalism.
                </p>
            </div>
        </section>
    );
}

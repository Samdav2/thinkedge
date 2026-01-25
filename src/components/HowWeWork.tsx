export default function HowWeWork() {
    const steps = [
        { number: 1, text: "Understand your requirements (idea, strategy, or service need)" },
        { number: 2, text: "Research, assess, and provide structured guidance" },
        { number: 3, text: "Agree scope, timelines, and expectations" },
        { number: 4, text: "Issue a clear custom quote" },
        { number: 5, text: "Deliver professionally through the appropriate service division" },
        { number: 6, text: "Provide ongoing support where required" },
    ];

    return (
        <section id="pricing" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl uppercase">
                        How We Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 max-w-5xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-center">
                            <div className="relative flex items-center w-full">
                                {/* Capsule shape */}
                                <div className="bg-brand-primary rounded-full flex items-center w-full p-2 pr-6 shadow-md hover:shadow-lg transition-shadow">
                                    {/* Circle Number */}
                                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 border-4 border-brand-primary z-10">
                                        <span className="text-3xl font-extrabold text-black">{step.number}</span>
                                    </div>
                                    {/* Text */}
                                    <div className="ml-4 flex-1">
                                        <span className="text-white font-bold text-sm sm:text-base leading-tight block">
                                            {step.text}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

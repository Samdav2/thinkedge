import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/about-hero.jpg"
                    alt="About Think Edge Consultancy"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wider uppercase">
                    About Us
                </h1>
            </div>
        </section>
    );
}

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const wordmarkContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
    };
    const wordVariant: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };
    const subheadVariant: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.72 } }
    };
    const hindiVariant: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut", delay: 1.12 } }
    };
    const ctaVariant: Variants = {
        hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.28, type: "spring", stiffness: 200, delay: 1.62 } }
    };
    const bowlImageVariant: Variants = {
        hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", bounce: 0.25, delay: 0.3 } }
    };

    const titleWords = ["Fresh,", "Healthy,", "Affordable."];

    return (
        <section id="hero" className="relative min-h-[100dvh] bg-forest text-cream flex items-center pt-24 overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    className="flex flex-col gap-6 z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.div variants={subheadVariant} className="font-heading text-sm sm:text-base tracking-widest text-lime uppercase">
                        Sproutifyyy Badlapur
                    </motion.div>

                    <div className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
                        <motion.div variants={wordmarkContainer}>
                            {titleWords.map((word, i) => (
                                <motion.span key={i} className="inline-block mr-4" variants={wordVariant}>
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <motion.p variants={subheadVariant} className="font-sans text-lg sm:text-xl text-cream/90 max-w-md">
                        Your daily dose of protein starting at just ₹30. No lectures, just good food.
                    </motion.p>

                    <motion.div variants={hindiVariant} className="text-lime font-heading font-medium italic mt-2">
                        "Kyunki health sabka haq hai."
                    </motion.div>

                    <motion.div variants={ctaVariant} className="flex flex-wrap gap-4 mt-4">
                        <Link
                            href="#menu"
                            className="bg-sprout hover:bg-[#52821A] text-white px-8 py-4 rounded-full font-sans font-medium transition-colors"
                        >
                            View Menu
                        </Link>
                        <a
                            href="https://wa.me/919326809058?text=Hi%20Sproutifyyy%2C%20I%27d%20like%20to%20place%20an%20order.%20(Open%206%3A30-11am%20daily%2C%20evenings%20Sat-Sun%207-10pm)"
                            className="bg-transparent border-2 border-lime hover:bg-forest/50 text-lime px-8 py-4 rounded-full font-sans font-medium transition-colors backdrop-blur-sm"
                        >
                            WhatsApp Us
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    className="relative w-full aspect-[4/5] flex justify-center md:justify-end mt-8 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={bowlImageVariant}
                >
                    <div className="relative w-full max-w-[500px] h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <Image
                            src="/sproutifyyy-hero.jpg"
                            alt="Fresh Sproutifyyy protein bowl"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

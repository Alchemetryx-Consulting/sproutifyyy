"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

const pillars = [
    {
        id: "accessible",
        title: "Accessible",
        description: "Good health shouldn't be a luxury. With bowls starting at just ₹30 and a quick WhatsApp order away, we make high protein accessible for everyone in Badlapur."
    },
    {
        id: "fresh",
        title: "Fresh",
        description: "No stale veggies or yesterday's sprouts. We prepare everything fresh daily. When we run out, we run out."
    },
    {
        id: "personality",
        title: "Personality-led",
        description: "No diet plans, no sermons. We just serve damn good, protein-packed street food that tastes as vibrant as our vibe. Kyunki health sabka haq hai."
    }
];

export default function WhyUs() {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.28, ease: "easeOut" }
        }
    };

    return (
        <section id="why" className="py-24 bg-forest text-cream">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={itemVariants}
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Why Us?</h2>
                    <p className="font-sans text-cream/80 max-w-xl mx-auto text-lg leading-relaxed">
                        We aren't a wellness brand. We are your local street food joint that just happens to be insanely good for you.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {pillars.map((pillar) => (
                        <motion.div
                            key={pillar.id}
                            variants={itemVariants}
                            className="bg-[#204522] border border-lime/20 rounded-2xl p-8 hover:border-lime/50 transition-all duration-150 ease-out md:hover:-translate-y-1 md:hover:shadow-lg shadow-lg"
                        >
                            <h3 className="font-heading text-2xl font-bold text-lime mb-4">{pillar.title}</h3>
                            <p className="font-sans text-cream/90 leading-relaxed text-lg">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion, Variants, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IG_POSTS = [
    { id: 1, url: "https://placehold.co/400x400/1A3B1C/C8E89A/webp?text=IG+Post+1" },
    { id: 2, url: "https://placehold.co/400x400/1A3B1C/C8E89A/webp?text=IG+Post+2" },
    { id: 3, url: "https://placehold.co/400x400/1A3B1C/C8E89A/webp?text=IG+Post+3" },
    { id: 4, url: "https://placehold.co/400x400/1A3B1C/C8E89A/webp?text=IG+Post+4" },
    { id: 5, url: "https://placehold.co/400x400/1A3B1C/C8E89A/webp?text=IG+Post+5" },
    { id: 6, url: "https://placehold.co/400x400/1A3B1C/C8E89A/webp?text=IG+Post+6" },
];

function Counter() {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const countValue = useMotionValue(0);
    const rounded = useTransform(countValue, (latest) => (Math.round(latest * 10) / 10).toFixed(1));

    const [display, setDisplay] = useState("0.0");

    useMotionValueEvent(rounded, "change", (latest) => {
        setDisplay(latest);
    });

    useEffect(() => {
        if (isInView) {
            animate(countValue, 4.4, { duration: 0.8, ease: "easeOut" });
        }
    }, [countValue, isInView]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Proof() {
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

    // Star SVG helper
    const Star = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-yolk">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
    );

    return (
        <section id="proof" className="py-24 bg-cream text-body relative">
            <div className="container mx-auto px-6">

                {/* Google Ratings Counter */}
                <motion.div
                    className="text-center mb-20 flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={itemVariants}
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Badlapur Loves Us</h2>

                    <div className="flex flex-col sm:flex-row items-center gap-6 bg-white px-8 py-6 rounded-3xl shadow-sm border border-forest/10 inline-block text-left">
                        <div className="font-heading text-6xl sm:text-7xl font-black text-forest">
                            <Counter />
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-1">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map(i => <Star key={i} />)}
                                {/* Half star for 4.4 visually indicated by masked container */}
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-yolk/30">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <div className="absolute top-0 left-0 bottom-0 overflow-hidden w-[40%] text-yolk flex items-center">
                                        <Star />
                                    </div>
                                </div>
                            </div>
                            <div className="font-sans font-semibold text-muted text-lg mt-1">Google Reviews</div>
                        </div>
                    </div>
                </motion.div>

                {/* Instagram Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-end mb-6 border-b border-forest/10 pb-4">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold">On the gram</h3>
                        <a
                            href="https://www.instagram.com/_sproutifyyy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-forest hover:text-sprout font-sans font-semibold underline underline-offset-4 transition-colors"
                        >
                            @_Sproutifyyy
                        </a>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {IG_POSTS.map((post) => (
                            <motion.a
                                key={post.id}
                                href="https://www.instagram.com/_sproutifyyy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                className="relative aspect-square rounded-2xl overflow-hidden group border border-forest/5 shadow-sm"
                            >
                                <Image
                                    src={post.url}
                                    alt={`Sproutifyyy Instagram Post ${post.id}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />

                                {/* Hover overlay with Instagram style icon */}
                                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

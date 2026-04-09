"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 80);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-200"
            animate={{
                backgroundColor: isScrolled ? "var(--color-forest)" : "transparent",
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            }}
        >
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo/sproutifyyy logo.png"
                    alt="Sproutifyyy Logo"
                    width={150}
                    height={40}
                    className="object-contain"
                    priority
                />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="#menu" className="text-cream hover:text-lime font-heading text-lg">Menu</Link>
                <Link href="#why" className="text-cream hover:text-lime font-heading text-lg">Why Us</Link>
                <Link href="#proof" className="text-cream hover:text-lime font-heading text-lg">Proof</Link>
                <Link href="#find" className="text-cream hover:text-lime font-heading text-lg">Find Us</Link>
                <a
                    href="https://wa.me/919326809058?text=Hi%2C%20I%20want%20to%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sprout hover:bg-[#52821A] text-white px-4 py-2 rounded-full font-heading font-medium transition-colors"
                >
                    Order via WhatsApp
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-cream p-2"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>

            {/* Mobile Menu Content */}
            {isMobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-4 right-4 bg-forest/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-6 shadow-xl border border-lime/10"
                >
                    <Link onClick={() => setIsMobileOpen(false)} href="#menu" className="text-cream text-xl font-heading">Menu</Link>
                    <Link onClick={() => setIsMobileOpen(false)} href="#why" className="text-cream text-xl font-heading">Why Us</Link>
                    <Link onClick={() => setIsMobileOpen(false)} href="#proof" className="text-cream text-xl font-heading">Proof</Link>
                    <Link onClick={() => setIsMobileOpen(false)} href="#find" className="text-cream text-xl font-heading">Find Us</Link>
                    <a
                        onClick={() => setIsMobileOpen(false)}
                        href="https://wa.me/919326809058?text=Hi%2C%20I%20want%20to%20order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sprout text-center text-white px-4 py-3 rounded-full font-heading font-medium transition-colors mt-2"
                    >
                        Order via WhatsApp
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}

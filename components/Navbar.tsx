"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

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
            <Link href="/" className="font-logo text-2xl font-light text-cream">
                Sproutifyyy
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="#menu" className="text-cream hover:text-lime font-sans">Menu</Link>
                <Link href="#why" className="text-cream hover:text-lime font-sans">Why Us</Link>
                <Link href="#proof" className="text-cream hover:text-lime font-sans">Proof</Link>
                <Link href="#find" className="text-cream hover:text-lime font-sans">Find Us</Link>
                <a
                    href="https://wa.me/919326809058?text=Hi%20Sproutifyyy%2C%20I%27d%20like%20to%20place%20an%20order.%20(Open%206%3A30-11am%20daily%2C%20evenings%20Sat-Sun%207-10pm)"
                    className="bg-sprout hover:bg-[#52821A] text-white px-4 py-2 rounded-full font-sans transition-colors"
                >
                    WhatsApp Order
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

            {/* Mobile Menu Dropdown */}
            {isMobileOpen && (
                <div className="absolute top-full left-0 right-0 bg-forest border-t border-[#2C5730] p-4 flex flex-col gap-4 md:hidden">
                    <Link onClick={() => setIsMobileOpen(false)} href="#menu" className="text-cream text-lg font-sans">Menu</Link>
                    <Link onClick={() => setIsMobileOpen(false)} href="#why" className="text-cream text-lg font-sans">Why Us</Link>
                    <Link onClick={() => setIsMobileOpen(false)} href="#proof" className="text-cream text-lg font-sans">Proof</Link>
                    <Link onClick={() => setIsMobileOpen(false)} href="#find" className="text-cream text-lg font-sans">Find Us</Link>
                    <a
                        href="https://wa.me/919326809058?text=Hi%20Sproutifyyy%2C%20I%27d%20like%20to%20place%20an%20order.%20(Open%206%3A30-11am%20daily%2C%20evenings%20Sat-Sun%207-10pm)"
                        className="bg-sprout text-center text-white px-4 py-3 rounded-full font-sans transition-colors mt-2"
                    >
                        WhatsApp Order
                    </a>
                </div>
            )}
        </motion.nav>
    );
}

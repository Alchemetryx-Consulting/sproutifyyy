"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type Category = "Sprouts & Salad" | "Combos" | "High Protein";

interface MenuItem {
    id: string;
    category: Category;
    title: string;
    price: number;
    protein: string;
    isHero?: boolean;
}

const menuData: MenuItem[] = [
    // Sprouts & Salad
    { id: "s1", category: "Sprouts & Salad", title: "Plain Sprouts", price: 30, protein: "~8g protein" },
    { id: "s2", category: "Sprouts & Salad", title: "Masala Lemon Sprouts", price: 50, protein: "~10g protein" },
    { id: "s3", category: "Sprouts & Salad", title: "Veg Salad", price: 45, protein: "fibre-rich" },
    { id: "s4", category: "Sprouts & Salad", title: "Boiled Egg", price: 12, protein: "~6g protein" },
    { id: "s5", category: "Sprouts & Salad", title: "Double Eggs", price: 20, protein: "~12g protein" },
    // Combos
    { id: "c1", category: "Combos", title: "Eggs n Sprouts", price: 50, protein: "~18g protein" },
    { id: "c2", category: "Combos", title: "Eggs n Salad", price: 50, protein: "~14g protein" },
    { id: "c3", category: "Combos", title: "Sprouts n Salad", price: 50, protein: "~12g protein" },
    // High Protein
    { id: "h1", category: "High Protein", title: "Protein Combo (Egg + Sprouts + Salad)", price: 65, protein: "~28g protein", isHero: true },
    { id: "h2", category: "High Protein", title: "Paneer Soya Salad", price: 69, protein: "~22g protein" },
    { id: "h3", category: "High Protein", title: "Chicken Salad with Veggies", price: 79, protein: "~30g protein" },
    { id: "h4", category: "High Protein", title: "Chicken Salad with Sprouts", price: 85, protein: "~35g protein" },
];

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState<Category>("Sprouts & Salad");
    const categories: Category[] = ["Sprouts & Salad", "Combos", "High Protein"];
    const shouldReduceMotion = useReducedMotion();

    const filteredItems = menuData.filter(item => item.category === activeCategory);

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

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } }
    };

    return (
        <section id="menu" className="py-24 bg-cream text-body">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={headerVariants}
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
                    <p className="font-sans text-muted">Fresh, fast, and packed with protein.</p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-heading text-sm sm:text-base font-semibold transition-all ${activeCategory === category
                                ? "bg-forest text-cream shadow-md"
                                : "bg-white text-muted hover:bg-lime/20 border border-transparent shadow-sm"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    key={activeCategory} // Force re-render of animation when category changes
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className={`flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-150 ease-out relative ${item.isHero ? "ring-2 ring-yolk max-sm:-mx-2" : ""
                                }`}
                        >
                            {item.isHero && (
                                <div className="absolute top-4 right-4 z-10 bg-yolk text-forest font-heading font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                                    Hero SKU
                                </div>
                            )}

                            <div className="relative w-full aspect-square bg-[#EAEAEA] flex items-center justify-center p-4">
                                <span className="font-sans text-[16px] text-[#5F5E5A] text-center font-medium">
                                    {item.title}
                                </span>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <h3 className="font-heading font-semibold text-lg leading-tight">{item.title}</h3>
                                    <span className="font-body font-bold text-lg whitespace-nowrap">₹{item.price}</span>
                                </div>

                                <div className="mt-auto">
                                    <span className="inline-block bg-lime/30 text-forest font-heading font-medium text-xs px-2.5 py-1 rounded-full">
                                        {item.protein}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* WhatsApp CTA */}
                <div className="flex justify-center">
                    <a
                        href="https://wa.me/919326809058?text=Hi%20Sproutifyyy%2C%20I%27d%20like%20to%20place%20an%20order.%20(Open%206%3A30-11am%20daily%2C%20evenings%20Sat-Sun%207-10pm)"
                        className="bg-sprout hover:bg-[#52821A] text-white px-8 py-4 rounded-full font-sans font-medium transition-colors shadow-sm"
                    >
                        Order via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

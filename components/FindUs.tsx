"use client";

import { motion } from "framer-motion";

export default function FindUs() {
    return (
        <section id="find" className="py-24 bg-forest text-cream relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Text Content */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-lime">Find Us</h2>
                            <p className="font-sans text-xl leading-relaxed text-cream/90">
                                Panvel Highway, Mohan Palms Road,<br />
                                Opposite Madhava's Cafe,<br />
                                Badlapur East – 421503
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-yolk">Hours</h3>
                            <ul className="space-y-3 font-sans text-lg text-cream/90">
                                <li className="flex justify-between border-b border-lime/10 pb-2">
                                    <span>Mon – Fri</span>
                                    <span className="font-medium">6:30 AM – 11:00 AM</span>
                                </li>
                                <li className="flex justify-between border-b border-lime/10 pb-2">
                                    <span>Sat – Sun</span>
                                    <span className="font-medium text-right">
                                        6:30 AM – 11:00 AM<br />
                                        7:00 PM – 10:00 PM
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-lime/20">
                            <p className="font-sans text-lg mb-6">
                                Call us: <a href="tel:919326809058" className="font-bold text-lime hover:text-white transition-colors">9326809058</a>
                            </p>

                            <motion.a
                                href="https://wa.me/919326809058?text=Hi%2C%20I%20want%20to%20order"
                                target="_blank"
                                rel="noopener noreferrer"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-flex items-center justify-center gap-2 bg-sprout hover:bg-[#52821A] text-white px-8 py-4 rounded-full font-heading font-semibold transition-colors w-full sm:w-auto text-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.956.586 3.784 1.583 5.31L2.25 21.75l4.577-1.545A9.708 9.708 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75zM12 20.25c-1.636 0-3.158-.45-4.453-1.229l-.317-.19-2.735.923.94-2.65-.213-.341A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z" clipRule="evenodd" />
                                    <path d="M10.285 7.64c-.2-.444-.41-.453-.598-.46-.174-.007-.374-.007-.574-.007s-.524.075-.799.373c-.274.298-1.048 1.024-1.048 2.497 0 1.473 1.073 2.898 1.223 3.097.15.2 2.073 3.303 5.12 4.502 2.54 1 3.046.797 3.595.748.548-.05 1.77-.723 2.02-1.42s.25-1.295.174-1.42c-.074-.124-.274-.199-.573-.348-.3-.15-1.77-.872-2.045-.972-.275-.1-.474-.15-.674.15-.2.299-.773.972-.948 1.171-.174.199-.349.224-.648.075-.3-.15-1.263-.466-2.406-1.488-.89-.795-1.49-1.778-1.664-2.077-.174-.3-.018-.462.132-.61.134-.134.3-.349.449-.523.15-.175.2-.299.3-.498.1-.199.05-.374-.025-.524-.075-.15-.674-1.62-.923-2.22-.24-.58-.485-.5-.674-.51z" />
                                </svg>
                                Order on WhatsApp
                            </motion.a>
                        </div>
                    </div>

                    {/* Map Content */}
                    <div className="h-[400px] md:h-[500px] w-full bg-cream/5 rounded-3xl overflow-hidden border border-lime/10 shadow-xl relative group">
                        <iframe
                            title="Sproutifyyy Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d15077.58578508678!2d73.2307!3d19.1342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be792e31f08bd6b%3A0xe5a14d5e1f0e4719!2sBadlapur%20East%2C%20Badlapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712200000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

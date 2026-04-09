import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#153017] text-cream/70 py-12 border-t border-lime/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo/sproutifyyy logo.png"
                                alt="Sproutifyyy Logo"
                                width={160}
                                height={50}
                                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="font-sans text-cream/60 max-w-sm">
                            Fresh, protein-packed street food customized for the daily grind. No lectures, just great taste.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-heading text-xl font-bold text-cream mb-4">Quick Links</h4>
                        <ul className="space-y-3 font-sans">
                            <li><Link href="#menu" className="hover:text-lime transition-colors">Menu</Link></li>
                            <li><Link href="#why" className="hover:text-lime transition-colors">Why Us</Link></li>
                            <li><Link href="#proof" className="hover:text-lime transition-colors">Proof</Link></li>
                            <li><Link href="#find" className="hover:text-lime transition-colors">Find Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-xl font-bold text-cream mb-4">Connect</h4>
                        <ul className="space-y-3 font-sans">
                            <li>
                                <a href="https://www.instagram.com/_sproutifyyy/" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="tel:919326809058" className="hover:text-lime transition-colors">
                                    +91 9326809058
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-lime/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm text-cream/40">
                    <p>© {new Date().getFullYear()} Sproutifyyy. All rights reserved.</p>
                    <p>Made in Badlapur.</p>
                </div>
            </div>
        </footer>
    );
}

'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.06 },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } },
});

const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } },
};

const tagBounce = {
  hidden: { opacity: 0, scale: 0.75, rotate: -4 },
  visible: {
    opacity: 1, scale: 1, rotate: -4,
    transition: { type: 'spring', stiffness: 400, damping: 18, delay: 0.85 },
  },
};

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface SproutifyyHeroProps {
  bowlImageUrl?: string;
  onMenuClick?: () => void;
  onWhatsAppClick?: () => void;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export const SproutifyyHero = ({
  bowlImageUrl = '/images/hero-bowl.webp',
  onMenuClick,
  onWhatsAppClick,
}: SproutifyyHeroProps) => {
  const shouldReduceMotion = useReducedMotion();

  const wordmarkParts = ['sprouti', 'fyyy'];

  // Reduced motion: all animations collapse to simple opacity fades
  const motionProps = (variants: any, custom?: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
      : { initial: 'hidden', animate: 'visible', variants, custom };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-[#1A3B1C] overflow-hidden flex flex-col"
    >
      {/* Subtle radial texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(99,153,34,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Noise grain overlay — adds organic texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* ── NAVBAR placeholder spacer — remove if using a separate Navbar component */}
      <div className="h-16 shrink-0" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── LEFT: TEXT CONTENT ── */}
            <div className="flex flex-col items-start text-left order-2 lg:order-1">

              {/* Eyebrow tag */}
              <motion.div {...motionProps(fadeUp(0))} className="mb-5">
                <span className="inline-flex items-center gap-1.5 bg-[#639922]/20 border border-[#639922]/30 text-[#C8E89A] text-[11px] font-medium tracking-[2px] uppercase px-4 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8E89A] animate-pulse" />
                  Badlapur, Mumbai
                </span>
              </motion.div>

              {/* Wordmark — word-by-word stagger */}
              <h1 className="flex items-baseline gap-0 mb-2 leading-none" aria-label="Sproutifyyy">
                {wordmarkParts.map((word, i) => (
                  <motion.span
                    key={word}
                    {...motionProps(wordVariants, i)}
                    className={
                      i === 0
                        ? 'font-urbanist font-light text-[clamp(52px,10vw,96px)] text-white tracking-tight'
                        : 'font-urbanist font-light text-[clamp(52px,10vw,96px)] text-[#C8E89A] tracking-tight'
                    }
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Primary tagline */}
              <motion.p
                {...motionProps(fadeUp(0.2))}
                className="text-[clamp(16px,2.5vw,20px)] font-medium text-white/80 mb-1.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Eat Healthy. Stay Groovy.
              </motion.p>

              {/* Hindi line */}
              <motion.p
                {...motionProps(fadeUp(0.35))}
                className="text-[14px] text-white/45 italic mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Suno apna playlist. Khao apna protein.
              </motion.p>

              {/* Quick info pills */}
              <motion.div {...motionProps(fadeUp(0.42))} className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#639922]" />
                  Mon–Fri 6:30–11 AM
                </span>
                <span className="text-white/20 text-[12px]">·</span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#639922]" />
                  Weekends + Evenings 7–10 PM
                </span>
                <span className="text-white/20 text-[12px]">·</span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#639922]" />
                  Opp. Madhava's Cafe, Badlapur East
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                {...motionProps(fadeUp(0.5))}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                {/* Primary CTA */}
                <button
                  onClick={() => {
                    if (onMenuClick) {
                      onMenuClick();
                    } else {
                      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2 bg-[#639922] hover:bg-[#4e7a1a] active:scale-[0.97] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto cursor-pointer"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  aria-label="View our menu"
                >
                  View Menu
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {/* Secondary CTA — WhatsApp */}
                <a
                  href="https://wa.me/919326809058?text=Hi%20Sproutifyyy%2C%20I%27d%20like%20to%20place%20an%20order.%20(Open%206%3A30-11am%20daily%2C%20evenings%20Sat-Sun%207-10pm)"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.97] text-white font-medium text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  aria-label="Order on WhatsApp"
                >
                  {/* WhatsApp icon inline SVG — no external dep */}
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order on WhatsApp
                </a>
              </motion.div>

            </div>

            {/* ── RIGHT: FOOD IMAGE ── */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">

              {/* Glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-[#639922]/20 blur-3xl" />
              </div>

              {/* Image container */}
              <motion.div
                {...motionProps(slideInRight)}
                className="relative w-[260px] sm:w-[320px] lg:w-[400px] xl:w-[460px] aspect-[4/5]"
              >
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-3xl border border-[#639922]/20 scale-105" />

                {/* Main bowl image */}
                <img
                  src={bowlImageUrl}
                  alt="Sproutifyyy protein bowl — sprouts, eggs, and fresh salad"
                  className="relative w-full h-full object-cover rounded-3xl"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* ₹30 price tag — bounces in */}
                <motion.div
                  {...motionProps(tagBounce)}
                  className="absolute -bottom-4 -left-4 lg:-left-8 bg-[#F5E642] text-[#1A3B1C] font-bold text-[13px] px-4 py-2 rounded-full shadow-lg"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", rotate: '-4deg' }}
                  aria-label="Starting from ₹30"
                >
                  ₹30 onwards
                </motion.div>

                {/* Protein badge — top right */}
                <motion.div
                  {...motionProps(fadeUp(0.9))}
                  className="absolute -top-3 -right-3 lg:-right-6 bg-[#1A3B1C] border border-[#639922]/40 text-[#C8E89A] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Up to ~35g protein
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SCROLL HINT ── */}
      <motion.div
        {...motionProps(fadeUp(1.1))}
        className="relative flex justify-center pb-8 pointer-events-none"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="text-[10px] text-white/25 tracking-[2px] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </motion.div>

    </section>
  );
};

export default SproutifyyHero;

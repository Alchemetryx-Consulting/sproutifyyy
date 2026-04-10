'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp = (delay = 0, duration = 0.4) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut', delay } },
});

const fade = (delay = 0, duration = 0.3) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration, ease: 'easeOut', delay } },
});

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.06 },
  }),
};

const ctaVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.65 }
  },
};

const image1Variant = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } },
};

const image2Variant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.5 } },
};

const tagBounce = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 15, delay: 0.9 },
  },
};

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface SproutifyyHeroProps {
  bowlImageUrl?: string;
  bowlImageUrl2?: string;
  onMenuClick?: () => void;
  onWhatsAppClick?: () => void;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export const SproutifyyHero = ({
  bowlImageUrl = '/images/hero-bowl.png',
  bowlImageUrl2 = '/images/sproutifyyy-hero.jpg',
  onMenuClick,
  onWhatsAppClick,
}: SproutifyyHeroProps) => {
  const shouldReduceMotion = useReducedMotion();

  const wordmarkParts = ['sprouti', 'fyyy'];

  // Reduced motion: all animations collapse to simple opacity fades
  const motionProps = (variants: any, custom?: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
      : { initial: 'hidden', animate: 'visible', variants, custom };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-[#1A3B1C] overflow-hidden flex flex-col"
    >
      {/* ── BACKGROUND DEPTH LAYERS ── */}
      {/* Base glow transition */}
      <motion.div
        {...motionProps(fade(0, 0.3))}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 70% at 85% 20%, rgba(99,153,34,0.15) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 90%, rgba(99,153,34,0.08) 0%, transparent 60%)
          `
        }}
      />

      {/* Subtle horizontal rule near bottom */}
      <div className="absolute bottom-20 left-0 right-0 h-px bg-white/5 pointer-events-none z-0" />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* ── NAVBAR placeholder spacer */}
      <div className="h-16 shrink-0 relative z-20" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex-1 flex items-center z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-10 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 h-auto lg:h-[80vh] items-center w-full relative overflow-visible">

          {/* ── LEFT: TEXT CONTENT (55%) ── */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20">

            {/* Eyebrow tag */}
            <motion.div {...motionProps(fadeUp(0, 0.4))} className="mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#639922]/20 border border-[#639922]/30 text-[#C8E89A] text-[11px] font-medium tracking-[2px] uppercase px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8E89A] animate-pulse" />
                Badlapur, Mumbai
              </span>
            </motion.div>

            {/* Wordmark */}
            <h1 className="flex items-baseline gap-0 mb-4 leading-[0.9]" aria-label="Sproutifyyy">
              {wordmarkParts.map((word, i) => (
                <motion.span
                  key={word}
                  {...motionProps(wordVariants, i)}
                  className={
                    i === 0
                      ? 'font-heading font-medium text-[clamp(56px,14vw,72px)] lg:text-[clamp(72px,13vw,130px)] text-white tracking-[-0.03em]'
                      : 'font-heading font-medium text-[clamp(56px,14vw,72px)] lg:text-[clamp(72px,13vw,130px)] text-[#C8E89A] tracking-[-0.03em]'
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              {...motionProps(fadeUp(0.4, 0.4))}
              className="text-[clamp(15px,2vw,18px)] font-heading font-semibold text-white/70 tracking-[0.02em] mb-2"
            >
              Eat Healthy. Stay Groovy.
            </motion.p>

            {/* Hindi line */}
            <motion.p
              {...motionProps(fade(0.5, 0.3))}
              className="text-[13px] text-white/35 italic font-dm font-light mb-8 lg:mb-10"
            >
              Suno apna playlist. Khao apna protein.
            </motion.p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.span {...motionProps(fadeUp(0.55, 0.3))} className="inline-flex items-center gap-2 text-[13px] text-white/70 font-heading font-semibold">
                <Clock className="w-4 h-4 text-[#639922]" />
                Mon–Fri 6:30–11 AM
              </motion.span>
              <motion.span {...motionProps(fadeUp(0.61, 0.3))} className="hidden sm:inline-flex text-white/20 text-[13px]">·</motion.span>
              <motion.span {...motionProps(fadeUp(0.67, 0.3))} className="inline-flex items-center gap-2 text-[13px] text-white/70 font-heading font-semibold">
                <Clock className="w-4 h-4 text-[#639922]" />
                Weekends + Evenings 7–10 PM
              </motion.span>
              <motion.span {...motionProps(fadeUp(0.73, 0.3))} className="hidden xl:inline-flex text-white/20 text-[13px]">·</motion.span>
              <motion.span {...motionProps(fadeUp(0.79, 0.3))} className="inline-flex items-center gap-2 text-[13px] text-white/70 font-heading font-semibold">
                <MapPin className="w-4 h-4 text-[#639922]" />
                Opp. Madhava's Cafe, Badlapur
              </motion.span>
            </div>

            {/* CTA Buttons */}
            <motion.div
              {...motionProps(ctaVariant)}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
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
                className="group inline-flex items-center justify-center gap-2 bg-[#639922] hover:bg-[#4e7a1a] active:scale-[0.97] text-white font-semibold font-heading text-[16px] px-8 py-4 rounded-full transition-all duration-200 w-full sm:w-auto cursor-pointer"
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
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.97] text-white font-semibold font-heading text-[16px] px-8 py-4 rounded-full transition-all duration-200 w-full sm:w-auto"
                aria-label="Order on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </motion.div>

          </div>

          {/* ── RIGHT: FOOD IMAGES (45%) ── */}
          <div className="w-full lg:w-[45%] h-[240px] sm:h-[320px] lg:h-auto relative z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 lg:pr-8 xl:pr-12">

            <div className="relative w-full max-w-[280px] lg:max-w-[380px] aspect-[4/5] mx-auto lg:mx-0 group">

              {/* Image 1 (Back) */}
              <motion.div
                {...motionProps(image1Variant)}
                className="absolute w-[75%] lg:w-[70%] aspect-[4/5] rounded-2xl shadow-xl z-0 -right-4 -top-8 lg:-right-8 lg:-top-16 opacity-85 transition-transform duration-250 ease-out lg:group-hover:-translate-y-[5px] lg:group-hover:rotate-[-10deg]"
                style={{ rotate: '-8deg' }}
              >
                <img
                  src={bowlImageUrl2}
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/400x500/2D5A1B/C8E89A?text=Bowl+1" }}
                  alt="Sproutifyyy bowl behind"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                {/* Protein badge */}
                <motion.div
                  {...motionProps(fadeUp(0.95, 0.3))}
                  className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-[#1A3B1C] border border-[#639922]/40 text-[#C8E89A] font-dm text-[11px] font-medium px-3 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap"
                >
                  Up to ~35g protein
                </motion.div>
              </motion.div>

              {/* Image 2 (Front) */}
              <motion.div
                {...motionProps(image2Variant)}
                className="absolute w-[80%] aspect-[4/5] rounded-2xl shadow-2xl z-10 -left-4 -bottom-4 lg:-left-12 lg:-bottom-12 transition-transform duration-250 ease-out lg:group-hover:-translate-y-[10px]"
                style={{ rotate: '4deg' }}
              >
                <img
                  src={bowlImageUrl}
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/400x500/1A3B1C/C8E89A?text=Bowl+2" }}
                  alt="Sproutifyyy bowl front"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-2xl border border-[#639922]/20 scale-[1.03] pointer-events-none" />

                {/* ₹30 price tag */}
                <motion.div
                  {...motionProps(tagBounce)}
                  className="absolute -bottom-4 -left-4 lg:-left-6 lg:-bottom-6 bg-[#F5E642] text-[#1A3B1C] font-bold font-heading text-[15px] px-4 py-2 rounded-lg shadow-lg z-20 whitespace-nowrap"
                  style={{ rotate: '-4deg' }}
                  aria-label="Starting from ₹30"
                >
                  ₹30 onwards
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM SCROLL HINT ── */}
      <motion.div
        {...motionProps(fadeUp(1.0, 0.3))}
        className="relative flex justify-center pb-8 pointer-events-none z-20"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="text-[10px] text-white/25 tracking-[2px] font-heading uppercase"
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

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

// 👉 Put your 5 couple photos in src/assets/ with these names
// (portrait photos work best, about 3:4)
import photo1 from "@/assets/images/image-1.jpeg";
import photo2 from "@/assets/images/image-2.jpeg";
import photo3 from "@/assets/images/image-3.jpeg";
import photo4 from "@/assets/images/image-4.jpeg";
import photo5 from "@/assets/images/image-5.jpeg";

const photos = [
  { src: photo1, alt: "The couple together" },
  { src: photo2, alt: "The couple smiling" },
  { src: photo3, alt: "A quiet moment" },
  { src: photo4, alt: "The couple laughing" },
  { src: photo5, alt: "The couple walking" },
];

/* ------------------------------------------------------------------ */
/*  Shapes                                                             */
/* ------------------------------------------------------------------ */

/** The scalloped Rajasthani (jharokha) arch, shared by all arch frames.
 *  Drawn once, used through clip-path: url(#gallery-arch). */
function ArchClip() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="gallery-arch" clipPathUnits="objectBoundingBox">
          <path
            d="M0,1 L0,0.46
               C0,0.40 0.03,0.375 0.075,0.37
               C0.045,0.31 0.075,0.255 0.14,0.255
               C0.12,0.19 0.17,0.14 0.235,0.15
               C0.235,0.09 0.29,0.05 0.35,0.07
               C0.38,0.03 0.44,0.01 0.5,0
               C0.56,0.01 0.62,0.03 0.65,0.07
               C0.71,0.05 0.765,0.09 0.765,0.15
               C0.83,0.14 0.88,0.19 0.86,0.255
               C0.925,0.255 0.955,0.31 0.925,0.37
               C0.97,0.375 1,0.40 1,0.46
               L1,1 Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const goldGradient =
  "linear-gradient(145deg, var(--gold-soft) 0%, var(--champagne) 38%, var(--gold-soft) 62%, var(--gold) 100%)";

const softShadow =
  "drop-shadow(0 14px 16px color-mix(in oklab, var(--deep-text) 22%, transparent))";

type FrameProps = {
  src: string;
  alt: string;
  onOpen: () => void;
  className?: string;
};

/** Photo inside a gold scalloped arch */
function ArchFrame({ src, alt, onOpen, className = "" }: FrameProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open photo: ${alt}`}
      className={`group relative block aspect-[3/4] w-full ${className}`}
      style={{ filter: softShadow }}
    >
      {/* gold edge */}
      <span
        className="absolute inset-0"
        style={{ clipPath: "url(#gallery-arch)", background: goldGradient }}
      />
      {/* photo */}
      <span
        className="absolute inset-[4px] overflow-hidden bg-cream"
        style={{ clipPath: "url(#gallery-arch)" }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </span>
    </button>
  );
}

/** Photo inside a round pearl-edged medallion (same look as the timeline) */
function RoundFrame({ src, alt, onOpen, className = "" }: FrameProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open photo: ${alt}`}
      className={`group relative block aspect-square w-full rounded-full p-[4px] ${className}`}
      style={{ background: goldGradient, filter: softShadow }}
    >
      <span className="relative block h-full w-full overflow-hidden rounded-full border-[3px] border-soft-white">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </span>
      {/* pearl dots just outside the gold */}
      <span className="pointer-events-none absolute -inset-[7px] rounded-full border-[3px] border-dotted border-gold-soft/70" />
    </button>
  );
}

/** Small lotus between the rows */
function Lotus() {
  return (
    <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold-soft" />
      <svg viewBox="-16 -16 32 32" className="h-7 w-7">
        {[-62, -31, 31, 62].map((a) => (
          <path
            key={a}
            transform={`rotate(${a})`}
            d="M0 10 C-5 3 -5 -6 0 -13 C5 -6 5 3 0 10 Z"
            style={{ fill: "var(--lavender)", stroke: "var(--gold)", strokeWidth: 0.9, opacity: 0.85 }}
          />
        ))}
        <path
          d="M0 10 C-5 3 -5 -6 0 -13 C5 -6 5 3 0 10 Z"
          style={{ fill: "var(--champagne)", stroke: "var(--gold)", strokeWidth: 1 }}
        />
        <circle cy="6" r="1.5" style={{ fill: "var(--gold-soft)" }} />
      </svg>
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold-soft" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Full-screen viewer                                                 */
/* ------------------------------------------------------------------ */
function Lightbox({
  index,
  onClose,
  onMove,
}: {
  index: number;
  onClose: () => void;
  onMove: (dir: 1 | -1) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onMove]);

  const btn =
    "absolute z-10 grid h-11 w-11 place-items-center rounded-full border border-gold-soft/60 bg-deep/60 text-xl text-soft-white backdrop-blur transition hover:bg-gold";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep/90 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button type="button" aria-label="Close" onClick={onClose} className={`${btn} right-4 top-4`}>
        ×
      </button>
      <button
        type="button"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onMove(-1);
        }}
        className={`${btn} left-3 top-1/2 -translate-y-1/2`}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onMove(1);
        }}
        className={`${btn} right-3 top-1/2 -translate-y-1/2`}
      >
        ›
      </button>

      <motion.img
        key={index}
        src={photos[index].src}
        alt={photos[index].alt}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-h-[86vh] max-w-full rounded-md border-2 border-gold-soft object-contain shadow-2xl"
      />

      <p className="absolute bottom-5 text-xs uppercase tracking-[0.3em] text-champagne">
        {index + 1} / {photos.length}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [],
  );
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="relative overflow-hidden bg-blossom-flip px-6 py-20">
      <ArchClip />

      <div className="relative mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="Our moments" title="The Gallery" script />
        </Reveal>

        {/* 1 · Hero arch */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 w-[78%]">
            <ArchFrame {...photos[0]} onOpen={() => setOpen(0)} />
          </div>
        </Reveal>

        <div className="mt-8">
          <Lotus />
        </div>

        {/* 2 · Two arches, the right one sits lower */}
        <div className="mt-8 grid grid-cols-2 items-start gap-4">
          <Reveal delay={0.05}>
            <ArchFrame {...photos[1]} onOpen={() => setOpen(1)} />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="pt-12">
              <ArchFrame {...photos[2]} onOpen={() => setOpen(2)} />
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <Lotus />
        </div>

        {/* 3 · Two round medallions, left one sits lower */}
        <div className="mt-10 grid grid-cols-2 items-start gap-6 px-2">
          <Reveal delay={0.05}>
            <div className="pt-10">
              <RoundFrame {...photos[3]} onOpen={() => setOpen(3)} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <RoundFrame {...photos[4]} onOpen={() => setOpen(4)} />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
            Tap a photo to view
          </p>
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
      </AnimatePresence>
    </section>
  );
}
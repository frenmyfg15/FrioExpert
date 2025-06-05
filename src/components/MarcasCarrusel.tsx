"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/image/marcas/lg.webp", alt: "Logo LG" },
  { src: "/image/marcas/samsung.webp", alt: "Logo Samsung" },
  { src: "/image/marcas/whirlpool.webp", alt: "Logo Whirlpool" },
  { src: "/image/marcas/frigidaire.webp", alt: "Logo Frigidaire" },
  { src: "/image/marcas/hisense.webp", alt: "Logo Hisense" },
  { src: "/image/marcas/mabe.webp", alt: "Logo Mabe" },
];

export default function MarcasCarrusel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;

    const scroll = () => {
      offset -= 0.5;
      track.style.transform = `translateX(${offset}px)`;

      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section
      className="overflow-hidden py-8 bg-white"
      aria-label="Marcas que reparamos"
    >
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-12 absolute left-0 top-0 h-full items-center px-10"
          style={{ willChange: "transform", whiteSpace: "nowrap" }}
          aria-hidden="true"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                loading="lazy"
                className="h-auto w-auto max-h-[30px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                role="img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

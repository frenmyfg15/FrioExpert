"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "/image/marcas/lg.webp",
  "/image/marcas/samsung.webp",
  "/image/marcas/whirlpool.webp",
  "/image/marcas/frigidaire.webp",
  "/image/marcas/hisense.webp",
  "/image/marcas/mabe.webp",
];

export default function MarcasCarrusel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;

    const scroll = () => {
      offset -= 0.5; // Velocidad ajustable
      track.style.transform = `translateX(${offset}px)`;

      // Reinicia el desplazamiento cuando pasa la mitad del ancho
      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="overflow-hidden h-[100px] w-full">
      <div className="relative w-full h-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-16 absolute left-0 top-0 h-full items-center px-10"
          style={{ willChange: "transform", whiteSpace: "nowrap" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              width={80} // ajusta según tu diseño, puedes usar 100 si deseas más resolución
              height={20}
              className="h-[20px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

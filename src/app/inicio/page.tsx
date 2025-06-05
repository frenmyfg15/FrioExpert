"use client";

import Head from "next/head";
import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import MarcasCarrusel from "@/components/MarcasCarrusel";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import { QuienesSomos } from "@/components/QuienesSomos";
import Services from "@/components/Services";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Servicio Técnico en República Dominicana | Reparación de Electrodomésticos e Industriales</title>
        <meta
          name="description"
          content="Reparamos e instalamos electrodomésticos, equipos de hostelería e industriales en toda la República Dominicana. Atención rápida y garantizada."
        />
        <link rel="canonical" href="https://tusitio.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Servicio Técnico Profesional en República Dominicana" />
        <meta property="og:description" content="Reparación e instalación de electrodomésticos, industriales y hostelería. Llama ahora y recibe asistencia rápida." />
      </Head>

      <main>
        {/* CTA Principal */}
        <section className="bg-black text-white text-center p-4 md:p-6 flex flex-col" aria-labelledby="hero-heading">
          <header className="flex flex-col items-center gap-4 mb-10">
            <p className="font-bold text-base md:text-lg">
              <span className="text-cyan-400">¿Te urge?</span> Llama
            </p>
            <a
              href="tel:8299192022"
              className="border-2 border-cyan-400 px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Llamar al número 829 919 2022"
            >
              <FaPhoneAlt aria-hidden="true" />
              829 919 2022
            </a>
          </header>

          <h1
            id="hero-heading"
            className="text-xl md:text-3xl font-bold px-4 md:px-10 max-w-3xl mx-auto leading-relaxed"
          >
            Reparación, mantenimiento e instalación de aparatos del hogar e industriales en{" "}
            <span className="text-red-300">República</span> <span className="text-cyan-400">Dominicana</span>.
          </h1>

          {/* Imagen y texto */}
          <div className="mt-10 px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-10">
            <p className="text-sm md:text-lg font-light md:font-normal max-w-xl text-center lg:text-left leading-relaxed">
              Hoy estamos dispuestos a asistirle ante cualquier imprevisto en sus aparatos eléctricos o electrodomésticos.
              Haremos su correspondiente <span className="text-cyan-400">reparación</span> y un buen{" "}
              <span className="text-cyan-400">mantenimiento</span>.
            </p>
            <div className="relative w-[300px] lg:w-[500px] h-auto aspect-[5/3]">
              <Image
                src="/image/aparatos.webp"
                alt="Varios aparatos eléctricos reparados"
                fill
                sizes="(max-width: 768px) 300px, 500px"
                className="object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Secciones secundarias */}
        <MarcasCarrusel />
        <Garantia />
        <Services />
        <Cobertura />
        <TestimonialsCarousel />
        <QuienesSomos />
        <PreguntasFrecuentes />
      </main>
    </>
  );
}

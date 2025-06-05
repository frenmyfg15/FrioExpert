import Head from "next/head";
import React from "react";
import { reparacionTVData } from "@/data/tv";

import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

export default function TVPage() {
  return (
    <>
      <Head>
        <title>Reparación de Televisores | Servicio Técnico en República Dominicana</title>
        <meta
          name="description"
          content="Servicio técnico especializado en reparación de televisores LED, LCD, OLED y Smart TV. Técnicos con experiencia en toda República Dominicana."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/televisores" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Reparación de TV Smart y LED en RD | FrioExpert" />
        <meta
          property="og:description"
          content="Reparamos televisores de todas las marcas. Pantallas, sonido, conectividad, placas y más. Atención rápida y garantizada."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Reparación de Televisores",
              serviceType: "Servicio técnico de televisores",
              provider: {
                "@type": "Organization",
                name: "FrioExpert RD",
              },
              areaServed: {
                "@type": "Country",
                name: "República Dominicana",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios para televisores",
                itemListElement: reparacionTVData.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  },
                })),
              },
              url: "https://tusitio.com/servicios/televisores",
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio
          titulo={reparacionTVData.titulo}
          imagen={reparacionTVData.imagen}
        />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">
            Servicio técnico profesional de televisores en República Dominicana
          </h1>
          <p>
            En <strong>FrioExpert RD</strong> contamos con técnicos certificados en diagnóstico y reparación de televisores LED, LCD, OLED y Smart TV de todas las marcas.
            Solucionamos problemas de imagen, sonido, placas, retroiluminación, puertos HDMI y más.
          </p>
          <p className="mt-4">
            Reparamos modelos modernos y clásicos de marcas como LG, Samsung, TCL, Sony, Hisense, entre otras. También ofrecemos servicio para TV industriales y de uso comercial.
          </p>
          <p className="mt-4">
            Nuestra atención cubre toda <strong>República Dominicana</strong>. Realizamos servicio a domicilio, diagnósticos rápidos y entrega con garantía.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={reparacionTVData.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={reparacionTVData.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={reparacionTVData.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>

        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'tv'} />
        </div>

      </main>
    </>
  );
}

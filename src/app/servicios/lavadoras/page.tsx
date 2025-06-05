import Head from "next/head";
import React from "react";
import { lavadoraData } from "@/data/lavadora";

import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

export default function LavadorasPage() {
  return (
    <>
      <Head>
        <title>Reparación de Lavadoras | Servicio Técnico en República Dominicana</title>
        <meta
          name="description"
          content="Reparamos lavadoras domésticas e industriales. Servicio técnico en toda República Dominicana con técnicos certificados y garantía."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/lavadoras" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Técnicos en Lavadoras | FrioExpert RD" />
        <meta
          property="og:description"
          content="Reparación, diagnóstico y mantenimiento de lavadoras de todas las marcas. Atención rápida y servicio garantizado en toda República Dominicana."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Reparación de Lavadoras",
              serviceType: "Servicio técnico de lavadoras",
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
                name: "Servicios para lavadoras",
                itemListElement: lavadoraData.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  },
                })),
              },
              url: "https://tusitio.com/servicios/lavadoras",
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio
          titulo={lavadoraData.titulo}
          imagen={lavadoraData.imagen}
        />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">
            Servicio técnico de lavadoras domésticas e industriales
          </h1>
          <p>
            En <strong>FrioExpert RD</strong> ofrecemos reparación, diagnóstico y mantenimiento de lavadoras de todas las marcas: Samsung, LG, Whirlpool, Mabe, Electrolux y más.
          </p>
          <p className="mt-4">
            Reparamos problemas de desagüe, giros, motores, tarjetas electrónicas, fallos eléctricos y piezas internas. También ofrecemos soluciones para lavadoras industriales de alto volumen.
          </p>
          <p className="mt-4">
            Atendemos en toda la <strong>República Dominicana</strong> con técnicos certificados, repuestos garantizados y atención el mismo día en muchas zonas.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={lavadoraData.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={lavadoraData.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={lavadoraData.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>
        
        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'lavadoras'} />
        </div>

      </main>
    </>
  );
}

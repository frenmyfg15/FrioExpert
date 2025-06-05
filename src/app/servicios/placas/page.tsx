import Head from "next/head";
import React from "react";
import { reparacionPlacasElectronicasData } from "@/data/placas";

import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

export default function PlacasElectronicasPage() {
  return (
    <>
      <Head>
        <title>Reparación de Placas Electrónicas | Técnicos Certificados en República Dominicana</title>
        <meta
          name="description"
          content="Servicio técnico especializado en reparación de placas electrónicas para lavadoras, neveras, aires, TV, inversores y equipos médicos en toda RD."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/placas-electronicas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Reparación de Placas Electrónicas en RD | FrioExpert" />
        <meta
          property="og:description"
          content="Diagnóstico, reparación y pruebas funcionales de placas electrónicas. Equipos de hogar, industria, salud y refrigeración. Servicio garantizado."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Reparación de Placas Electrónicas",
              serviceType: "Servicio técnico especializado en placas electrónicas",
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
                name: "Servicios técnicos de placas",
                itemListElement: reparacionPlacasElectronicasData.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  },
                })),
              },
              url: "https://tusitio.com/servicios/placas-electronicas",
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio
          titulo={reparacionPlacasElectronicasData.titulo}
          imagen={reparacionPlacasElectronicasData.imagen}
        />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">
            Reparación profesional de placas electrónicas en electrodomésticos e industria
          </h1>
          <p>
            En <strong>FrioExpert RD</strong> ofrecemos diagnóstico y reparación avanzada de placas electrónicas para una amplia gama de dispositivos:
            <strong> lavadoras, frigoríficos, aires acondicionados, televisores, inversores, UPS, equipos médicos</strong> y más.
          </p>
          <p className="mt-4">
            Contamos con personal especializado en electrónica de control, herramientas de inspección SMT, y estaciones de soldadura de precisión. Realizamos pruebas funcionales completas para garantizar resultados duraderos.
          </p>
          <p className="mt-4">
            Atendemos clientes residenciales, comerciales e industriales en toda <strong>República Dominicana</strong>, con servicio urgente y garantía real.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={reparacionPlacasElectronicasData.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={reparacionPlacasElectronicasData.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={reparacionPlacasElectronicasData.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>

        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'placas'} />
        </div>

      </main>
    </>
  );
}

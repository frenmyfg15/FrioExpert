import Head from "next/head";
import React from "react";
import { frigorificosData } from "@/data/frigorificos";

import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

const FrigorificosPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reparación de Frigoríficos | Servicio Técnico en República Dominicana</title>
        <meta
          name="description"
          content="Servicio técnico especializado en reparación de frigoríficos domésticos e industriales. Atención rápida y garantizada en toda la República Dominicana."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/frigorificos" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Reparación de Frigoríficos | FrioExpert RD" />
        <meta
          property="og:description"
          content="Atendemos urgencias de frigoríficos comerciales y del hogar. Recarga de gas, termostatos, compresores, fugas. Técnicos certificados en todo RD."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Reparación de Frigoríficos",
              serviceType: "Servicio técnico de refrigeradores",
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
                name: "Servicios para frigoríficos",
                itemListElement: frigorificosData.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  },
                })),
              },
              url: "https://tusitio.com/servicios/frigorificos",
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio
          titulo={frigorificosData.titulo}
          imagen={frigorificosData.imagen}
        />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">
            Reparación de frigoríficos domésticos e industriales
          </h1>
          <p>
            En <strong>FrioExpert RD</strong> ofrecemos servicio técnico especializado para frigoríficos de uso doméstico, comercial y de alta capacidad.
            Contamos con técnicos certificados y cobertura nacional para resolver averías, fallos eléctricos y problemas de refrigeración.
          </p>
          <p className="mt-4">
            Reparamos compresores, sistemas de gas refrigerante, sensores, placas electrónicas, termostatos y todo tipo de averías comunes en refrigeradores modernos.
          </p>
          <p className="mt-4">
            Si eres propietario de un hogar, restaurante, colmado, panadería o supermercado, podemos ayudarte a mantener tus equipos en funcionamiento
            con diagnósticos precisos y repuestos garantizados.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={frigorificosData.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={frigorificosData.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={frigorificosData.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>

        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'frigorificos'} />
        </div>

      </main>
    </>
  );
};

export default FrigorificosPage;

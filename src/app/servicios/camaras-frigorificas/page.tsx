import Head from "next/head";
import React from "react";
import { camarasFrigorificasData } from "@/data/camara-frigorificas";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { Cobertura } from "@/components/Cobertura";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

export default function CamarasFrigorificasPage() {
  return (
    <>
      <Head>
        <title>Instalación y Mantenimiento de Cámaras Frigoríficas | FrioExpert RD</title>
        <meta
          name="description"
          content="Especialistas en instalación, reparación y mantenimiento de cámaras frigoríficas industriales y comerciales en toda República Dominicana. Servicio técnico certificado."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/camaras-frigorificas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cámaras Frigoríficas Industriales | FrioExpert RD" />
        <meta
          property="og:description"
          content="Soluciones profesionales para cámaras frigoríficas en hoteles, restaurantes, supermercados e industrias. Técnicos con experiencia."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Instalación y Mantenimiento de Cámaras Frigoríficas",
              serviceType: "Servicio técnico de cámaras frigoríficas",
              areaServed: {
                "@type": "Country",
                name: "República Dominicana",
              },
              provider: {
                "@type": "Organization",
                name: "FrioExpert RD",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de cámaras frigoríficas",
                itemListElement: camarasFrigorificasData.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  },
                })),
              },
              url: "https://tusitio.com/servicios/camaras-frigorificas",
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio
          titulo={camarasFrigorificasData.titulo}
          imagen={camarasFrigorificasData.imagen}
        />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">
            Cámaras frigoríficas para hoteles, restaurantes e industria
          </h1>
          <p>
            En <strong>FrioExpert RD</strong> somos especialistas en sistemas de refrigeración de gran escala. Instalamos, reparamos y realizamos mantenimiento a cámaras frigoríficas para el sector <strong>hotelero</strong>, <strong>alimenticio</strong> e <strong>industrial</strong>.
          </p>
          <p className="mt-4">
            Nuestro servicio técnico trabaja con precisión en soluciones para conservación de alimentos, bebidas, farmacéuticos y más. Ofrecemos atención personalizada para cada tipo de negocio o instalación.
          </p>
          <p className="mt-4">
            Cubrimos todas las provincias de República Dominicana y atendemos en menos de 24h en zonas como Santo Domingo, Santiago, Punta Cana y Puerto Plata.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={camarasFrigorificasData.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={camarasFrigorificasData.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={camarasFrigorificasData.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>

        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'camaras'} />
        </div>
        
      </main>
    </>
  );
}

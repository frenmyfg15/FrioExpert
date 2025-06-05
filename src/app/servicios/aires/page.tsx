import Head from "next/head";
import React from "react";
import { aires } from "@/data/aire-acoindicionado";
import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Instalación y Reparación de Aire Acondicionado en República Dominicana</title>
        <meta
          name="description"
          content="Servicio técnico especializado en aires acondicionados split, inverter y centrales. Instalación, carga de gas, mantenimiento y reparación en toda República Dominicana."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/aires" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Técnicos en Aire Acondicionado | FrioExpert RD" />
        <meta
          property="og:description"
          content="Reparación, instalación y mantenimiento de aires acondicionados residenciales e industriales en todo el país. Atención rápida y con garantía."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Instalación y Reparación de Aire Acondicionado",
              serviceType: "Reparación de aire acondicionado",
              provider: {
                "@type": "Organization",
                name: "FrioExpert RD",
                areaServed: {
                  "@type": "Country",
                  name: "República Dominicana"
                },
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de aire acondicionado",
                itemListElement: aires.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  }
                }))
                ,
              },
              url: "https://tusitio.com/servicios/aires"
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio titulo={aires.titulo} imagen={aires.imagen} />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">Técnicos en aire acondicionado</h1>
          <p>
            Nuestro equipo especializado ofrece servicio completo de instalación, reparación y mantenimiento de{" "}
            <strong>aires acondicionados split, inverter y centrales</strong> en toda la República Dominicana.
          </p>
          <p className="mt-4">
            Trabajamos con sistemas residenciales, comerciales e industriales. Desde recargas de gas, limpieza profunda,
            hasta soluciones para fugas y fallos en el sistema.
          </p>
          <p className="mt-4">
            Atendemos en Santo Domingo, Santiago, La Vega, Punta Cana, y más de 20 ciudades con técnicos certificados y equipamiento profesional.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={aires.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={aires.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={aires.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>

        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'aires'} />
        </div>
      </main>
    </>
  );
};

export default Page;

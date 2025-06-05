import Head from "next/head";
import React from "react";
import { reparacionEquiposMedicosData } from "@/data/equipos-medicos";

import { Cobertura } from "@/components/Cobertura";
import Garantia from "@/components/Garantia";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

import HeaderServicio from "@/components/servicios/HeaderServicio";
import TrabajosServicio from "@/components/servicios/TrabajosServicio";
import ConsejosServicio from "@/components/servicios/ConsejosServicio";
import IncluyeServicio from "@/components/servicios/IncluyeServicio";
import { PalabrasClaveServicio } from "@/components/servicios/PalabrasClaveServicio";

export default function EquiposMedicosPage() {
  return (
    <>
      <Head>
        <title>Reparación de Equipos Médicos | Servicio Técnico en República Dominicana</title>
        <meta
          name="description"
          content="Reparamos y damos mantenimiento a equipos médicos electrónicos en clínicas, hospitales y laboratorios. Técnicos especializados en todo el país."
        />
        <link rel="canonical" href="https://tusitio.com/servicios/equipos-medicos" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Técnicos en Equipos Médicos | FrioExpert RD" />
        <meta
          property="og:description"
          content="Servicio técnico especializado en equipos biomédicos y clínicos en toda República Dominicana. Atención profesional y con garantía."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Reparación y Mantenimiento de Equipos Médicos",
              serviceType: "Soporte técnico para equipos médicos",
              provider: {
                "@type": "Organization",
                name: "FrioExpert RD",
                areaServed: {
                  "@type": "Country",
                  name: "República Dominicana",
                },
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios técnicos médicos",
                itemListElement: reparacionEquiposMedicosData.trabajos.map((trabajo) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: trabajo.titulo,
                  },
                })),
              },
              url: "https://tusitio.com/servicios/equipos-medicos",
            }),
          }}
        />
      </Head>

      <main className="pb-16 max-w-6xl mx-auto">
        <HeaderServicio
          titulo={reparacionEquiposMedicosData.titulo}
          imagen={reparacionEquiposMedicosData.imagen}
        />

        <article className="px-6 mt-10 text-gray-700 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-cyan-700 mb-4">
            Reparación y soporte técnico para equipos médicos electrónicos
          </h1>
          <p>
            En <strong>FrioExpert RD</strong> brindamos atención especializada a instituciones de salud, laboratorios, centros de diagnóstico y clínicas privadas. Mantenemos y reparamos equipos biomédicos con precisión técnica y cumplimiento normativo.
          </p>
          <p className="mt-4">
            Contamos con técnicos formados en electrónica médica y protocolos de calidad. Trabajamos con monitores, desfibriladores, centrífugas, autoclaves, fuentes de alimentación, y más.
          </p>
          <p className="mt-4">
            Nuestra cobertura abarca toda la <strong>República Dominicana</strong>, ofreciendo servicio urgente, mantenimiento preventivo y diagnósticos detallados.
          </p>
        </article>

        <div className="mt-16 px-6">
          <Garantia />
        </div>

        <div className="mt-16">
          <TrabajosServicio trabajos={reparacionEquiposMedicosData.trabajos} />
        </div>

        <div className="mt-16">
          <IncluyeServicio items={reparacionEquiposMedicosData.incluye} />
        </div>

        <div className="mt-16">
          <ConsejosServicio consejos={reparacionEquiposMedicosData.consejos} />
        </div>

        <div className="mt-16">
          <Cobertura />
        </div>

        <div className="mt-16 px-6">
          <PreguntasFrecuentes />
        </div>

        <div className="mt-16 px-6">
          <PalabrasClaveServicio tipo={'medicos'} />
        </div>
      </main>
    </>
  );
}

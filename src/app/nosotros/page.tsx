import Head from "next/head";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros | Técnicos Especialistas en Frío y Climatización en RD</title>
        <meta
          name="description"
          content="Conoce a FrioExpert RD, líderes en servicio técnico de refrigeración, climatización y equipos industriales en toda la República Dominicana."
        />
        <link rel="canonical" href="https://tusitio.com/nosotros" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <section className="py-16 px-6 bg-white text-gray-800" aria-labelledby="nosotros-title">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1
              id="nosotros-title"
              className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-4 leading-tight"
            >
              Profesionales en refrigeración y servicio técnico industrial
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Más de una década ofreciendo soluciones confiables en climatización, electrodomésticos y equipos de hostelería.
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="flex justify-center my-10">
            <div className="relative w-[300px] md:w-[450px] aspect-[4/3]">
              <Image
                src="/image/tecnico.webp"
                alt="Equipo técnico FrioExpert RD en servicio"
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="rounded-xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Historia y experiencia */}
          <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
            <p>
              En <strong>FrioExpert RD</strong> somos un equipo técnico multidisciplinario con más de <strong>10 años de trayectoria</strong>. Atendemos
              emergencias, mantenimientos e instalaciones en todo el país, tanto en el sector <strong>residencial</strong>, como en áreas <strong>industriales y comerciales</strong>.
            </p>
            <p>
              Nuestra experiencia abarca <strong>refrigeración doméstica e industrial</strong>, <strong>climatización</strong>, <strong>equipos de hostelería</strong>, cámaras frigoríficas,
              aires acondicionados y electrodomésticos complejos. Nos enorgullece mantener altos estándares de calidad y un enfoque humano con cada cliente.
            </p>
            <p>
              Brindamos soporte a familias, negocios locales, hoteles, restaurantes, supermercados, y también en instalaciones industriales en ciudades como{" "}
              <strong>Santo Domingo, Santiago, Punta Cana, La Vega, Puerto Plata</strong> y más.
            </p>
          </div>

          {/* Secciones en Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-6xl mx-auto" role="region" aria-label="Información institucional">
            <div className="bg-cyan-50 p-6 rounded-xl shadow-sm border text-left">
              <h2 className="text-xl font-semibold text-cyan-800 mb-2">Nuestra misión</h2>
              <p className="text-gray-700 text-sm">
                Garantizar tranquilidad a través de soluciones técnicas rápidas, seguras y de calidad para cada cliente en cualquier rincón de la República Dominicana.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-xl shadow-sm border text-left">
              <h2 className="text-xl font-semibold text-cyan-800 mb-2">Nuestros valores</h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Responsabilidad</li>
                <li>Transparencia</li>
                <li>Atención al detalle</li>
                <li>Compromiso con el cliente</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-6 rounded-xl shadow-sm border text-left">
              <h2 className="text-xl font-semibold text-cyan-800 mb-2">Especialización</h2>
              <p className="text-gray-700 text-sm">
                Nos especializamos en sistemas de frío, climatización, electrodomésticos industriales y cámaras frigoríficas. Contamos con tecnología de diagnóstico avanzada y técnicos certificados.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

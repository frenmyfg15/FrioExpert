import Image from "next/image";
import Link from "next/link";

const descripcion = `
Somos un equipo completo y único en este sector de las reparaciones del hogar, industrial, local u oficina.
Abarcamos todas las áreas electrónicas de hogar, local e industrial. Ofrecemos no solo reparación sino también asesoría.
Contamos con expertos experimentados y formados en varias ramas técnicas, tales como: técnicos de lavadoras, lavavajillas,
frigoríficos, calderas, aires acondicionados y equipos de hostelería. También ofrecemos servicios de fontanería, limpieza y más.
`;

export const QuienesSomos: React.FC = () => {
  return (
    <div className="text-center m-5 items-center justify-around flex flex-wrap">
      <Image
        src="/image/tecnico.webp"
        alt="Técnico"
        width={500}
        height={300}
        className="w-[300px] lg:w-[500px] rounded-2xl"
        priority
      />

      <div className="items-center justify-center flex flex-col">
        <h2 className="font-bold text-base md:text-2xl md:font-bold md:px-10 max-w-3xl mx-auto leading-relaxed m-5">
          ¿Quiénes somos?
          <br />
          Somos un equipo completo y único en este sector de las reparaciones del hogar, industrial, local u oficina.
        </h2>

        <p className="text-sm font-light md:text-lg md:font-normal max-w-xl text-center leading-relaxed whitespace-pre-line">
          {descripcion}
        </p>

        <Link
          href="/nosotros"
          className="border-2 border-cyan-400 px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:scale-110 transition-transform m-auto mt-5"
        >
          Conócenos
          <img src="/svg/arrow-right.svg" alt="Flecha" className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

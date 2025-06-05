"use client";

import { keywordsPorTipo } from "@/data/keywords";
import { FaSearch } from "react-icons/fa";

interface Props {
  tipo: keyof typeof keywordsPorTipo;
  ciudadBase?: string;
}

export const PalabrasClaveServicio = ({ tipo, ciudadBase = "República Dominicana" }: Props) => {
  const keywords = keywordsPorTipo[tipo] || [];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20 my-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Búsquedas frecuentes</h2>
        <p className="text-gray-600 mb-8">
          Esto es lo que suelen buscar nuestros clientes en {ciudadBase} cuando necesitan un servicio técnico de{" "}
          <strong className="capitalize">{tipo}</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {keywords.map((palabra, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm border rounded-full text-gray-700 hover:scale-105 transition cursor-default"
            >
              <FaSearch className="text-cyan-500" aria-hidden="true" />
              <span>{palabra}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

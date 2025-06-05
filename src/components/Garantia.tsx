import Image from 'next/image';
import React from 'react';

const Garantia: React.FC = () => {
  return (
    <section
      className="py-16 px-4 max-w-2xl mx-auto text-center"
      aria-labelledby="garantia-heading"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="/image/garantia.webp"
            alt="Sello de garantía de servicio técnico"
            fill
            sizes="100px"
            className="object-contain"
            loading="lazy"
          />
        </div>

        <h3
          id="garantia-heading"
          className="text-2xl font-bold text-gray-800 leading-snug"
        >
          Garantía de hasta{" "}
          <span className="text-cyan-500">1 año</span>
        </h3>

        <p className="text-gray-600 text-base max-w-md">
          Respaldamos nuestros servicios de reparación y mantenimiento técnico
          con cobertura de garantía real. Atención garantizada sin preocupaciones.
        </p>
      </div>
    </section>
  );
};

export default Garantia;

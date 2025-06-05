"use client";

import Image from "next/image";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/18299192022?text=Hola,%20necesito%20asistencia"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      style={{
        animationDuration: "1s",
        animationIterationCount: "7", // rebota durante 7 segundos (1 rebote por segundo)
        animationFillMode: "forwards",
      }}
      aria-label="WhatsApp"
    >
      <Image
        src="/svg/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6 invert"
      />
    </a>
  );
};

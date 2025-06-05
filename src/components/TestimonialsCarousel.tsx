"use client";

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Marta",
    location: "Santo Domingo",
    text: "Pedí un técnico para mi aire y en menos de 30 minutos ya tenía la visita. Rápido, profesional y garantizado.",
    avatar: "/image/avatar/marta.webp",
    rating: 5,
  },
  {
    name: "Luis",
    location: "Santiago",
    text: "Repararon mi frigorífico industrial en el mismo día. Muy recomendados.",
    avatar: "/image/avatar/luis.webp",
    rating: 5,
  },
  {
    name: "Sara",
    location: "La Romana",
    text: "Servicio excelente. Me resolvieron el problema con la lavadora y además me asesoraron sin compromiso.",
    avatar: "/image/avatar/sara.webp",
    rating: 4,
  },
  {
    name: "Carlos",
    location: "Punta Cana",
    text: "Llamé por una urgencia con una cámara frigorífica y llegaron en menos de 1 hora. Increíble.",
    avatar: "/image/avatar/carlos.webp",
    rating: 5,
  },
];

const TestimonialsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section
      className="bg-gray-100 py-16 px-4 md:px-8"
      aria-labelledby="testimonios-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="testimonios-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        >
          Opiniones de nuestros clientes
        </h2>
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} role="listitem">
              <figure className="bg-white px-8 py-10 rounded-2xl shadow-md border border-gray-200 flex flex-col items-center gap-4 min-h-[320px] transition">
                <Image
                  src={item.avatar}
                  alt={`Foto de ${item.name} de ${item.location}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <blockquote className="text-gray-700 italic max-w-xl">
                  “{item.text}”
                </blockquote>
                <div
                  className="flex justify-center"
                  aria-label={`Calificación: ${item.rating} estrellas`}
                >
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <figcaption className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold text-gray-800">{item.name}</span>{" "}
                  <span className="hidden sm:inline">– {item.location}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

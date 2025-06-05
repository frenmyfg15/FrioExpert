"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import Head from "next/head";
import { enviarContacto } from "../../../api";

const Garantia = dynamic(() => import("@/components/Garantia"), { ssr: false });

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validarEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.nombre.trim().length < 2) {
      toast.error("El nombre debe tener al menos 2 caracteres");
      return;
    }

    if (!validarEmail(formData.email)) {
      toast.error("Correo electrónico no válido");
      return;
    }

    if (formData.mensaje.trim().length < 10) {
      toast.error("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    setLoading(true);
    try {
      await enviarContacto(formData);
      toast.success("¡Mensaje enviado con éxito!");
      setFormData({ nombre: "", email: "", mensaje: "" });
      setEnviado(true);
    } catch (err: any) {
      toast.error(err.message || "Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contacto | Servicio Técnico Profesional en República Dominicana</title>
        <meta
          name="description"
          content="Contáctanos para reparaciones de electrodomésticos, equipos de hostelería e instalaciones industriales en toda la República Dominicana."
        />
        <link rel="canonical" href="https://tusitio.com/contacto" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contacto",
              description: "Página de contacto para soporte técnico en República Dominicana",
              url: "https://tusitio.com/contacto",
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16" aria-labelledby="contacto-heading">
        <section role="region" aria-labelledby="contacto-heading">
          <h1 id="contacto-heading" className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contacto
          </h1>
          <div className="mt-16">
            <Garantia />
          </div>
          <p className="text-center text-gray-600 mb-6">
            ¿Tienes una duda, necesitas ayuda o quieres solicitar un técnico especializado?
            Escríbenos y te responderemos en minutos.
          </p>

          <div className="text-center text-sm text-gray-500 mb-12">
            También puedes llamarnos al{" "}
            <a href="tel:+18299192022" className="text-cyan-600 hover:underline">
              829 919 2022
            </a>{" "}
            o escribirnos por{" "}
            <a href="https://wa.me/18299192022" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
              WhatsApp
            </a>
            .
          </div>

          {enviado ? (
            <div className="bg-green-100 text-green-700 p-4 rounded text-center" role="status">
              ¡Gracias! Hemos recibido tu mensaje.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  aria-required="true"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  aria-required="true"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-required="true"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                aria-label="Enviar mensaje de contacto"
                className={`bg-cyan-400 text-white px-6 py-3 rounded transition hover:bg-cyan-700 hover:scale-105 focus:ring-2 focus:ring-cyan-500 focus:outline-none ${loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {loading ? (
                  <span>
                    <span className="sr-only">Enviando...</span>Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          )}
        </section>
      </main>
    </>
  );
};

export default Contacto;

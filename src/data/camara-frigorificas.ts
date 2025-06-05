import { ServicioData } from "@/types/service";

export const camarasFrigorificasData: ServicioData = {
  titulo: "Reparación de Cámaras Frigoríficas",
  descripcion:
    "Servicio técnico especializado en instalación, mantenimiento y reparación de cámaras frigoríficas para hostelería, supermercados e industria alimentaria. Trabajamos con todas las marcas y sistemas de refrigeración industrial.",
  imagen: "/image/camara-frigorifica.webp",
  trabajos: [
    {
      titulo: "Revisión de temperatura",
      descripcion: "Diagnóstico de sondas, termostatos y controladores electrónicos.",
    },
    {
      titulo: "Fugas de gas refrigerante",
      descripcion: "Detección con equipo especializado y recarga segura de gas.",
    },
    {
      titulo: "Motores o compresores averiados",
      descripcion: "Sustitución rápida con piezas originales o equivalentes de alta calidad.",
    },
    {
      titulo: "Problemas de humedad o escarcha",
      descripcion: "Revisión del aislamiento, puertas y sistemas de descongelación.",
    },
    {
      titulo: "Instalación de nuevas cámaras",
      descripcion: "Montaje completo de cámaras de conservación o congelación según normativa.",
    },
  ],
  incluye: [
    "Revisión técnica inicial",
    "Atención urgente en el día",
    "Repuestos industriales y garantía",
    "Asesoría para mejora de eficiencia energética",
    "Certificación de instalación si aplica",
  ],
  ventajas: [
    "Especialistas en frío industrial",
    "Disponibilidad 24/7 en casos urgentes",
    "Trabajamos con hostelería y supermercados",
    "Presupuestos sin compromiso",
  ],
  cobertura:
    "Atendemos en Santo Domingo, Santiago, La Romana, San Pedro, San Cristóbal, y zonas industriales cercanas.",
  consejos: [
    "No abras la puerta de la cámara durante mucho tiempo para evitar variaciones de temperatura.",
    "Haz mantenimiento cada 6 meses para prevenir fallos costosos.",
    "Verifica periódicamente que el drenaje de condensado no esté obstruido.",
    "Asegúrate de que la cámara esté bien ventilada y con espacio alrededor del motor.",
  ],
};

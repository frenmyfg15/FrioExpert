import { ServicioData } from "@/types/service";

export const reparacionPlacasElectronicasData: ServicioData = {
  titulo: "Reparación de Placas Electrónicas",
  descripcion:
    "Servicio técnico especializado en la reparación y reprogramación de placas electrónicas en equipos del hogar, comerciales, industriales y médicos. Trabajamos con tecnología SMD y THT, utilizando estaciones de soldadura profesional y pruebas funcionales controladas.",
  imagen: "/image/placas.webp",
  trabajos: [
    {
      titulo: "Electrodomésticos con tarjeta dañada",
      descripcion: "Reparación de placas en lavadoras, neveras, microondas, hornos y más.",
    },
    {
      titulo: "Placas de inversores y UPS",
      descripcion: "Corrección de fallos en circuitos de carga, inversión, y protección electrónica.",
    },
    {
      titulo: "Placas de equipos médicos",
      descripcion: "Reparación con protocolo ESD y pruebas funcionales en placas de monitores, ECG, etc.",
    },
    {
      titulo: "Main boards de TV",
      descripcion: "Solución de cortos, reemplazo de ICs, y reflow de BGA si aplica.",
    },
    {
      titulo: "Reprogramación de microcontroladores",
      descripcion: "Carga de firmware y recuperación de funciones perdidas cuando el software está dañado.",
    },
  ],
  incluye: [
    "Diagnóstico electrónico con instrumental de laboratorio",
    "Detección de cortos, fallos de componentes y pistas abiertas",
    "Reemplazo de componentes dañados (transistores, MOSFETs, ICs, etc.)",
    "Pruebas de funcionalidad después de reparación",
    "Garantía técnica según el tipo de equipo",
  ],
  ventajas: [
    "Técnicos con formación en electrónica avanzada",
    "Reparamos a nivel de componente, no solo reemplazo de placa completa",
    "Amplia experiencia en placas de todas las marcas",
    "Servicios tanto para clientes particulares como empresas",
  ],
  cobertura:
    "Servicio disponible en todo Santo Domingo, Santiago, San Cristóbal, La Vega, San Pedro y zonas industriales del país.",
  consejos: [
    "No expongas las placas a humedad o calor excesivo, pueden oxidarse o deformarse.",
    "Nunca intentes puentear componentes sin saber su función, puedes agravar el daño.",
    "Apaga los equipos cuando no se usen para evitar daños por picos de voltaje.",
    "Lleva a revisión cualquier equipo que muestre errores intermitentes: suele ser la placa.",
  ],
};

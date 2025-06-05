import { ServicioData } from "@/types/service";

export const reparacionEquiposMedicosData: ServicioData = {
  titulo: "Reparación de Equipos Médicos",
  descripcion:
    "Servicio técnico especializado en diagnóstico, mantenimiento y reparación de equipos médicos electrónicos y electromecánicos. Cumplimos con normativas sanitarias y trabajamos con clínicas, hospitales y consultorios privados.",
  imagen: "/image/equipos-medicos.webp",
  trabajos: [
    {
      titulo: "Mantenimiento preventivo",
      descripcion: "Limpieza, calibración y verificación de funcionamiento seguro y preciso.",
    },
    {
      titulo: "Fallas en monitores de signos vitales",
      descripcion: "Diagnóstico de pantalla, sensores, módulos de medición y software.",
    },
    {
      titulo: "Reparación de electrocardiógrafos",
      descripcion: "Corrección de errores de lectura, fallos en impresión o conectividad.",
    },
    {
      titulo: "Problemas en autoclaves y esterilizadores",
      descripcion: "Solución a fallos de presión, temperatura o ciclos incompletos.",
    },
    {
      titulo: "Equipos de imagen y diagnóstico",
      descripcion: "Servicio a ultrasonidos, lámparas de hendidura y otros equipos clínicos.",
    },
  ],
  incluye: [
    "Informe técnico detallado",
    "Revisión con protocolo de bioseguridad",
    "Repuestos certificados y calibración",
    "Cumplimiento de normativas sanitarias",
    "Capacitación básica al personal si aplica",
  ],
  ventajas: [
    "Técnicos formados en electromedicina",
    "Experiencia con marcas como Philips, GE, Mindray, etc.",
    "Intervenciones seguras en entornos clínicos",
    "Atención programada o urgente según necesidad",
  ],
  cobertura:
    "Ofrecemos servicio en clínicas, hospitales y centros médicos de Santo Domingo, Santiago, La Romana y zonas urbanas cercanas.",
  consejos: [
    "Programa mantenimientos preventivos cada 3 a 6 meses según el tipo de equipo.",
    "No uses extensiones múltiples en equipos sensibles.",
    "Evita mover el equipo sin protección o supervisión técnica.",
    "Verifica siempre el correcto aterrizaje eléctrico y conexión a tierra.",
  ],
};

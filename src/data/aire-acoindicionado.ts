import { ServicioData } from "@/types/service";

export const aires: ServicioData = {
  titulo: "Servicio Técnico de Aires Acondicionados",
  descripcion:
    "Nos especializamos en la instalación, mantenimiento y reparación de aires acondicionados domésticos e industriales. Brindamos soluciones eficientes, rápidas y garantizadas en toda la República Dominicana.",
  imagen: "/image/aires.webp",
  trabajos: [
    {
      titulo: "Carga de gas refrigerante",
      descripcion: "Carga de R22, R410A y R32 para aires split e industriales."
    },
    {
      titulo: "Instalación de aires",
      descripcion: "Montaje profesional de unidades split, multisplit e inverter."
    },
    {
      titulo: "Limpieza profunda",
      descripcion: "Desinfección de filtros, evaporadores y condensadores."
    },
    {
      titulo: "Revisión de fugas",
      descripcion: "Detección y reparación de fugas de gas refrigerante."
    },
    {
      titulo: "Cambio de piezas",
      descripcion: "Reemplazo de ventiladores, placas, termostatos y más."
    },
    {
      titulo: "Mantenimiento preventivo",
      descripcion: "Chequeo completo del sistema para evitar fallos en temporadas altas."
    }
  ],
  incluye: [
    "Diagnóstico técnico a domicilio",
    "Garantía escrita de hasta 1 año",
    "Repuestos originales o compatibles",
    "Cobertura en hogar, negocios y hostelería"
  ],
  ventajas: [
    "Técnicos con experiencia comprobada",
    "Asistencia urgente en el mismo día",
    "Atención personalizada y profesional",
    "Soluciones duraderas y seguras"
  ],
  cobertura: "Santo Domingo, Santiago, La Romana, Punta Cana, San Cristóbal, y más.",
  consejos: [
    "Realiza una limpieza cada 3 meses para evitar malos olores",
    "Evita usar extensiones eléctricas para conectar el aire",
    "Programa un mantenimiento antes de verano",
    "Asegúrate de no obstruir la unidad exterior"
  ]
};
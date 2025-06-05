import { ServicioData } from "@/types/service";

export const frigorificosData: ServicioData = {
  titulo: "Reparación de Frigoríficos",
  descripcion:
    "Técnicos especialistas en reparación de frigoríficos domésticos, industriales y combis. Solucionamos cualquier fallo de enfriamiento, ruido o funcionamiento anómalo, con repuestos originales y garantía.",
  imagen: "/image/frigorifico.webp",
  trabajos: [
    {
      titulo: "Frigorífico no enfría",
      descripcion: "Revisión del compresor, termostato y sistema de gas refrigerante.",
    },
    {
      titulo: "Congelador funciona pero la nevera no",
      descripcion: "Diagnóstico del ventilador interno y obstrucciones de aire.",
    },
    {
      titulo: "Acumulación de escarcha",
      descripcion: "Fallo en el sistema de descongelación automática o sensores.",
    },
    {
      titulo: "Hace ruidos extraños",
      descripcion: "Motor forzado, ventilador suelto o problemas de nivelación.",
    },
    {
      titulo: "Pérdida de agua",
      descripcion: "Fugas en la bandeja de descongelado o mangueras obstruidas.",
    },
  ],
  incluye: [
    "Diagnóstico completo en el lugar",
    "Carga de gas si se requiere",
    "Sustitución de piezas originales",
    "Garantía escrita hasta 12 meses",
    "Atención urgente sin coste adicional",
  ],
  ventajas: [
    "Intervención el mismo día",
    "Reparaciones con garantía",
    "Repuestos para todas las marcas",
    "Soporte técnico post-servicio",
  ],
  cobertura: "Damos cobertura en Santo Domingo, Santiago, Higüey, San Cristóbal, La Vega y zonas aledañas.",
  consejos: [
    "No abras la puerta del frigorífico con frecuencia si no enfría bien.",
    "Limpia la parte trasera y la rejilla del compresor al menos 2 veces al año.",
    "No lo sobrecargues, deja espacio para que el aire circule.",
    "Verifica que esté nivelado para evitar ruidos y goteos.",
  ],
};

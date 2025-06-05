import { ServicioData } from "@/types/service";

export const lavadoraData: ServicioData = {
  titulo: "Reparación de Lavadoras",
  descripcion:
    "Servicio técnico especializado en reparación de lavadoras automáticas, semi automáticas y de carga superior e inferior. Rápida atención a domicilio en todo el país.",
  imagen: "/image/lavadora.webp",
  trabajos: [
    {
      titulo: "Lavadora que no enciende",
      descripcion: "Diagnóstico y cambio de placa, cableado o sistema eléctrico.",
    },
    {
      titulo: "Fugas de agua",
      descripcion: "Sellado de juntas, revisión de mangueras y cambio de bomba si es necesario.",
    },
    {
      titulo: "No centrifuga",
      descripcion: "Revisión de la correa, motor y sistema de bloqueo de tapa.",
    },
    {
      titulo: "Hace ruido excesivo",
      descripcion: "Revisión de rodamientos, amortiguadores o tambor desbalanceado.",
    },
    {
      titulo: "Error en el panel",
      descripcion: "Diagnóstico electrónico con scanner para lavadoras digitales.",
    },
  ],
  incluye: [
    "Diagnóstico técnico especializado",
    "Repuestos originales si se requieren",
    "Garantía de hasta 1 año",
    "Servicio a domicilio el mismo día",
    "Revisión de instalación eléctrica y drenaje",
  ],
  ventajas: [
    "Atención en el mismo día",
    "Técnicos certificados",
    "Precios claros y sin sorpresas",
    "Experiencia con todas las marcas",
  ],
  cobertura: "Ofrecemos cobertura en Santo Domingo, Santiago, San Cristóbal, La Romana, Punta Cana y otras zonas urbanas.",
  consejos: [
    "Evita sobrecargar tu lavadora, reduce desgaste y fallos.",
    "Limpia el filtro cada 2 semanas para un mejor rendimiento.",
    "No uses detergente en exceso, puede dañar componentes internos.",
    "Verifica que la lavadora esté bien nivelada para evitar vibraciones.",
  ],
};

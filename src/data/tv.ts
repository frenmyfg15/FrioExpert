import { ServicioData } from "@/types/service";

export const reparacionTVData: ServicioData = {
  titulo: "Reparación de Televisores",
  descripcion:
    "Servicio técnico especializado en reparación de televisores LED, LCD, OLED y Smart TV de todas las marcas. Diagnóstico preciso, repuestos garantizados y atención rápida a domicilio o en taller.",
  imagen: "/image/tv.webp",
  trabajos: [
    {
      titulo: "Pantalla sin imagen o líneas",
      descripcion: "Diagnóstico y reparación de panel, T-Con, o retroiluminación según el tipo de TV.",
    },
    {
      titulo: "Sin sonido o sonido distorsionado",
      descripcion: "Revisión de placa de audio, conectores y bocinas internas.",
    },
    {
      titulo: "TV no enciende",
      descripcion: "Evaluación de fuente de poder, main board y condensadores defectuosos.",
    },
    {
      titulo: "Problemas con puertos HDMI o USB",
      descripcion: "Reemplazo o reparación de conectores dañados por uso o sobrecarga.",
    },
    {
      titulo: "Fallo en conexión Smart TV",
      descripcion: "Solución de errores de software, WiFi o sistema operativo.",
    },
  ],
  incluye: [
    "Diagnóstico técnico completo",
    "Presupuesto sin compromiso",
    "Reparaciones con repuestos originales o certificados",
    "Garantía escrita por cada servicio",
    "Atención a domicilio disponible",
  ],
  ventajas: [
    "Técnicos certificados en electrónica",
    "Experiencia con todas las marcas (Samsung, LG, Sony, etc.)",
    "Reparaciones rápidas y garantizadas",
    "Soporte técnico post-servicio",
  ],
  cobertura:
    "Ofrecemos servicio en Santo Domingo, Santiago, La Vega, San Cristóbal, San Pedro de Macorís y zonas aledañas.",
  consejos: [
    "No intentes abrir el televisor si no tienes conocimientos técnicos.",
    "Evita conectar el TV directamente sin protector de voltaje.",
    "Mantén limpio el entorno para evitar acumulación de polvo en ventiladores.",
    "Actualiza el firmware de tu Smart TV regularmente desde el menú de ajustes.",
  ],
};

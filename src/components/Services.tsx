// ===================== cliente/src/components/Services.tsx =====================
import React from 'react';
import Link from "next/link";
import {
  FaTools,
  FaSnowflake,
  FaFan,
  FaWarehouse,
  FaTv,
  FaHeartbeat,
  FaMicrochip,
} from "react-icons/fa";
import { Services as Service } from '@/types/service';

const services: Service[] = [
  {
    id: 1,
    name: "Lavadoras",
    slug: "lavadoras",
    icon: <FaTools size={24} />,
    description: "Reparación de lavadoras domésticas e industriales de todas las marcas",
  },
  {
    id: 2,
    name: "Frigoríficos",
    slug: "frigorificos",
    icon: <FaSnowflake size={24} />,
    description: "Técnicos en mantenimiento y reparación de frigoríficos domésticos y comerciales",
  },
  {
    id: 3,
    name: "Aires acondicionados",
    slug: "aires",
    icon: <FaFan size={24} />,
    description: "Instalación, carga de gas y reparación de aires split y centrales",
  },
  {
    id: 4,
    name: "Cámaras frigoríficas",
    slug: "camaras-frigorificas",
    icon: <FaWarehouse size={24} />,
    description: "Servicio especializado en cámaras frigoríficas para hostelería y supermercados",
  },
  {
    id: 5,
    name: "Televisores",
    slug: "televisores",
    icon: <FaTv size={24} />,
    description: "Reparación de televisores LED, LCD, OLED y Smart TV",
  },
  {
    id: 6,
    name: "Equipos médicos",
    slug: "equipos-medicos",
    icon: <FaHeartbeat size={24} />,
    description: "Diagnóstico, mantenimiento y reparación de equipos médicos electrónicos",
  },
  {
    id: 7,
    name: "Placas electrónicas",
    slug: "placas",
    icon: <FaMicrochip size={24} />,
    description: "Servicio técnico reparación de placas electrónicas de aire acondicionado, neveras, lavadoras, etc",
  },
];




const Services: React.FC = () => {
  return (
    <section className="m-5 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Servicios que ofrecemos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {services.map((service) => (
          <Link href={`/servicios/${service.slug}`} key={service.id}>
            <div className="flex flex-col items-center border rounded-lg p-6 text-center hover:shadow-md transition hover:bg-blue-50 h-full min-h-[220px]">
              <div className="mb-2 text-cyan-400">{service.icon}</div>
              <span className="text-lg font-medium text-gray-800">{service.name}</span>
              <span className="text-sm text-gray-500 mt-1">{service.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default Services;
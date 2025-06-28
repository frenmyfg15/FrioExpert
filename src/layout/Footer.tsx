import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image/logo.webp";
import Signature from "@/components/Signature";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Yireh Services Logo" width={80} height={80} className="mb-4" />
          <p className="text-sm">
            Servicio técnico en reparación, mantenimiento e instalación de aparatos del hogar e industriales en República Dominicana.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhoneAlt className="text-cyan-500" />
              <a href="tel:+18299192022">829 919 2022</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope className="text-cyan-500" />
              <a href="mailto:info@YirehService.es">info@YirehService.es</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-cyan-500" />
              República Dominicana
            </li>
          </ul>
        </div>

        {/* Información legal */}
        <div>
          <h3 className="font-semibold mb-4">Información legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacidad" className="hover:underline">Política de Privacidad</Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">Política de Cookies</Link>
            </li>
            <li>
              <Link href="/politica" className="hover:underline">Política de la Empresa</Link>
            </li>
          </ul>
        </div>

        {/* Menú + Servicios */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-8 justify-center">
          {/* Menú */}
          <div>
            <h3 className="font-semibold mb-4">Menú</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">Inicio</Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:underline">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicios/lavadoras" className="hover:underline">Lavadoras</Link></li>
              <li><Link href="/servicios/frigorificos" className="hover:underline">Frigoríficos</Link></li>
              <li><Link href="/servicios/aires" className="hover:underline">Aires Acondicionados</Link></li>
              <li><Link href="/servicios/camaras-frigorificas" className="hover:underline">Cámaras Frías</Link></li>
              <li><Link href="/servicios/tv" className="hover:underline">Televisión</Link></li>
              <li><Link href="/servicios/equipos-medicos" className="hover:underline">Equipos Médicos</Link></li>
              <li><Link href="/servicios/placas" className="hover:underline">Placas Electrónicas</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-red-400">Yireh Services.</span>  Todos los derechos reservados.
        <Signature />
      </div>
    </footer>
  );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Home,        // Para Inicio
  Info,         // Para Nosotros
  Phone,        // Para Contacto
  WashingMachine, // Para Lavadoras (no existe directamente, usaremos 'Settings' o 'Cog')
  Refrigerator, // Para Frigoríficos (no existe directamente, usaremos 'Snowflake' o 'Thermometer')
  AirVent,      // Para Aires Acondicionados
  Warehouse,    // Para Cámaras Frías (para indicar almacenamiento grande)
  Tv,           // Para Televisión
  Syringe,      // Para Equipos Médicos
  CircuitBoard, // Para Placas Electrónicas
} from "lucide-react";
import { Keania_One } from "next/font/google";
import Image from "next/image";

export const keania = Keania_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-keania",
});

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isInicio = pathname === "/inicio";

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={'sticky top-0 z-50 transition-all duration-300 shadow-sm bg-black'}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/inicio" className="flex items-center gap-3" onClick={handleLinkClick}>
          <Image src={'/image/logo.webp'} alt="Logo de la empresa Yireh Service RD" width={50} height={50}/>
          <span className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-wide ${keania.className}`}>
            <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
              Yireh{" "}
            </span>
            <span className="text-cyan-400">Service</span>
          </span>
        </Link>

        {/* Menú en escritorio */}
        <nav className="hidden md:flex space-x-8 items-center text-base font-medium">
          <Link href="/inicio" className={'text-white hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl'}>Inicio</Link>

          {/* Botón Servicios con toggle por clic */}
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen(prev => !prev)}
              className={`text-white hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl focus:outline-none cursor-pointer`}
            >
              Servicios
            </button>
          </div>

          <Link href="/nosotros" className={'text-white hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl'}>Nosotros</Link>
          <Link href="/contacto" className={`bg-cyan-400 p-2 rounded-2xl shadow-md text-white font-bold hover:scale-110 hover:bg-cyan-700 transition`}>Contacto</Link>
        </nav>

        {/* Botón móvil */}
        <button
          className={`md:hidden focus:outline-none ${isInicio ? "text-white" : "text-gray-800"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} className="text-white"/> : <Menu size={26} className="text-white"/>}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 ${menuOpen ? 'right-0' : '-right-full'} h-screen w-1/2 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out transform`}
        style={{ zIndex: 1000 }} // Asegura que esté por encima de todo
      >
        <div className="flex justify-end p-6">
          <button
            className="focus:outline-none text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-6 text-gray-800">
          <Link href="/inicio" className="flex items-center gap-3 py-2 font-medium text-lg hover:text-cyan-500 transition-colors" onClick={handleLinkClick}>
            <Home size={22} /> Inicio
          </Link>
          <div>
            <span className="flex items-center gap-3 font-semibold mb-3 text-lg">Servicios</span>
            <ul className="space-y-4 pl-4 text-base">
              <li><Link href="/servicios/lavadoras" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><WashingMachine size={20} /> Lavadoras</Link></li>
              <li><Link href="/servicios/frigorificos" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><Refrigerator size={20} /> Frigoríficos</Link></li>
              <li><Link href="/servicios/aires" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><AirVent size={20} /> Aires</Link></li>
              <li><Link href="/servicios/camaras-frigorificas" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><Warehouse size={20} /> Cámaras Frías</Link></li>
              <li><Link href="/servicios/tv" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><Tv size={20} /> Televisión</Link></li>
              <li><Link href="/servicios/equipos-medicos" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><Syringe size={20} /> Equipos Médicos</Link></li>
              <li><Link href="/servicios/placas" className="flex items-center gap-3 hover:text-cyan-500 transition-colors" onClick={handleLinkClick}><CircuitBoard size={20} /> Placas Electrónicas</Link></li>
            </ul>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <Link href="/nosotros" className="flex items-center gap-3 py-2 font-medium text-lg hover:text-cyan-500 transition-colors" onClick={handleLinkClick}>
              <Info size={22} /> Nosotros
            </Link>
            <Link href="/contacto" className="flex items-center gap-3 py-2 font-medium text-lg hover:text-cyan-500 transition-colors" onClick={handleLinkClick}>
              <Phone size={22} /> Contacto
            </Link>
          </div>
        </nav>
      </div>

      {/* Submenú horizontal con transición */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 right-0 top-full z-40 bg-white shadow-md overflow-hidden transform transition-all duration-300 origin-top
    ${dropdownOpen
            ? "scale-y-100 opacity-100 visible pointer-events-auto"
            : "scale-y-0 opacity-0 invisible pointer-events-none"
          }
    hidden md:block`}
      >
        <ul className="flex justify-around max-w-6xl mx-auto text-sm font-medium text-gray-700 py-4">
          <li className="cursor-pointer"><Link href="/servicios/lavadoras" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Lavadoras</Link></li>
          <li><Link href="/servicios/frigorificos" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Frigoríficos</Link></li>
          <li><Link href="/servicios/aires" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Aires Acondicionados</Link></li>
          <li><Link href="/servicios/camaras-frigorificas" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Cámaras Frías</Link></li>
          <li><Link href="/servicios/tv" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Televisión</Link></li>
          <li><Link href="/servicios/equipos-medicos" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Equipos Médicos</Link></li>
          <li><Link href="/servicios/placas" onClick={handleLinkClick} className="hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl cursor-pointer">Placas Electrónicas</Link></li>
        </ul>
      </div>
    </header>
  );
};
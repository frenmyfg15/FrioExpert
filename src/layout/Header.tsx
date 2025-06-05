"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Keania_One } from "next/font/google";

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
  const headerClasses = `sticky top-0 z-50 transition-all duration-300 shadow-sm relative ${isInicio ? "bg-black" : "bg-white"
    }`;

  const linkStyle = isInicio
    ? "text-white hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl"
    : "text-gray-800 hover:bg-cyan-400 p-2 rounded-xsl rounded-2xl";

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
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/inicio" className="flex items-center" onClick={handleLinkClick}>
          <span className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-wide ${keania.className}`}>
            <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
              SERVICIO{" "}
            </span>
            <span className="text-cyan-400">TÉCNICO</span>
          </span>
        </Link>



        {/* Menú en escritorio */}
        <nav className="hidden md:flex space-x-8 items-center text-base font-medium">
          <Link href="/inicio" className={linkStyle}>Inicio</Link>

          {/* Botón Servicios con toggle por clic */}
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen(prev => !prev)}
              className={`${linkStyle} focus:outline-none cursor-pointer`}
            >
              Servicios
            </button>
          </div>

          <Link href="/nosotros" className={linkStyle}>Nosotros</Link>
          <Link href="/contacto" className={`bg-cyan-400 p-2 rounded-2xl shadow-md text-white font-bold hover:scale-110 hover:bg-cyan-700 transition`}>Contacto</Link>
        </nav>

        {/* Botón móvil */}
        <button
          className={`md:hidden focus:outline-none ${isInicio ? "text-white" : "text-gray-800"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 space-y-4 text-gray-800">
          <Link href="/inicio" className="block py-2 font-medium" onClick={handleLinkClick}>Inicio</Link>
          <div>
            <span className="block font-semibold mb-2">Servicios</span>
            <ul className="space-y-2 pl-2 text-sm">
              <li><Link href="/servicios/lavadoras" onClick={handleLinkClick}>Lavadoras</Link></li>
              <li><Link href="/servicios/frigorificos" onClick={handleLinkClick}>Frigoríficos</Link></li>
              <li><Link href="/servicios/aires" onClick={handleLinkClick}>Aires Acondicionados</Link></li>
              <li><Link href="/servicios/camaras-frigorificas" onClick={handleLinkClick}>Cámaras Frías</Link></li>
              <li><Link href="/servicios/tv" onClick={handleLinkClick}>Televisión</Link></li>
              <li><Link href="/servicios/equipos-medicos" onClick={handleLinkClick}>Equipos Médicos</Link></li>
              <li><Link href="/servicios/placas" onClick={handleLinkClick}>Placas Electrónicas</Link></li>
            </ul>
          </div>
          <div className="pt-4 border-t">
            <Link href="/nosotros" className="block py-2" onClick={handleLinkClick}>Nosotros</Link>
            <Link href="/contacto" className="block py-2" onClick={handleLinkClick}>Contacto</Link>
          </div>
        </div>
      )}

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

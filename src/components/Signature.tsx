import Image from "next/image";
import { Globe, Linkedin, Github } from "lucide-react";

export default function Signature() {
  return (
    <footer className="w-full py-6 px-4  text-sm text-neutral-500 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo + Nombre */}
        <div className="flex items-center">
          <span className="text-neutral-500 font-medium">Creado por Frenmy García</span>
        </div>

        {/* Enlaces con íconos */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.desarrolladorsitioweb.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-cyan-600 transition-colors"
          >
            <Globe size={16} /> Página Web
          </a>
          <a
            href="https://www.linkedin.com/in/frenmy-garc%C3%ADa-babaa817b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-cyan-600 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/frenmyfg15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-cyan-600 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

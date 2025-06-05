export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export type Services = {
  id: number
  name: string;
  slug: string;
  icon: React.ReactNode;
  description: string;
};

export type ServicioData = {
  titulo: string;
  descripcion: string;
  imagen: string;
  trabajos: {
    titulo: string;
    descripcion: string;
  }[];
  incluye: string[];
  ventajas: string[];
  cobertura: string;
  consejos: string[];
};

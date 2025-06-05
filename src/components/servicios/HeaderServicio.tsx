import Image from "next/image";

interface Props {
  titulo: string;
  imagen: string;
}

const HeaderServicio = ({ titulo, imagen }: Props) => {
  return (
    <div className="relative w-full h-[300px] lg:h-[500px] rounded-2xl overflow-hidden px-4 mt-5">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover shadow-md"
          loading="lazy"
          sizes="100vw"
          placeholder="empty" // puedes cambiar a "blur" si usas blurDataURL
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4 text-center">
          <div className="p-6 rounded-xl max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {titulo}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderServicio;

interface Trabajo {
  titulo: string;
  descripcion: string;
}

const TrabajosServicio = ({ trabajos }: { trabajos: Trabajo[] }) => {
  return (
    <div className="px-6 mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Trabajos más comunes</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trabajos.map((trabajo, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg shadow flex items-start gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-1">{trabajo.titulo}</h4>
              <p className="text-gray-600 text-sm">{trabajo.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrabajosServicio;

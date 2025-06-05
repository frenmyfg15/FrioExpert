import { FaLightbulb } from "react-icons/fa";

const ConsejosServicio = ({ consejos }: { consejos: string[] }) => {
  if (!consejos || consejos.length === 0) return null;

  return (
    <div className="px-6 mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Consejos útiles</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {consejos.map((tip, i) => (
          <div key={i} className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow flex gap-3 items-start">
            <FaLightbulb className="text-yellow-500 text-2xl mt-1" />
            <p className="text-gray-700 text-sm">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsejosServicio;

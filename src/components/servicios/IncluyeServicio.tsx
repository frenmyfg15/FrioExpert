import { FaCheckCircle } from "react-icons/fa";

const IncluyeServicio = ({ items }: { items: string[] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="px-6 mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué incluye el servicio?</h2>
      <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncluyeServicio;

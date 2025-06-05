"use client";

import React, { useState } from 'react';
import { enviarLlamada } from '../../api';
import toast from 'react-hot-toast';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CallModal: React.FC<Props> = ({ open, onClose }) => {
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('Fontaneros');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    if (!/^[6789]\d{8}$/.test(telefono)) {
      toast.error('El número debe tener 9 dígitos y comenzar por 6, 7, 8 o 9');
      return;
    }
    e.preventDefault();
    setLoading(true);
    try {
      await enviarLlamada({ telefono, servicio });
      toast.success('¡Solicitud enviada con éxito!');
      setTelefono('');
      setServicio('Fontaneros');
      onClose();
    } catch (err: any) {
      toast.error(err.message || 'Error al enviar la solicitud');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Te llamamos</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="tel"
            value={telefono}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // solo números
              setTelefono(value);
            }}
            placeholder="Tu número de teléfono"
            required
            maxLength={9}
            pattern="^[6789]\d{8}$"
            className="border p-2 rounded"
          />
          <select
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            className="border p-2 rounded"
          >
            <option>Fontaneros</option>
            <option>Electricistas</option>
            <option>Pintores</option>
            <option>Albañiles</option>
            <option>Carpinteros</option>
            <option>Cerrajeros</option>
            <option>Reparación de electrodomésticos</option>
            <option>Mudanzas / Montaje</option>
            <option>Limpiezas</option>
            <option>Jardineros</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallModal;

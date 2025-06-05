import axios from 'axios';
interface ContactoData {
  nombre: string;
  email: string;
  mensaje: string;
}

const API_BASE ='https://oficiosya-backend-production.up.railway.app/api';

export const enviarContacto = async (data: ContactoData) => {
  try {
    const res = await axios.post(`${API_BASE}/contacto`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Error al enviar el mensaje de contacto');
  }
};


export const enviarLlamada = async (data: any) => {
  try {
    const res = await axios.post(`${API_BASE}/llamadas`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Error al enviar la solicitud de llamada');
  }
};

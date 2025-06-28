import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import "@/app/globals.css";
import CookiesBanner from "@/components/CookiesBanner";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});


export const metadata = {
  title: "Yireh Service | Servicio Técnico de Electrodomésticos",
  description: "Reparación profesional de aires, lavadoras, frigoríficos y más en RD.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookiesBanner/>
      </body>
    </html>
  );
}

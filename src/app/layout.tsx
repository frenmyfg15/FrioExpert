import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Poppins } from 'next/font/google';
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});


export const metadata = {
  title: "FrioExpert RD | Servicio Técnico de Electrodomésticos",
  description: "Reparación profesional de aires, lavadoras, frigoríficos y más en RD.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

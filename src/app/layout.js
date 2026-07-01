import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: 'swap' });

export const metadata = {
  title: "Compra y Venta de Oro y Plata en Bogotá | Mejor Precio",
  description: "Compra y venta de oro y plata en Bogotá con el mejor precio del mercado. Pago inmediato y seguro. Tasa de cambio en vivo. Visítanos en Av. Cra. 91 #136-12, Suba, Bogotá.",
  keywords: ["oro", "plata", "bogota", "compra de oro bogota", "venta de oro bogota", "precio del oro bogota"],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

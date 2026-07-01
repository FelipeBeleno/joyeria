import { Inter, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ['400', '600', '700'], variable: "--font-cormorant", display: 'swap' });

export const metadata = {
  title: "925 Expertos en Joyas de Plata",
  description: "925 Expertos en Joyas de Plata. El amor se convierte en joya, sorprende a quienes más amas en cualquier ocasión especial.",
  keywords: ["joyas", "plata", "925", "plata 925", "joyeria bogota", "anillos de plata"],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

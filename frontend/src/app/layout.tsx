import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{siteConfig.name}</title>
      </head>
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductBar from "@/components/ProductBar";

export const metadata = {
  title: "Apple",
  description: "A clone of Apple product website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ProductBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

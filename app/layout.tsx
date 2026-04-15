import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EcoTech Reviews Europe",
  description:
    "Honest eco-tech reviews, comparisons, and guides for UK & Germany.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen max-w-5xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

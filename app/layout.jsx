import "./globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

export const metadata = {
  title: "FOL.AI | Asistent AI per klinika dhe restorante",
  description:
    "FOL.AI automatizon bisedat me klientet ne Instagram, Facebook dhe WhatsApp, regjistron rezervimet ne Google Sheets dhe njofton biznesin me email ose WhatsApp."
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body className="bg-[#0b0b0c] text-white antialiased">{children}</body>
    </html>
  );
}

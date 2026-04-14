import "./globals.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

export const metadata = {
  title: "FOL.AI | AI booking agent per klinika dhe restorante",
  description:
    "FOL.AI automatizon bisedat me klientet ne Instagram, Facebook dhe WhatsApp, regjistron rezervimet ne Google Sheets ose Docs dhe njofton biznesin me email ose WhatsApp."
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}

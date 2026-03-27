import "./globals.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

export const metadata = {
  title: "FOL.AI | Asistenti inteligjent për rezervime dhe komunikim",
  description:
    "FOL.AI automatizon komunikimin me klientët, rezervimet dhe orarin për klinika, restorante, sallone dhe biznese shërbimi."
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}

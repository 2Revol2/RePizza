import { Nunito } from "next/font/google";
import "./styles/global.css";
import "./styles/themes/normal.scss";

const nunito = Nunito({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}

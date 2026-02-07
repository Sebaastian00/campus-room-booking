import "./globals.css";
import { TopNav } from "../components/TopNav";

export const metadata = {
  title: "Campus Room Booking",
  description: "System rezerwacji sal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}

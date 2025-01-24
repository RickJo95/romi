import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Romi",
  description: "Hecho con mucho amor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

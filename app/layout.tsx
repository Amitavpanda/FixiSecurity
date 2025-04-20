import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fixi Security",
  description: "Fixi Security is a cybersecurity company that provides top-notch security solutions to safeguard your digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}

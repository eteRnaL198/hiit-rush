"use client";

import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <title>HIIT Rush</title>
      <meta
        name="description"
        content="HIIT Rush is a high-intensity interval training app."
      />
      <body className="min-h-dvh">
        <Header />
        {children}
      </body>
    </html>
  );
}

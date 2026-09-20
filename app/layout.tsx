import React from 'react';
import type { Metadata } from 'next';
import './globals.css'; // <-- INI BARIS KUNCI YANG SEBELUMNYA HILANG

export const metadata: Metadata = {
  title: 'Andhika Rievaldy - Portfolio',
  description: 'Marketing Communication Specialist Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#E2E8F0] antialiased">{children}</body>
    </html>
  );
}

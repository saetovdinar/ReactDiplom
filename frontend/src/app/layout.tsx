'use client';
import { Providers } from "@redux/provider/provider";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Providers>    
  );
}

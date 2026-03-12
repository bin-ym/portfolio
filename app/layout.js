// app/layout.js
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
// app/layout.js
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange // Optional: prevents flash
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
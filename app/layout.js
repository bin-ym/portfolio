// app/layout.js
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import "./globals.css"; // If you have global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
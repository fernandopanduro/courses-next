import { ConfettiProvider } from "@/components/providers/confetti-provider";
import ToasterProvider from "@/components/providers/toaster-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courses | Fernando Panduro",
  description: "Courses by Fernando Panduro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <body className={inter.className}>
            <ConfettiProvider />
            <ToasterProvider />
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}

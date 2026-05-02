import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saldanha Ltda.",
  description: "Saldanha Ltda. é uma empresa de desenvolvimento de software que oferece soluções personalizadas para empresas de todos os tamanhos. Com uma equipe de especialistas em tecnologia, a Saldanha Ltda. se dedica a criar aplicativos, sistemas e plataformas que atendam às necessidades específicas de seus clientes, impulsionando o crescimento e a inovação dos negócios.",
	icons: {
		icon: "/assets/favicon.png",
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

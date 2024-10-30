import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider/theme-provider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";
// import Chatbot from './components/Chatbot'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoRecomenda",
  description: "Sistema de recomendação de oficinas automotivas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}

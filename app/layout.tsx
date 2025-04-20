import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SoccerRent - Saha Kiralama Platformu",
  description: "Futbol saha kiralama ve ortak oyuncu bulma platformu",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col">
              <div className="flex flex-col max-w-7xl w-full mx-auto p-5">
                {children}
              </div>
              <footer className="w-full flex items-center justify-center border-t text-center text-xs gap-4 py-8">
                <p>© 2024 SoccerRent - Tüm Hakları Saklıdır</p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

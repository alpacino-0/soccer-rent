// components/layout/header.tsx
'use client'; // Etkileşimli öğeler için client component

import Link from 'next/link';
import { useState } from 'react'; // Mobil menü durumu için
import { Menu, X, Sun, Moon, User, LogIn, UserPlus } from 'lucide-react'; // İkonlar
import { useTheme } from 'next-themes'; // Tema için (kurulum gerektirir)

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Oturum açıldığında gösterilebilir

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme(); // Gerçek tema yönetimi için

  // --- Placeholder: Gerçek Auth Durumu Buraya Gelecek ---
  const isLoggedIn = false; // Burayı Supabase auth durumu ile değiştirin
  const userName = 'Ali Veli'; // Oturum açmış kullanıcı adı
  // --- Placeholder Sonu ---

  const navItems = [
    { name: 'Sahalar', href: '/venues' },
    { name: 'Odalar', href: '/rooms' },
    { name: 'Meydan Okumalar', href: '/challenges' },
    { name: 'Hakkında', href: '/about' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Sol Taraf: Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* <SoccerBall className="h-6 w-6" />  // Örnek bir ikon */}
          <span className="font-bold sm:inline-block">SoccerRent</span>
        </Link>

        {/* Orta: Masaüstü Navigasyon */}
        <NavigationMenu className="hidden md:flex flex-1">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sağ Taraf: Tema, Kullanıcı ve Mobil Menü Tetiği */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          {/* Tema Değiştirme Butonu */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Temayı Değiştir">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Kullanıcı Menüsü (Auth Durumuna Göre) */}
          <div className="hidden md:flex items-center space-x-2">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt={userName} />
                      <AvatarFallback>{userName?.charAt(0).toUpperCase() ?? 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userName}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Çıkış Yap</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/sign-in">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Giriş Yap</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Kayıt Ol</span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobil Menü Tetiği */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menüyü Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-bold">SoccerRent</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              {/* Mobil Auth Butonları */}
              <div className="mt-auto pt-6 flex flex-col space-y-2">
                 {isLoggedIn ? (
                    <Button variant="outline">
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Çıkış Yap</span>
                    </Button>
                 ) : (
                   <>
                     <Button variant="outline" asChild>
                       <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                          <LogIn className="mr-2 h-4 w-4" />
                          <span>Giriş Yap</span>
                       </Link>
                     </Button>
                     <Button asChild>
                       <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Kayıt Ol</span>
                       </Link>
                     </Button>
                   </>
                 )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Opsiyonel: Futbol topu ikonu (SVG veya Lucide'dan uygun bir ikon)
// function SoccerBall(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg /* SVG Kodu */ {...props}>
//       {/* ... paths ... */}
//     </svg>
//   );
// }
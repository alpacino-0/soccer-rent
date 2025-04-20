// components/layout/header.tsx
'use client'; // Etkileşimli öğeler için client component

import Link from 'next/link';
import { useState, useEffect } from 'react'; // Mobil menü durumu ve scroll için
import { Menu, X, Sun, Moon, User, LogIn, UserPlus, Search, MapPin, Instagram, Twitter, Facebook } from 'lucide-react'; // İkonlar
import { useTheme } from 'next-themes'; // Tema için (kurulum gerektirir)
import { cn } from '@/lib/utils'; // Sınıf adlarını birleştirmek için (shadcn/ui'dan gelen)

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
  SheetFooter,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Oturum açıldığında gösterilebilir

// Kullanıcı seviye tipini tanımlama
type UserLevel = 'bronze' | 'silver' | 'gold' | 'legendary';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme(); // Gerçek tema yönetimi için

  // Scroll durumunu takip et
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // --- Placeholder: Gerçek Auth Durumu Buraya Gelecek ---
  const isLoggedIn = false; // Burayı Supabase auth durumu ile değiştirin
  const userName = 'Ali Veli'; // Oturum açmış kullanıcı adı
  const userLevel: UserLevel = 'bronze'; // Kullanıcı seviyesi
  // --- Placeholder Sonu ---

  const navItems = [
    { name: 'Sahalar', href: '/venues', icon: <MapPin className="mr-2 h-4 w-4" /> },
    { name: 'Odalar', href: '/rooms', icon: <User className="mr-2 h-4 w-4" /> },
    { name: 'Meydan Okumalar', href: '/challenges', icon: <Search className="mr-2 h-4 w-4" /> },
    { name: 'Hakkında', href: '/about', icon: null },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-yellow-500 hover:text-white' },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, color: 'hover:bg-blue-400 hover:text-white' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, color: 'hover:bg-blue-600 hover:text-white' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Kullanıcı seviyesine göre avatar stili
  const getUserLevelStyles = () => {
    const levelStyles: Record<UserLevel, string> = {
      bronze: 'ring-amber-700 dark:ring-amber-600',
      silver: 'ring-gray-400 dark:ring-gray-300',
      gold: 'ring-yellow-400 dark:ring-yellow-300',
      legendary: 'ring-purple-600 dark:ring-purple-400'
    };
    
    return levelStyles[userLevel] || 'ring-primary';
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
      scrolled && "shadow-md"
    )}>
      <div className="container flex h-16 items-center">
        {/* Sol Taraf: Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-xs">SR</span>
          </div>
          <span className="font-bold text-lg sm:inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SoccerRent</span>
        </Link>

        {/* Orta: Masaüstü Navigasyon */}
        <NavigationMenu className="hidden md:flex flex-1 justify-center">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link 
                  href={item.href} 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium transition-colors hover:text-primary"
                  )}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.name}
                  </span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sağ Taraf: Tema, Kullanıcı ve Mobil Menü Tetiği */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          {/* Tema Değiştirme Butonu */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Temayı Değiştir"
            className="rounded-full hover:bg-primary/10"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-secondary" />
          </Button>

          {/* Kullanıcı Menüsü (Auth Durumuna Göre) */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                    <Avatar className={cn("h-10 w-10 ring-2", getUserLevelStyles())}>
                      <AvatarImage src="/avatars/01.png" alt={userName} />
                      <AvatarFallback className="bg-primary text-primary-foreground">{userName?.charAt(0).toUpperCase() ?? 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold">{userName}</p>
                      <p className="text-xs text-muted-foreground capitalize">{userLevel} Seviye</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4 text-primary" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <span>Rezervasyonlarım</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <LogIn className="mr-2 h-4 w-4 text-destructive" />
                    <span className="text-destructive">Çıkış Yap</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild className="h-9 px-4 font-medium">
                  <Link href="/sign-in">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Giriş Yap</span>
                  </Link>
                </Button>
                <Button size="sm" asChild className="h-9 px-4 font-medium bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
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
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menüyü Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-r border-border">
              <SheetHeader className="pb-4 border-b">
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SR</span>
                    </div>
                    <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SoccerRent</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Tema Değiştirme Butonu - Mobil */}
              <div className="mt-6 pt-6 border-t">
                <Button 
                  variant="outline" 
                  onClick={toggleTheme} 
                  className="w-full justify-start"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Aydınlık Moda Geç</span>
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4 text-secondary" />
                      <span>Karanlık Moda Geç</span>
                    </>
                  )}
                </Button>
              </div>
              
              {/* Mobil Auth Butonları */}
              <div className="flex-1 mt-6 pt-6 border-t flex flex-col space-y-3">
                 {isLoggedIn ? (
                    <>
                      <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted">
                        <Avatar className={cn("h-10 w-10 ring-2", getUserLevelStyles())}>
                          <AvatarImage src="/avatars/01.png" alt={userName} />
                          <AvatarFallback className="bg-primary text-primary-foreground">{userName?.charAt(0).toUpperCase() ?? 'U'}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold">{userName}</p>
                          <p className="text-xs text-muted-foreground capitalize">{userLevel} Seviye</p>
                        </div>
                      </div>
                      <Button variant="outline" className="justify-start">
                        <User className="mr-2 h-4 w-4 text-primary" />
                        <span>Profil</span>
                      </Button>
                      <Button variant="outline" className="justify-start text-destructive border-destructive/30">
                        <LogIn className="mr-2 h-4 w-4" />
                        <span>Çıkış Yap</span>
                      </Button>
                    </>
                 ) : (
                   <>
                     <Button variant="outline" asChild className="font-medium">
                       <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                          <LogIn className="mr-2 h-4 w-4" />
                          <span>Giriş Yap</span>
                       </Link>
                     </Button>
                     <Button asChild className="font-medium bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                       <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Kayıt Ol</span>
                       </Link>
                     </Button>
                   </>
                 )}
              </div>
              
              {/* Footer - Sosyal Medya */}
              <SheetFooter className="mt-auto pt-4 border-t flex-col items-start">
                <p className="text-sm font-medium mb-3">Bizi Takip Edin</p>
                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <Button 
                      key={social.name} 
                      variant="outline" 
                      size="icon" 
                      asChild
                      className={cn("rounded-full transition-colors", social.color)}
                    >
                      <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} Soccer Rent</p>
              </SheetFooter>
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
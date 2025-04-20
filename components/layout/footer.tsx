    // components/layout/footer.tsx
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail, Phone, ExternalLink } from 'lucide-react'; // Sosyal medya ve iletişim ikonları
import { Separator } from '@/components/ui/separator'; // Ayırıcı çizgi için
import { Button } from '@/components/ui/button'; // Sosyal medya ikon butonları için
import { cn } from '@/lib/utils'; // Sınıf adlarını birleştirmek için

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'SSS', href: '/faq' },
  ];

  const accountLinks = [
    { name: 'Giriş', href: '/sign-in' }, // Header ile uyumlu path
    { name: 'Kayıt', href: '/sign-up' }, // Header ile uyumlu path
    { name: 'Profil', href: '/profile' },
    { name: 'Ayarlar', href: '/settings' },
  ];

  const contactInfo = [
    { 
      name: 'E-posta: info@soccerrent.com', 
      href: 'mailto:info@soccerrent.com',
      icon: <Mail className="h-4 w-4 mr-2 text-primary" /> 
    },
    { 
      name: 'Telefon: +90 555 123 4567', 
      href: 'tel:+905551234567',
      icon: <Phone className="h-4 w-4 mr-2 text-primary" /> 
    },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-yellow-500 hover:text-white' },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, color: 'hover:bg-blue-400 hover:text-white' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, color: 'hover:bg-blue-600 hover:text-white' },
  ];

  return (
    <footer className="bg-muted/30 border-t text-foreground/80">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* 1. Sütun: Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xs">SR</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SoccerRent</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              Halı saha kiralamanın ve takım bulmanın en kolay yolu. FIFA tarzı profil kartlarınızla maçlarınızı organize edin, yeni insanlarla tanışın ve futbol tutkusunu birlikte yaşayın.
            </p>
            {/* Sosyal Medya İkonları (Mobil için burada) */}
            <div className="mt-6 flex space-x-3 lg:hidden">
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
          </div>

          {/* 2. Sütun: Platform Linkleri */}
          <div>
            <p className="mb-4 font-semibold text-lg">Platform</p>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sütun: Hesap Linkleri */}
          <div>
            <p className="mb-4 font-semibold text-lg">Hesap</p>
            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Sütun: İletişim ve Sosyal Medya */}
          <div>
            <p className="mb-4 font-semibold text-lg">İletişim</p>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.name}>
                  <Link 
                    href={info.href} 
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    {info.icon}
                    <span>{info.name.split(': ')[1]}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* Sosyal Medya (Masaüstü için burada) */}
            <div className="mt-6 hidden space-x-3 lg:flex">
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
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        {/* Alt Kısım: Telif Hakkı */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Soccer Rent. Tüm hakları saklıdır.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link 
              href="/privacy-policy" 
              className="hover:text-primary transition-colors flex items-center"
            >
              Gizlilik Politikası
            </Link>
            <Link 
              href="/terms-of-service" 
              className="hover:text-primary transition-colors flex items-center"
            >
              Kullanım Koşulları
            </Link>
            <Link 
              href="https://github.com/username/soccer-rent" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
# Soccer Rent - Anasayfa Tasarım Dokümantasyonu

Bu dokümantasyon, Soccer Rent projesinin anasayfa (app/page.tsx) tasarımı ve implementasyonunu detaylı olarak tanımlamaktadır. Proje, futbol sahası kiralama ve takım eşleşme platformu olarak tasarlanmış, Next.js, TypeScript, Shadcn UI ve Supabase teknolojileriyle hayata geçirilmektedir.

## 📋 Anasayfa Genel Bakış

Anasayfa, kullanıcıların Soccer Rent platformuna ilk giriş noktası olacaktır. Kullanıcı deneyimini en üst düzeye çıkarmak için aşağıdaki amaçlara hizmet edecek şekilde tasarlanmalıdır:

1. **Platformun Ana Değerini Vurgulamak**: Kullanıcılar hızlıca futbol sahası kiralama ve takım eşleştirme özelliklerini anlamalı
2. **Görsel Çekicilik**: Spor temalı görsel elementlerle dikkat çekmeli
3. **Hızlı Erişim**: Popüler sahalara, aktif odalara ve kişiselleştirilmiş içeriğe hızlı erişim sağlamalı
4. **Kullanıcı Dostu Navigasyon**: Sezgisel ve kullanımı kolay bir navigasyon sunmalı
5. **Mobil Uyumluluk**: Tüm ekran boyutlarında kusursuz çalışmalı

## 🧱 Bileşen Yapısı

Anasayfa şu ana bileşenlerden oluşacaktır:

```
app/page.tsx
├── <Header /> // Sitinin üst bilgi çubuğu, navigasyon ve kullanıcı menüsü
├── <HeroSection /> // Ana tanıtım bölümü, CTA butonları
├── <FeaturedVenues /> // Öne çıkan halı sahalar
├── <ActiveRooms /> // Aktif odalar, katılım bekleyen maçlar
├── <HowItWorks /> // Platform kullanım adımları
├── <Testimonials /> // Kullanıcı görüşleri
├── <CTASection /> // Kayıt olma çağrısı
└── <Footer /> // Alt bilgi ve linkler
```

## 🎨 Tasarım Detayları

### 1. Header Bileşeni
- Logo (sol)
- Navigasyon menüsü (orta):
  - Sahalar
  - Odalar
  - Meydan Okumalar
  - Hakkında
- Kullanıcı menüsü (sağ):
  - Giriş/Kayıt butonları (oturum açılmamışsa)
  - Profil, Bildirimler, Çıkış (oturum açılmışsa)
- Tema değiştirme butonu (karanlık/açık mod)
- Responsive tasarım: Mobil görünümde hamburger menü

### 2. HeroSection Bileşeni
- Arka planda futbol sahası görseli (overlay ile şeffaflaştırılmış)
- Ana başlık: "Halı Saha Kiralama & Takım Eşleşme Platformu"
- Alt başlık: "Tek tıkla saha rezervasyonu yapın, takım bulun, maçlarınızı organize edin"
- CTA Butonları:
  - "Saha Bul" (birincil aksiyon)
  - "Takım Bul" (ikincil aksiyon)
- Animasyonlu FIFA tarzı oyuncu kartı (Framer Motion ile)

### 3. FeaturedVenues Bileşeni
- Başlık: "Popüler Sahalar"
- Sıralanabilir/filtrelenebilir kaydırılabilir kartlar:
  - Saha görseli
  - Saha adı
  - Konum (mesafe bilgisi)
  - Fiyat (saatlik)
  - Puan (yıldız sistemi)
  - Müsaitlik durumu
- "Tüm Sahaları Gör" butonu
- Otomatik kaydırma veya manuel ok kontrolleri

### 4. ActiveRooms Bileşeni
- Başlık: "Katılım Bekleyen Maçlar"
- Maç odası kartları:
  - Başlık (örn. "Salı Akşamı Maçı")
  - Yer ve saat bilgisi
  - Mevcut oyuncu sayısı/toplam kapasite
  - İhtiyaç duyulan pozisyonlar (ikon ve sayı)
  - "Katıl" butonu
- Gerçek zamanlı güncellenen doluluk göstergeleri (Supabase Realtime)
- "Tüm Odaları Gör" butonu

### 5. HowItWorks Bileşeni
- Başlık: "Nasıl Çalışır?"
- Adım adım görsel açıklamalar (numaralandırılmış):
  1. "Hesap Oluştur" - FIFA kartı tarzı profil oluşturma görseli
  2. "Saha Seç" - Takvim ve saha seçimi görseli
  3. "Rezervasyon Yap" - Ödeme ve onay görseli
  4. "Takım Bul / Oluştur" - Oda sistemi görseli
- Her adım için kısa açıklayıcı metinler
- Animasyonlu ikonlar

### 6. Testimonials Bileşeni
- Başlık: "Kullanıcılarımız Ne Diyor?"
- Kaydırılabilir kullanıcı değerlendirmeleri:
  - Kullanıcı profil resmi
  - İsim
  - Yorum
  - Puan
  - Tarih
- Otomatik kaydırmalı karüsel

### 7. CTASection Bileşeni
- Arka plan: Karşılaşma gösteren futbol sahası görseli
- Başlık: "Hemen Katılın, Oynamaya Başlayın"
- Alt başlık: "1000+ aktif oyuncu, 50+ halı saha, haftalık 200+ maç"
- Büyük "Ücretsiz Kaydol" butonu
- Küçük "Daha Fazla Bilgi" linki/butonu

### 8. Footer Bileşeni
- Logo
- Link kategorileri:
  - Platform: Anasayfa, Hakkımızda, Blog, SSS
  - Hesap: Giriş, Kayıt, Profil, Ayarlar
  - İletişim: E-posta, Telefon, Adres
  - Sosyal Medya: Instagram, Twitter, Facebook
- Telif hakkı ve yasal bilgiler

## 💻 Teknik İmplementasyon

### Next.js Server Component İmplementasyonu

```tsx
// app/page.tsx
import { Suspense } from "react";

// Layout Bileşenleri
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Anasayfa Bileşenleri
import HeroSection from "@/components/home/hero-section";
import FeaturedVenues from "@/components/home/featured-venues";
import ActiveRooms from "@/components/home/active-rooms";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";

// Yükleme Durumu Bileşenleri
import VenuesSkeleton from "@/components/skeletons/venues-skeleton";
import RoomsSkeleton from "@/components/skeletons/rooms-skeleton";

// Supabase ile veri çekme fonksiyonları
import { getFeaturedVenues } from "@/actions/venues";
import { getActiveRooms } from "@/actions/rooms";

export default async function Home() {
  // Paralel veri çekme işlemleri
  const featuredVenuesPromise = getFeaturedVenues();
  const activeRoomsPromise = getActiveRooms();
  
  // Veri çekme sonuçları
  const featuredVenues = await featuredVenuesPromise;
  const activeRooms = await activeRoomsPromise;

  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8">Popüler Sahalar</h2>
          <Suspense fallback={<VenuesSkeleton />}>
            <FeaturedVenues venues={featuredVenues} />
          </Suspense>
        </section>
        
        <section className="container mx-auto py-12 px-4 bg-accent/10">
          <h2 className="text-3xl font-bold mb-8">Katılım Bekleyen Maçlar</h2>
          <Suspense fallback={<RoomsSkeleton />}>
            <ActiveRooms rooms={activeRooms} />
          </Suspense>
        </section>
        
        <HowItWorks />
        
        <Testimonials />
        
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
}
```

### Veri Çekme Fonksiyonları

```tsx
// actions/venues.ts
"use server";

import { createClient } from "@/lib/supabase/server";

export async function getFeaturedVenues() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("venues")
    .select(`
      id,
      name,
      address,
      price_per_hour,
      rating,
      venue_images (image_url)
    `)
    .eq("is_active", true)
    .order("rating", { ascending: false })
    .limit(6);
    
  if (error) {
    console.error("Error fetching venues:", error);
    return [];
  }
  
  return data;
}

// actions/rooms.ts
"use server";

import { createClient } from "@/lib/supabase/server";

export async function getActiveRooms() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("rooms")
    .select(`
      id,
      title,
      match_time,
      player_limit,
      venue_id,
      venues (name, address),
      room_positions (position, count, filled)
    `)
    .eq("status", "open")
    .order("match_time", { ascending: true })
    .limit(4);
    
  if (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
  
  return data;
}
```

## 🎮 Kullanıcı Etkileşimleri

### 1. Saha Arama
- Arama çubuğu ile saha adı/konumu arama
- Filtreler:
  - Konum (harita entegrasyonu)
  - Fiyat aralığı
  - Puan
  - Müsaitlik (tarih/saat)
- Sonuçları harita veya liste görünümünde gösterme

### 2. Oda Katılımı
- Katıl butonuna tıklama
- Mevki seçim modalı:
  - Kullanıcı profilindeki mevki default olarak seçili
  - Alternatif mevkiler seçilebilir
- Katılım onayı
- Gerçek zamanlı oda güncellemesi

### 3. Hızlı Rezervasyon
- Tarih ve saat seçimi
- Yakındaki boş sahaların listelenmesi
- Tek tıkla rezervasyon oluşturma

## 📱 Responsive Tasarım Yaklaşımı

### Masaüstü (>1024px)
- Tüm içerik ve özellikler görünür
- 3-4 sütunlu grid tasarım (sahalar, odalar)
- Yatay navigasyon menüsü
- Gelişmiş animasyonlar ve etkileşimler

### Tablet (768px-1024px)
- 2-3 sütunlu grid
- Bazı ikincil içeriklerin gizlenmesi veya küçültülmesi
- Daha kompakt header tasarımı
- Basitleştirilmiş animasyonlar

### Mobil (<768px)
- Tek sütunlu tasarım
- Hamburger menü
- Öncelikli içeriklerin vurgulanması
- Kaydırmalı kartlar yerine liste görünümü
- Minimum animasyon kullanımı

## 🌈 Tema Sistemi

### Temel Renkler
- **Primary**: `#10b981` (Yeşil, futbol sahasını temsil eden)
- **Secondary**: `#3b82f6` (Mavi, skor paneli)
- **Accent**: `#f59e0b` (Amber, dikkat çekici elementler için)
- **Background**: Açık mod için `#ffffff`, karanlık mod için `#121212`
- **Text**: Açık mod için `#121212`, karanlık mod için `#f1f5f9`

### Tema Varyasyonları
- **Default**: Yeşil & Mavi temel tema
- **Pro**: Siyah & Altın premium kullanıcılar için
- **National**: Kullanıcının ülkesine göre (örn. Türkiye için kırmızı & beyaz)

## 📊 Performans Optimizasyonu

### Görsel Optimizasyonu
- Responsive görseller (`<Image>` komponenti ile)
- WebP/AVIF formatı
- Lazy loading
- Görsel boyutlarını ekrana göre ayarlama

### Bileşen Stratejileri
- Veri yoğun bileşenler için Suspense
- İstemci tarafı paging (sonsuz kaydırma)
- Kademeli yükleme (en önemli içerikler önce)
- Veri Önbelleğe Alma (Next.js cache)

## 🧪 Test & SEO Stratejisi

### Test Yaklaşımı
- Bileşen testleri (Jest/React Testing Library)
- E2E testleri (Cypress)
- Responsive testler (farklı ekran boyutları)
- Performans testleri (Lighthouse)

### SEO Optimizasyonu
- Metadata bileşeni:
  ```tsx
  export const metadata = {
    title: 'Soccer Rent | Halısaha Kiralama & Takım Eşleşme Platformu',
    description: 'Tek tıkla halı saha kiralayın, takım bulun, maçlarınızı organize edin. FIFA tarzı profil kartları, meydan okuma sistemi ve daha fazlası.',
    keywords: 'halı saha, saha kiralama, futbol, takım bulma, maç organizasyonu',
    openGraph: {
      images: ['/images/soccer-rent-og.jpg'],
    }
  }
  ```
- Yapısal veri (JSON-LD):
  - SportsActivityLocation veri yapısı
  - Event veri yapısı (maçlar için)
- Canonical URL
- Mobil uyumluluk

## 📝 İmplementasyon Adımları

1. **Temel Bileşen Yapısı**:
   - Layout bileşenleri (Header, Footer)
   - Ana sayfa bölümleri (HeroSection, vb.)
   - UI bileşenleri (butonlar, kartlar, vb.)

2. **Statik İçerik Tasarımı**:
   - Başlıklar, metinler, görseller
   - "Nasıl Çalışır?" bölümü
   - CTA bölümleri

3. **Supabase Entegrasyonu**:
   - Veri çekme fonksiyonları
   - Gerçek zamanlı özellikler için abonelikler
   - Kimlik doğrulama UI entegrasyonu

4. **Dinamik İçerik Bileşenleri**:
   - Halı saha kartları
   - Aktif oda kartları
   - Gerçek zamanlı güncelleme mantığı

5. **Responsive Tasarım**:
   - Tüm ekran boyutları için uyumluluk testleri
   - Breakpoint ayarlamaları
   - Touch kontrollerinin optimizasyonu

6. **Performans ve SEO**:
   - Görsel optimizasyonları
   - Metadata ve yapısal veri implementasyonu
   - Yükleme stratejileri optimizasyonu

## 🔍 İleri Özellikler (Gelecek İterasyonlar)

1. **Konum Tabanlı Özelleştirme**:
   - Kullanıcının konumuna göre yakın sahaları listeleme
   - Konum bazlı filtreleme ve sıralama

2. **Kişiselleştirilmiş Öneriler**:
   - Kullanıcının geçmiş rezervasyonlarına göre öneriler
   - "Senin için" bölümü

3. **Sosyal Özellikler**:
   - Arkadaş sistemi
   - Takım oluşturma ve yönetme
   - Maç skorlarını kaydetme ve istatistikler

4. **Mobil Uygulama Entegrasyonu**:
   - PWA özellikleri
   - Bildirim sistemi
   - Maç hatırlatıcıları

## 🛠️ Kullanılacak Bileşenler ve Kütüphaneler

- **UI Bileşenleri**: Shadcn UI (Radix UI tabanlı)
- **İkonlar**: Lucide Icons
- **Form Yönetimi**: React Hook Form + Zod
- **Animasyonlar**: Framer Motion
- **Haritalar**: Google Maps API
- **Takvim**: React Calendar/FullCalendar
- **Veri Çekme**: TanStack Query (React Query)
- **Gerçek Zamanlı**: Supabase Realtime

## 🎬 Sonuç

Bu anasayfa tasarımı, Soccer Rent platformunun temel değer önerisini vurgulayan, kullanıcı dostu, görsel olarak çekici ve teknik olarak sağlam bir giriş noktası sunacaktır. Modern web teknolojilerinin avantajlarını kullanarak, performanslı, ölçeklenebilir ve bakımı kolay bir yapı oluşturulacaktır. Futbol tutkunlarını bir araya getiren bu platform, anasayfadan itibaren kullanıcıları platforma çekecek ve sezgisel bir şekilde platform özelliklerini keşfetmelerine yardımcı olacaktır. 
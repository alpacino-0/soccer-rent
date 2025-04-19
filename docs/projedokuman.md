# 🟢 Soccer Rent | Halısaha Kiralama & Takım Eşleşme Uygulaması

## 🎯 Proje Amacı

Halı saha sahiplerinin saha bilgilerini tek bir platformda yayınlayabileceği, kullanıcıların ise kolayca saha kiralayabileceği, FIFA tarzı profiller oluşturabileceği, takım eşleşmeleri yapabileceği kapsamlı bir spor platformu.

---

## 📌 Özellikler

### 🏟️ Halısaha Yönetimi
- Halısaha sahipleriyle anlaşmalı sistem // Saha sahipleri kendi sahalarını platforma ekleyebilir
- Her saha için:
  - **Adı** // Halı sahanın ticari adı
  - **Konumu (Google Maps ile)** // Google Maps API entegrasyonu ile konum gösterimi
  - **Adres** // Açık adres bilgisi ve yönlendirme
  - **Fiyat bilgisi** // Saatlik ücret bilgisi, hafta içi/hafta sonu farklı fiyatlandırma
  - **Müsaitlik Takvimi (rezervasyon takvimi)** // Takvim üzerinde rezerve edilebilir saatler
  - **Kullanıcı Puanlaması (yıldız sistemi)** // Önceki kiralayan kullanıcıların verdiği puanların ortalaması
  - **Görseller / Galeri** // Saha fotoğrafları, soyunma odaları, diğer tesisler
  - **İletişim bilgileri (isteğe bağlı)** // Telefon, e-posta veya diğer iletişim kanalları

---

### 👤 Kullanıcı Profili
- Kullanıcı kaydı ve giriş sistemi (Supabase Auth ile E-mail & şifre, Google ile giriş) // Güvenli oturum yönetimi
- FIFA kartı formatında profil:
  - **Ad Soyad** // Gerçek ad veya kullanıcı adı
  - **Yaş** // İstatistik ve eşleşmeler için yaş bilgisi
  - **Boy** // Santimetre cinsinden boy
  - **Kilo** // Kilogram cinsinden ağırlık
  - **Mevki (Kaleci, Defans, Orta Saha, Forvet)** // Tercih edilen oyun pozisyonu
  - **Favori Ayak (Sağ/Sol)** // Dominant ayak tercihi
  - **Genel Oyuncu Puanı** // Sistemin hesapladığı veya diğer oyuncuların verdiği puanların ortalaması
- **Seviye sistemi**:
  - Kiralanan saha sayısına göre seviye artışı // Aktivite ve platform kullanım yoğunluğuna göre seviye
  - Seviye arttıkça profil kartı tasarımı değişir (örn. bronz → gümüş → altın → efsane) // Görsel farklılıklar ve ek özellikler

---

### 🗓️ Halısaha Rezervasyonu
- Takvim tabanlı müsaitlik gösterimi // Sahaların müsait olduğu gün ve saatlerin görsel takvim formatında sunumu
- Online rezervasyon // Anında rezervasyon yapabilme imkanı
- Onay ve iptal bildirimleri (Supabase Edge Functions ve Realtime) // Rezervasyon durumu değiştiğinde anlık bildirimler
- Ödeme altyapısı (Stripe ile entegrasyon) // Güvenli online ödeme sistemi

---

### 🏠 Oda Oluştur & Takım Eşleşme

#### 📁 Oda Oluştur
- Kullanıcılar odalar oluşturabilir // Maç organize etmek için sanal odalar
- Oda bilgileri:
  - Mevki ihtiyacı (örneğin: 1 kaleci, 2 defans, 2 forvet) // Odaya katılacak oyuncuların mevki dağılımı
  - Halısaha yeri ve saati // Maçın yapılacağı saha ve zaman bilgisi
  - Katılım sayısı & limit // Mevcut katılımcı sayısı ve maksimum oyuncu kapasitesi
- Başkaları "oda bul" kısmından katılabilir // Diğer kullanıcılar açık odalara katılabilir
- Gerçek zamanlı oda güncellemeleri (Supabase Realtime ile) // Katılımcı değişiklikleri anlık olarak gösterilir

#### ⚔️ Meydan Okuma Modu
- Takımlar profil kartlarını yükleyerek başka bir takıma meydan okuyabilir // Hazır takımlar arası karşılaşma düzenleme
- Ortak bir saha belirlenir // Karşılaşma için uygun saha ve saat kararlaştırma
- Kabul edilen eşleşme rezervasyona dönüşür // Onaylanan meydan okumaların otomatik rezervasyona dönüşmesi
- Anlık bildirimler (Supabase Realtime) // Meydan okuma, kabul veya red bildirimlerinin anlık iletilmesi

---

## 🛠️ Teknolojiler & Mimari

### 📡 Backend & Veritabanı
- **Veritabanı**: Supabase (PostgreSQL) // Güçlü, açık kaynaklı ilişkisel veritabanı
- **Kimlik Doğrulama**: Supabase Auth // Hazır kimlik doğrulama ve kullanıcı yönetimi
- **Depolama**: Supabase Storage (görsel ve dosyalar için) // Profil ve saha fotoğrafları için bulut depolama
- **Gerçek Zamanlı İletişim**: Supabase Realtime // WebSocket tabanlı gerçek zamanlı veri değişiklikleri
- **Sunucu Fonksiyonları**: Supabase Edge Functions // Sunucu taraflı işlemler için serverless fonksiyonlar

### 🖥️ Frontend
- **Framework**: Next.js 15 (App Router) // React tabanlı, SEO dostu, hızlı sayfa yükleme
- **Stil**: Tailwind CSS 4.x // Utility-first CSS framework ile hızlı UI geliştirme
- **UI Bileşenleri**: Shadcn UI // Erişilebilir ve özelleştirilebilir UI bileşenleri
- **Form Yönetimi**: React Hook Form + Zod // Performanslı form yönetimi ve doğrulama
- **Durum Yönetimi**: TanStack Query (React Query) + Zustand (isteğe bağlı) // Veri fetching ve global state yönetimi
- **Haritalama**: Google Maps API // Konum gösterimi ve yol tarifi için
- **Takvim**: React-Calendar veya FullCalendar.js // Rezervasyon ve boş zaman gösterimi
- **Animasyonlar**: Framer Motion // Akıcı UI animasyonları

### 🚀 Deployment
- **Hosting**: Vercel // Next.js projeleri için optimize edilmiş hosting
- **Veritabanı & Backend**: Supabase // Yönetilen veritabanı ve backend servisleri

### 📱 Uyumluluk
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu // Farklı ekran boyutlarına adapte olabilen arayüz
- **Karanlık/Aydınlık Mod**: Kullanıcı tercihine göre tema desteği // Sistem ayarlarına veya kullanıcı tercihine göre değişen temalar
- **Tarayıcı Uyumluluğu**: Chrome, Firefox, Safari, Edge // Modern tarayıcılarda test edilmiş performans

---

## 📊 Veritabanı Şeması

### 📝 Tablo Yapısı

1. **users** 
   - id (uuid, PK) // Benzersiz kullanıcı tanımlayıcısı
   - email // Kullanıcı e-posta adresi, hesap doğrulama için kullanılır
   - full_name // Kullanıcının tam adı
   - age // Kullanıcının yaşı, maç eşleştirme için kullanılır
   - height // Boy bilgisi (cm)
   - weight // Kilo bilgisi (kg)
   - position (enum: 'goalkeeper', 'defender', 'midfielder', 'forward') // Oyuncunun tercih ettiği mevki
   - preferred_foot (enum: 'right', 'left', 'both') // Dominant ayak tercihi
   - player_rating // Oyuncunun genel puanı (0-100 arası)
   - level // Kullanıcı seviyesi, bronz, gümüş, altın vb.
   - profile_image_url // Profil fotoğrafının depolama URL'i
   - created_at // Hesap oluşturma tarihi
   - updated_at // Son profil güncelleme tarihi

2. **venues**
   - id (uuid, PK) // Benzersiz saha tanımlayıcısı
   - name // Saha adı
   - owner_id (FK -> users.id) // Saha sahibinin kullanıcı ID'si
   - address // Tam adres bilgisi
   - coordinates (POINT) // Enlem ve boylam (harita gösterimi için)
   - price_per_hour // Saatlik kiralama ücreti
   - description // Saha özellikleri ve açıklaması
   - contact_info // İletişim bilgileri (telefon, e-posta)
   - rating // Kullanıcı değerlendirmelerinin ortalaması (1-5 arası)
   - created_at // Sahanın sisteme eklenme tarihi
   - updated_at // Son güncelleme tarihi

3. **venue_images**
   - id (uuid, PK) // Benzersiz görsel tanımlayıcısı
   - venue_id (FK -> venues.id) // İlişkili sahanın ID'si
   - image_url // Görsel dosyasının depolama URL'i
   - is_main // Ana görsel mi? (saha kartlarında gösterilecek)
   - created_at // Görselin yüklenme tarihi

4. **bookings**
   - id (uuid, PK) // Benzersiz rezervasyon tanımlayıcısı
   - venue_id (FK -> venues.id) // Rezerve edilen sahanın ID'si
   - user_id (FK -> users.id) // Rezervasyonu yapan kullanıcının ID'si
   - start_time // Rezervasyon başlangıç zamanı (tarih ve saat)
   - end_time // Rezervasyon bitiş zamanı (tarih ve saat)
   - status (enum: 'pending', 'confirmed', 'cancelled') // Rezervasyon durumu
   - total_price // Toplam rezervasyon ücreti
   - payment_status // Ödeme durumu (ödendi, beklemede, iptal edildi)
   - created_at // Rezervasyon oluşturma tarihi
   - updated_at // Son güncelleme tarihi

5. **rooms**
   - id (uuid, PK) // Benzersiz oda tanımlayıcısı
   - creator_id (FK -> users.id) // Odayı oluşturan kullanıcının ID'si
   - venue_id (FK -> venues.id) // Maçın yapılacağı sahanın ID'si
   - booking_id (FK -> bookings.id, nullable) // İlişkili rezervasyon ID'si (varsa)
   - title // Oda başlığı
   - description // Oda açıklaması, özel notlar, kurallar vb.
   - match_time // Maç zamanı (tarih ve saat)
   - player_limit // Maksimum oyuncu sayısı
   - is_challenge // Meydan okuma odası mı?
   - status (enum: 'open', 'full', 'closed') // Odanın mevcut durumu
   - created_at // Oda oluşturma tarihi
   - updated_at // Son güncelleme tarihi

6. **room_positions**
   - id (uuid, PK) // Benzersiz kayıt tanımlayıcısı
   - room_id (FK -> rooms.id) // İlişkili odanın ID'si
   - position (enum: 'goalkeeper', 'defender', 'midfielder', 'forward') // Mevki türü
   - count // İhtiyaç duyulan oyuncu sayısı (her mevki için)
   - filled // Mevcut doluluk sayısı (her mevki için)

7. **room_players**
   - id (uuid, PK) // Benzersiz kayıt tanımlayıcısı
   - room_id (FK -> rooms.id) // İlişkili odanın ID'si
   - user_id (FK -> users.id) // Odaya katılan kullanıcının ID'si
   - position // Kullanıcının odadaki mevkisi
   - joined_at // Odaya katılma tarihi ve saati

8. **challenges**
   - id (uuid, PK) // Benzersiz meydan okuma tanımlayıcısı
   - challenger_room_id (FK -> rooms.id) // Meydan okuyan odanın ID'si
   - challenged_room_id (FK -> rooms.id) // Meydan okunan odanın ID'si
   - status (enum: 'pending', 'accepted', 'rejected') // Meydan okuma durumu
   - venue_id (FK -> venues.id, nullable) // Karşılaşma için seçilen saha ID'si
   - match_time (nullable) // Karşılaşma zamanı (tarih ve saat)
   - created_at // Meydan okuma oluşturma tarihi
   - updated_at // Son güncelleme tarihi

9. **reviews**
   - id (uuid, PK) // Benzersiz değerlendirme tanımlayıcısı
   - venue_id (FK -> venues.id) // Değerlendirilen sahanın ID'si
   - user_id (FK -> users.id) // Değerlendirmeyi yapan kullanıcının ID'si
   - rating // Puan (1-5 arası)
   - comment // Yorum metni
   - created_at // Değerlendirme tarihi

---

## 🔐 Güvenlik
- Supabase Auth ile güvenli kimlik doğrulama // JWT tabanlı modern kimlik doğrulama sistemi
- Row Level Security (RLS) ile veritabanı güvenliği // Kullanıcı bazlı veri erişim kontrolü
- E-posta doğrulama // Sahte hesapları önlemek için doğrulama
- JWT tabanlı oturum yönetimi // Güvenli ve durumsuz (stateless) oturum yönetimi
- Rezervasyon onayları için captcha doğrulama // Bot ve otomatik rezervasyonları engelleme
- API güvenliği için rate limiting // Aşırı istek saldırılarına karşı koruma
- Edge Functions ile güvenli sunucu işlemleri // Hassas işlemlerin sunucu tarafında yapılması

---

## 📂 Sayfa ve Bileşen Yapısı

### 📱 Sayfalar
- [ ] `app/page.tsx` - Anasayfa (Halısaha listesi) // Uygulamanın giriş noktası ve öne çıkan sahalar
- [ ] `app/auth/login/page.tsx` - Giriş Sayfası // Kullanıcı girişi
- [ ] `app/auth/register/page.tsx` - Kayıt Sayfası // Yeni kullanıcı kaydı
- [ ] `app/venues/page.tsx` - Tüm Halı Sahalar Listesi // Filtreleme ve sıralama özellikli liste
- [ ] `app/venues/[id]/page.tsx` - Halısaha Detay Sayfası // Tek bir sahanın detaylı bilgileri
- [ ] `app/venues/[id]/book/page.tsx` - Rezervasyon Sayfası // Saha rezervasyon ekranı
- [ ] `app/profile/page.tsx` - Kullanıcı Profili // FIFA kartı formatında profil görünümü
- [ ] `app/profile/settings/page.tsx` - Profil Ayarları // Kullanıcı bilgilerini düzenleme ekranı
- [ ] `app/rooms/page.tsx` - Oda Bul Sayfası // Mevcut açık odaların listesi
- [ ] `app/rooms/create/page.tsx` - Oda Oluştur Sayfası // Yeni oda oluşturma formu
- [ ] `app/rooms/[id]/page.tsx` - Oda Detay Sayfası // Tek bir odanın detayları ve katılım
- [ ] `app/challenges/page.tsx` - Meydan Okumalar Sayfası // Meydan okuma/kabul ekranı
- [ ] `app/dashboard/page.tsx` - Yönetim Paneli Giriş // Admin ve saha sahipleri için yönetim paneli
- [ ] `app/dashboard/venues/page.tsx` - Saha Yönetimi // Sahaların listelendiği ve yönetildiği ekran
- [ ] `app/dashboard/venues/[id]/page.tsx` - Saha Düzenleme // Saha bilgilerini düzenleme ekranı

### 🧩 Bileşenler
- [ ] `components/ui/` - Temel UI bileşenleri (Shadcn/UI) // Butonlar, formlar, modallar vb.
- [ ] `components/layout/` - Layout bileşenleri (Header, Footer, vb.) // Sayfa düzeni bileşenleri
- [ ] `components/venues/` - Halısaha bileşenleri (VenueCard, VenueDetails, vb.) // Saha ile ilgili bileşenler
- [ ] `components/auth/` - Kimlik doğrulama bileşenleri // Giriş, kayıt, şifre sıfırlama formları
- [ ] `components/profile/` - Profil bileşenleri (FIFACard, UserStats, vb.) // Kullanıcı profili ile ilgili bileşenler
- [ ] `components/calendar/` - Takvim ve rezervasyon bileşenleri // Tarih seçimi, müsaitlik gösterimi
- [ ] `components/rooms/` - Oda bileşenleri (RoomCard, PositionSelector, vb.) // Oda listesi ve detayları
- [ ] `components/challenges/` - Meydan okuma bileşenleri // Meydan okuma kartları ve işlem butonları

---

## 🔄 API Rotaları
- `/app/api/venues/route.ts` - Halı Saha işlemleri // Sahaları listeleme, filtreleme, detay görüntüleme
- `/app/api/bookings/route.ts` - Rezervasyon işlemleri // Rezervasyon oluşturma, iptal etme, listeleme
- `/app/api/rooms/route.ts` - Oda işlemleri // Oda oluşturma, katılma, listeleme
- `/app/api/challenges/route.ts` - Meydan okuma işlemleri // Meydan okuma gönderme, kabul etme/reddetme

---

## ✅ Durum Takibi (To-Do)
- [ ] Proje yapısı ve mimarisi oluşturulacak // Klasör yapısı, bileşen organizasyonu
- [ ] Supabase bağlantısı ve şeması kurulacak // Veritabanı tabloları, ilişkiler, RLS kuralları
- [ ] Kimlik doğrulama (Auth) sistemi entegre edilecek // Giriş, kayıt, oturum yönetimi
- [ ] Halısaha modeli ve CRUD işlemleri // Saha ekleme, düzenleme, listeleme, silme
- [ ] Görsel yükleme sistemi // Saha ve profil fotoğrafları için
- [ ] Takvim ve rezervasyon sistemi // Müsaitlik kontrolü ve rezervasyon akışı
- [ ] Profil kartı dinamiği // FIFA benzeri kart tasarımı ve seviye sistemi
- [ ] Oda oluşturma ve yönetim sistemi // Odalar ve katılım mekanizması
- [ ] Gerçek zamanlı (Realtime) özellikler // Anlık bildirimler ve güncellemeler
- [ ] Meydan okuma sistemi // Takımlar arası meydan okuma mekanizması
- [ ] Admin paneli // Sistem yönetimi ve moderasyon araçları
- [ ] Karanlık/Aydınlık mod desteği // Tema değiştirme ve kaydetme
- [ ] Duyarlı (responsive) tasarım // Tüm ekran boyutlarına uyum
- [ ] Testler ve hata ayıklama // Birim testleri ve entegrasyon testleri
- [ ] Vercel'e deployment // Canlı ortama yayınlama ve domain ayarları

---

## 📦 Kurulum Talimatları

```bash
# Proje klonlama
git clone https://github.com/kullanici/soccer-rent.git
cd soccer-rent

# Bağımlılıkları yükleme
npm install

# .env.local dosyası oluşturma
cp .env.example .env.local

# .env.local dosyasını düzenleme
# NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY ekleyin

# Geliştirme sunucusunu başlatma
npm run dev
```

---

## 📞 İletişim
Herhangi bir katkıda bulunmak, öneri ya da hata bildirmek isterseniz:  
📧 **iletisim@soccerent.com** (örnek)


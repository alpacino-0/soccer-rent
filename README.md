# Soccer Rent Projesi Dökümantasyonu

Bu dökümantasyon, Soccer Rent projesinin yapısını ve bileşenlerini detaylı olarak açıklamaktadır.

## Proje Genel Bakış

Soccer Rent, futbol sahalarının kiralanmasını sağlayan bir web uygulamasıdır. Next.js framework'ü üzerine kurulu, TypeScript ile geliştirilmiş ve modern web teknolojilerini kullanan bir projedir.

## Teknoloji Yığını

- **Frontend Framework**: Next.js 13+ (App Router)
- **Programlama Dili**: TypeScript
- **Stil Kütüphanesi**: Tailwind CSS
- **Veritabanı**: Supabase (PostgreSQL temelli)
- **Kimlik Doğrulama**: Supabase Auth
- **UI Bileşenleri**: Radix UI
- **Tema Desteği**: next-themes

## Proje Klasör Yapısı

```
soccer-rent/
├── .next/                  # Next.js tarafından oluşturulan build dosyaları
├── app/                    # Ana uygulama dosyaları ve sayfalar
│   ├── (auth-pages)/       # Kimlik doğrulama ile ilgili sayfalar
│   ├── auth/               # Auth callback işlemleri
│   ├── protected/          # Yalnızca oturum açmış kullanıcılar için sayfalar
│   ├── actions.ts          # Sunucu tarafı işlemler (server actions)
│   ├── globals.css         # Global CSS stilleri
│   ├── layout.tsx          # Ana sayfa düzeni (layout)
│   └── page.tsx            # Ana sayfa içeriği
├── components/             # Tekrar kullanılabilir UI bileşenleri
│   ├── tutorial/           # Öğretici bileşenler
│   ├── typography/         # Tipografi ile ilgili bileşenler
│   ├── ui/                 # Genel UI bileşenleri
│   └── ...                 # Diğer bileşenler
├── lib/                    # Yardımcı kütüphaneler ve fonksiyonlar
│   └── utils.ts            # Genel yardımcı fonksiyonlar
├── utils/                  # Yardımcı fonksiyonlar ve araçlar
│   ├── supabase/           # Supabase ile ilgili yardımcılar
│   └── utils.ts            # Genel yardımcı fonksiyonlar
├── public/                 # Statik dosyalar (görseller, ikonlar, vb.)
├── .env                    # Ortam değişkenleri
├── .env.local              # Yerel ortam değişkenleri
├── next.config.ts          # Next.js yapılandırma dosyası
├── package.json            # Proje bağımlılıkları ve scriptleri
├── tailwind.config.ts      # Tailwind CSS yapılandırması
└── tsconfig.json           # TypeScript yapılandırması
```

## Klasörler ve Dosyaların Açıklamaları

### `/app` Klasörü

Next.js'in App Router yapısını kullanan bu klasör, uygulamanın tüm sayfa ve route yapısını içerir.

- **`layout.tsx`**: Tüm sayfalar için ortak layout'u tanımlar. İçerisinde:
  ```tsx
  // Temel HTML yapısı, tema sağlayıcısı, navigasyon ve footer'ı içerir
  <html lang="en" className={geistSans.className}>
    <body>
      <ThemeProvider>
        <main>
          <nav>...</nav>
          <div>{children}</div>
          <footer>...</footer>
        </main>
      </ThemeProvider>
    </body>
  </html>
  ```

- **`page.tsx`**: Ana sayfanın içeriğini tanımlar:
  ```tsx
  export default async function Home() {
    return (
      <>
        <Hero />
        <main className="flex-1 flex flex-col gap-6 px-4">
          <h2 className="font-medium text-xl mb-4">Next steps</h2>
          {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </>
    );
  }
  ```

- **`actions.ts`**: Sunucu tarafı işlemleri (server actions) içerir:
  ```tsx
  "use server";
  
  // Kimlik doğrulama işlemleri
  export const signUpAction = async (formData: FormData) => {
    // Kullanıcı kaydı işlemleri
  };
  
  export const signInAction = async (formData: FormData) => {
    // Kullanıcı girişi işlemleri
  };
  
  export const forgotPasswordAction = async (formData: FormData) => {
    // Şifre sıfırlama işlemleri
  };
  ```

- **`(auth-pages)/`**: Parentez içindeki klasör isimleri URL'de görünmez. Bu klasör, giriş, kayıt, şifre sıfırlama gibi kimlik doğrulama sayfalarını içerir.

- **`protected/`**: Yalnızca oturum açmış kullanıcıların erişebileceği sayfaları içerir. Middleware tarafından korunur.

### `/components` Klasörü

Tekrar kullanılabilir UI bileşenlerini içerir.

- **`ui/`**: Temel UI bileşenleri (butonlar, formlar, kartlar vb.)
- **`typography/`**: Metin ile ilgili bileşenler (başlıklar, paragraflar vb.)
- **`tutorial/`**: Öğretici içerikleri görüntüleyen bileşenler
- **`hero.tsx`**: Ana sayfadaki hero bölümü:
  ```tsx
  export default function Hero() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Soccer Rent</h1>
        <p className="text-lg">Futbol sahası kiralama platformu</p>
        {/* ... */}
      </div>
    );
  }
  ```

- **`header-auth.tsx`**: Kimlik doğrulama durumuna göre header'ı görüntüler
- **`theme-switcher.tsx`**: Koyu/açık tema geçişi sağlayan bileşen

### `/utils` Klasörü

Yardımcı fonksiyonlar ve araçlar içerir.

- **`supabase/`**: Supabase bağlantısı ve işlemleri için yardımcı fonksiyonlar
- **`utils.ts`**: Genel yardımcı fonksiyonlar:
  ```tsx
  // URL yönlendirmeleri için helper fonksiyon
  export const encodedRedirect = (
    type: string,
    path: string,
    message: string
  ) => {
    return redirect(`${path}?message=${encodeURIComponent(message)}&type=${type}`);
  };
  ```

### `/lib` Klasörü

Harici kütüphanelerle entegrasyon ve diğer yardımcı araçları içerir.

### Konfigürasyon Dosyaları

- **`next.config.ts`**: Next.js yapılandırması
- **`tailwind.config.ts`**: Tailwind CSS konfigürasyonu, tema renkleri ve eklentileri
- **`tsconfig.json`**: TypeScript derleyici ayarları
- **`.env`**: API anahtarları, veritabanı bağlantı bilgileri gibi çevresel değişkenler

## Ana Sayfa Yapısı Örneği

Ana sayfa, temel olarak şu bileşenlerden oluşur:

1. **Layout**: Tüm sayfaları saran genel düzen
   - Header (Navigasyon)
   - İçerik alanı
   - Footer

2. **Hero Bölümü**: Kullanıcıyı karşılayan ana bölüm
   - Dikkat çekici başlık ve alt başlık
   - Çağrı butonları (CTA)

3. **İçerik Bölümü**: Kullanıcıya sunulan ana içerik
   - Özellikler
   - Nasıl kullanılır adımları
   - Sahaları görüntüleme seçenekleri

## Kimlik Doğrulama İş Akışı

1. Kullanıcı kayıt veya giriş sayfasını ziyaret eder
2. Bilgilerini girerek formu gönderir
3. `actions.ts` içindeki server action çağrılır
4. Supabase ile iletişim kurularak kimlik doğrulama gerçekleştirilir
5. Başarılı ise kullanıcı korumalı alana yönlendirilir, başarısız ise hata mesajı gösterilir

## Veritabanı İletişimi

Supabase, PostgreSQL tabanlı veritabanı ve kimlik doğrulama servisi olarak kullanılmaktadır:

```tsx
// Server side Supabase client oluşturma
const supabase = await createClient();

// Veri çekme örneği
const { data, error } = await supabase
  .from('soccer_fields')
  .select('*')
  .eq('is_active', true);
```

## Stil ve Tema Yönetimi

- Tailwind CSS ile responsive tasarım
- `next-themes` ile koyu/açık tema desteği
- Radix UI bileşenleri ile erişilebilir UI elementleri

## Geliştirme Süreci

1. Yerel geliştirme:
   ```bash
   npm run dev
   ```

2. Production build:
   ```bash
   npm run build
   npm run start
   ```

## Sonuç

Soccer Rent projesi, modern web geliştirme pratiklerini izleyen, modüler ve ölçeklenebilir bir yapıya sahiptir. Next.js App Router, TypeScript ve Supabase'in güçlü özelliklerini kullanarak güvenli ve performanslı bir uygulama sunmaktadır. 
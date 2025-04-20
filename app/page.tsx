export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <section className="py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SoccerRent</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Halı saha kiralama ve takım arkadaşı bulma platformu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/venues" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90">
              Saha Bul
            </a>
            <a href="/rooms" className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary/90">
              Takım Bul
            </a>
          </div>
        </section>
        
        <section className="py-8 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Popüler Sahalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Saha kartları burada listelenecek */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48" />
              <div className="p-4">
                <h3 className="font-bold text-lg">Örnek Saha 1</h3>
                <p className="text-sm text-muted-foreground">Kadıköy, İstanbul</p>
                <div className="flex justify-between mt-2">
                  <p className="font-medium">300₺/saat</p>
                  <p className="text-sm">⭐️ 4.8 (24)</p>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48" />
              <div className="p-4">
                <h3 className="font-bold text-lg">Örnek Saha 2</h3>
                <p className="text-sm text-muted-foreground">Beşiktaş, İstanbul</p>
                <div className="flex justify-between mt-2">
                  <p className="font-medium">350₺/saat</p>
                  <p className="text-sm">⭐️ 4.6 (18)</p>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48" />
              <div className="p-4">
                <h3 className="font-bold text-lg">Örnek Saha 3</h3>
                <p className="text-sm text-muted-foreground">Beylikdüzü, İstanbul</p>
                <div className="flex justify-between mt-2">
                  <p className="font-medium">280₺/saat</p>
                  <p className="text-sm">⭐️ 4.5 (32)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="/venues" className="text-primary font-medium hover:underline">
              Tüm Sahaları Gör →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

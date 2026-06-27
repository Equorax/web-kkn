import ProductCard from '../components/ProductCard'

const featuredProducts = [
  { name: 'Stik Bawang', description: 'Stik bawang gurih dan renyah, camilan favorit keluarga.', image: '🥟' },
  { name: 'Keripik Singkong', description: 'Keripik singkong pedas manis, cocok untuk teman santai.', image: '🍟' },
  { name: 'Kue Kering', description: 'Kue kering homemade dengan resep spesial.', image: '🍪' },
]

export default function Home({ setPage }) {
  return (
    <>
      <section className="relative bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#8F0007' }}>
            Snack KKN
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#D0311E' }}>
            Camilan homemade fresh, halal, dan penuh cinta. Temukan camilan favoritmu!
          </p>
          <button
            onClick={() => setPage('menu')}
            className="mt-8 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg cursor-pointer"
          >
            Lihat Menu
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#8F0007' }}>
          Camilan Andalan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold" style={{ color: '#8F0007' }}>
            Kenapa Pilih Snack KKN?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3">🥜</div>
              <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>Bahan Fresh</h3>
              <p className="text-gray-600 mt-2 text-sm">Menggunakan bahan-bahan segar dan berkualitas</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3">🕌</div>
              <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>Halal</h3>
              <p className="text-gray-600 mt-2 text-sm">Terjamin kehalalan dan kebersihannya</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>Mudah Dipesan</h3>
              <p className="text-gray-600 mt-2 text-sm">Pemesanan mudah melalui WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

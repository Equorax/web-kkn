import ProductCard from '../components/ProductCard'

const products = [
  { name: 'Stik Bawang', description: 'Stik bawang gurih dan renyah, camilan favorit keluarga.' },
  { name: 'Keripik Singkong', description: 'Keripik singkong pedas manis, cocok untuk teman santai.' },
  { name: 'Kue Kering Nastar', description: 'Kue nastar homemade dengan selai nanas asli.' },
  { name: 'Kastengel', description: 'Kue keju khas Belanda dengan rasa gurih.' },
  { name: 'Putri Salju', description: 'Kue putri salju lembut dengan taburan gula halus.' },
  { name: 'Rengginang', description: 'Rengginang tradisional yang renyah dan gurih.' },
  { name: 'Keripik Pisang', description: 'Keripik pisang manis dan renyah, cocok untuk cemilan.' },
  { name: 'Bolu Kukus', description: 'Bolu kukus lembut dengan berbagai varian rasa.' },
]

const emojis = ['🥟', '🍟', '🍪', '🧀', '❄️', '🍘', '🍌', '🧁']

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold" style={{ color: '#8F0007' }}>Menu Camilan</h1>
        <p className="mt-2 text-lg" style={{ color: '#D0311E' }}>Pilih camilan favoritmu!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.name} {...p} image={emojis[i % emojis.length]} />
        ))}
      </div>
    </div>
  )
}

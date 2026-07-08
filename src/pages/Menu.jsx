import ProductCard from '../components/ProductCard'

import bolu from '../images/Bolu.jpeg'
import boluKelapaMini from '../images/Bolu kelapa mini.jpeg'
import brownisMini from '../images/Brownis mini.jpeg'
import donat from '../images/Donat.jpeg'
import kueLapis from '../images/Kue Lapis.jpeg'
import kueUlangTahun from '../images/Kue ulang tahun.jpeg'
import lapisSurabaya from '../images/Lapis surabaya.jpeg'
import lemper from '../images/Lemper.jpeg'
import ondeOnde from '../images/Onde-onde.png'
import saragon from '../images/Saragon.jpeg'
import sengkulun from '../images/Sengkulun.jpeg'
import wingkoBabat from '../images/Wingko Babat.jpeg'
import dawet from '../images/dawet.jpeg'
import risoles from '../images/risoles.jpeg'

const products = [
  { name: 'Bolu', description: 'Bolu lembut dan empuk, camilan klasik yang disukai semua kalangan.', image: bolu },
  { name: 'Bolu Kelapa Mini', description: 'Bolu mini dengan taburan kelapa parut, manis dan gurih.', image: boluKelapaMini },
  { name: 'Brownis Mini', description: 'Brownis mini coklat legit, cocok untuk cemilan sehari-hari.', image: brownisMini },
  { name: 'Donat', description: 'Donat empuk dengan topping manis, pilihan tepat untuk camilan.', image: donat },
  { name: 'Kue Lapis', description: 'Kue lapis tradisional dengan tekstur kenyal dan rasa manis.', image: kueLapis },
  { name: 'Kue Ulang Tahun', description: 'Kue ulang tahun spesial dengan hiasan menarik.', image: kueUlangTahun },
  { name: 'Lapis Surabaya', description: 'Lapis Surabaya klasik dengan rasa legit dan mewah.', image: lapisSurabaya },
  { name: 'Lemper', description: 'Lemper isi ayam berbungkus daun pisang, gurih dan nikmat.', image: lemper },
  { name: 'Onde-onde', description: 'Onde-onde wijen dengan isi kacang hijau, renyah di luar legit di dalam.', image: ondeOnde },
  { name: 'Saragon', description: 'Saragon tradisional yang manis dan gurih, camilan khas.', image: saragon },
  { name: 'Sengkulun', description: 'Sengkulun kenyal manis, jajanan pasar yang selalu dirindu.', image: sengkulun },
  { name: 'Wingko Babat', description: 'Wingko babat legit dan manis, khas dari Babat Lamongan.', image: wingkoBabat },
  { name: 'Dawet', description: 'Dawet manis segar, cocok sebagai pencuci mulut.', image: dawet },
  { name: 'Risoles', description: 'Risoles isi sayuran dan daging, gurih dan lezat.', image: risoles },
]

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold" style={{ color: '#8F0007' }}>Menu Camilan</h1>
        <p className="mt-2 text-lg" style={{ color: '#D0311E' }}>Pilih camilan favoritmu!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}

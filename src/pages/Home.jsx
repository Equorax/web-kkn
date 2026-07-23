import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import bolu from '../images/Bolu.jpeg'
import donat from '../images/Donat.jpeg'
import ondeOnde from '../images/Onde-onde.png'
import banner from '../images/Bannner.jpeg'
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidPackage } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";

const featuredProducts = [
  { name: 'Bolu', description: 'Bolu lembut dan empuk, camilan klasik yang disukai semua kalangan.', image: bolu },
  { name: 'Donat', description: 'Donat empuk dengan topping manis, pilihan tepat untuk camilan.', image: donat },
  { name: 'Onde-onde', description: 'Onde-onde wijen dengan isi kacang hijau, renyah di luar legit di dalam.', image: ondeOnde },
]

export default function Home() {
  return (
    <>
      <section className="relative bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#8F0007' }}>
            Kamsa Jaya Bu Sarmi
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#D0311E' }}>
            Camilan homemade,fresh, dan penuh cinta. Temukan camilan favoritmu!
          </p>
          <Link
            to="/produk"
            className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg"
          >
            Lihat Menu
          </Link>
        </div>
      </section>
      <div className="flex justify-center content-center mt-10">
        <img
        src={banner}
        alt="Banner Kamsa Jaya Bu Sarmi"
        className=" lg:w-6xl md:w-lg sm: w-sm rounded-xl border-[#8F0007] border-5"
        
      />
      </div>
      

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
            Kenapa Pilih Snack Kamsa Jaya Bu Sarmi?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3 flex justify-center"><FaBowlFood className = " text-[#8F0007]"/></div>
              <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>Bahan Fresh</h3>
              
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3 flex justify-center"> <BiSolidPackage className='text-[#8F0007]'/></div>
              <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>Mudah Dipesan</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3 flex justify-center"><ImSpoonKnife className='text-[#8F0007]'/></div>
              <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>Rasa Otentik</h3>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

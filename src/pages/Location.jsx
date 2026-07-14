import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Location() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold" style={{ color: '#8F0007' }}>Lokasi Kami</h1>
        <p className="mt-2 text-lg" style={{ color: '#D0311E' }}>Temukan kami di peta berikut</p>
      </div>

      <div className="rounded-6xl overflow-hidden shadow-lg border border-secondary/50">
        <iframe
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356.87731972405544!2d110.58559540085969!3d-7.8554469682118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4f003de2a589%3A0xdc862bd2b7283d7d!2sKamsa%20Jaya!5e0!3m2!1sen!2sid!4v1784037747349!5m2!1sen!2sid" 
          className="w-full h-96"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Lokasi Kamsa Jaya"
        />
      </div>

      <div className="mt-8 bg-secondary rounded-2xl p-6 text-center">
        <h2 className="font-bold text-xl" style={{ color: '#8F0007' }}>Hubungi Kami</h2>
        <p className=" flex justify-center mt-2">
          <IoLocation className="text-[#8F0007] mr-2 "/> Gg. Sunan Gresik Jl. Buyutan, RT.03/RW.03, Watumoyo, Ngalang, Kec. Gedang Sari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55863
        </p>
        <p className=" flex justify-center">
           <FaPhoneAlt className="text-[#8F0007] mr-2"/>0813-2524-4824
        </p>
      </div>
    </div>
  )
}

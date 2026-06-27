export default function Location() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold" style={{ color: '#8F0007' }}>Lokasi Kami</h1>
        <p className="mt-2 text-lg" style={{ color: '#D0311E' }}>Temukan kami di peta berikut</p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg border border-secondary/50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31618.89894231827!2d110.56421323476565!3d-7.857091999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1782568163027!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Lokasi Snack KKN"
        />
      </div>

      <div className="mt-8 bg-secondary rounded-2xl p-6 text-center">
        <h2 className="font-bold text-xl" style={{ color: '#8F0007' }}>Hubungi Kami</h2>
        <p className="mt-2 text-gray-700">
          📍 Dusun KKN, Yogyakarta
        </p>
        <p className="text-gray-700">
          📞 0812-3456-7890
        </p>
      </div>
    </div>
  )
}

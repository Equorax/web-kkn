export default function ProductCard({ name, price, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-secondary flex items-center justify-center text-5xl">
        {image || '🍪'}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg" style={{ color: '#8F0007' }}>{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

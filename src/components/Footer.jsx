export default function Footer() {
  return (
    <footer className="bg-primary text-white/90 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-semibold text-lg">Kamsa Jaya Bu Sarmi</p>
        <p className="text-sm mt-1 text-white/70">Camilan homemade & fresh </p>
        <div className="border-t border-white/20 mt-4 pt-4 text-sm text-white/60">
          &copy; {new Date().getFullYear()} Kamsa Jaya Bu Sarmi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
